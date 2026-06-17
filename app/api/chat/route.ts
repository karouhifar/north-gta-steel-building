import { NextRequest } from "next/server";
import { ThinkingLevel } from "@google/genai";

import { ai, CHAT_MODEL } from "@/lib/AIBot/gemini";
import { retrieve } from "@/lib/AIBot/retrieval";

export const runtime = "nodejs"; // fs access for the JSON store

const SYSTEM_PROMPT = `You are SteelBot, an assistant for steel building and

structural engineering design questions. You answer ONLY using the provided

document context.

Rules:

- Ground every technical claim (capacities, grades, clause numbers, factors,

  dimensions) in the context. Cite the source like [filename, §section].

- If the context does not contain the answer, say so plainly and suggest what

  document or code section the user should check. Never invent values.

- Preserve units exactly as written (kips, kN, MPa, ksi). Never convert

  silently — if you convert, show the conversion.

- Use Markdown. Keep formulas readable.

- Always end safety-relevant answers with: "Verify with a licensed structural

  engineer and the governing code edition for your jurisdiction."`;

interface ChatMessage {
  role: "user" | "model";

  text: string;
}

export async function POST(req: NextRequest) {
  const { messages } = (await req.json()) as { messages: ChatMessage[] };

  const question = messages[messages.length - 1]?.text ?? "";

  if (!question.trim()) {
    return new Response("Empty message", { status: 400 });
  }

  // 1) Retrieve relevant chunks

  const hits = await retrieve(question, 5);

  const context = hits
    .map((h, i) => {
      const source = (h.metadata.source as string) ?? "unknown";
      const section = h.metadata.section as string | undefined;

      return `--- Source ${i + 1}: ${source}${section ? ` §${section}` : ""} (relevance ${h.score.toFixed(2)}) ---\n${h.content}`;
    })
    .join("\n\n");

  // 2) Build conversation history + grounded final turn

  const history = messages.slice(0, -1).map((m) => ({
    role: m.role,

    parts: [{ text: m.text }],
  }));

  const finalTurn = {
    role: "user" as const,

    parts: [
      {
        text: `DOCUMENT CONTEXT:\n${context}\n\nQUESTION: ${question}`,
      },
    ],
  };

  // 3) Stream the response

  const stream = await ai.models.generateContentStream({
    model: CHAT_MODEL,

    contents: [...history, finalTurn],

    config: {
      systemInstruction: SYSTEM_PROMPT,

      thinkingConfig: { thinkingLevel: ThinkingLevel.LOW }, // fast; raise to "medium" for harder reasoning
    },
  });

  // 4) Pipe chunks to the client as plain text

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const text = chunk.text;

          if (text) controller.enqueue(encoder.encode(text));
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

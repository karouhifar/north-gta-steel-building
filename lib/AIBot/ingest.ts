import "dotenv/config"; // loads SUPABASE_URL / key for a standalone script
import fs from "node:fs";
import path from "node:path";

import { PDFParse } from "pdf-parse";
import { createClient } from "@supabase/supabase-js";

import { ai, EMBEDDING_MODEL, EMBEDDING_DIM } from "./gemini";
import { chunkDocument } from "./chunking";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const DOCS_DIR = path.join(process.cwd(), "docs");

async function extractText(filePath: string): Promise<string> {
  if (filePath.endsWith(".pdf")) {
    const data = new PDFParse(new Uint8Array(fs.readFileSync(filePath)));
    const result = await data.getText();
    return result.text;
  }
  return fs.readFileSync(filePath, "utf-8"); // .txt / .md fallback
}

async function embedBatch(texts: string[]): Promise<number[][]> {
  const res = await ai.models.embedContent({
    model: EMBEDDING_MODEL,
    contents: texts,
    config: {
      taskType: "RETRIEVAL_DOCUMENT",
      outputDimensionality: EMBEDDING_DIM,
    },
  });
  return res.embeddings!.map((e) => e.values!);
}

async function main() {
  const files = fs
    .readdirSync(DOCS_DIR)
    .filter((f) => /\.(pdf|txt|md)$/i.test(f));

  if (files.length === 0) throw new Error("Put your PDFs in /docs first.");

  // Wipe existing rows so re-running doesn't create duplicates.
  // Remove this if you want to append instead.
  const { error: delErr } = await supabase
    .from("documents")
    .delete()
    .neq("id", 0);
  if (delErr) throw delErr;

  let total = 0;

  for (const file of files) {
    console.log(`📄 ${file}`);
    const text = await extractText(path.join(DOCS_DIR, file));
    const chunks = chunkDocument(text, file);
    console.log(`   → ${chunks.length} chunks`);

    for (let i = 0; i < chunks.length; i += 50) {
      const batch = chunks.slice(i, i + 50);
      const vectors = await embedBatch(batch.map((c) => c.text));

      const rows = batch.map((c, j) => {
        const { text, ...meta } = c; // text → content, everything else → metadata
        return { content: text, metadata: meta, embedding: vectors[j] };
      });

      const { error } = await supabase.from("documents").insert(rows);
      if (error) throw error;

      total += rows.length;
      console.log(
        `   embedded ${Math.min(i + 50, chunks.length)}/${chunks.length}`,
      );
    }
  }

  console.log(`✅ Inserted ${total} chunks → Supabase`);
}

main().catch(console.error);

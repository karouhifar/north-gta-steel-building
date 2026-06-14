import fs from "node:fs";

import path from "node:path";

import { PDFParse } from "pdf-parse";

import { ai, EMBEDDING_MODEL, EMBEDDING_DIM } from "./gemini";

import { chunkDocument, type Chunk } from "./chunking";

interface StoredChunk extends Chunk {
  embedding: number[];
}

const DOCS_DIR = path.join(process.cwd(), "docs");

const OUT_FILE = path.join(process.cwd(), "data", "vector-store.json");

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
      taskType: "RETRIEVAL_DOCUMENT", // documents get this...

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

  const all: StoredChunk[] = [];

  for (const file of files) {
    console.log(`📄 ${file}`);

    const text = await extractText(path.join(DOCS_DIR, file));

    const chunks = chunkDocument(text, file);

    console.log(`   → ${chunks.length} chunks`);

    // Embed in batches of 50 to respect request limits

    for (let i = 0; i < chunks.length; i += 50) {
      const batch = chunks.slice(i, i + 50);

      const vectors = await embedBatch(batch.map((c) => c.text));

      batch.forEach((c, j) => all.push({ ...c, embedding: vectors[j] }));

      console.log(
        `   embedded ${Math.min(i + 50, chunks.length)}/${chunks.length}`,
      );
    }
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });

  fs.writeFileSync(OUT_FILE, JSON.stringify(all));

  console.log(`✅ Saved ${all.length} chunks → ${OUT_FILE}`);
}

main().catch(console.error);

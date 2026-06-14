import fs from "node:fs";

import path from "node:path";

import { ai, EMBEDDING_MODEL, EMBEDDING_DIM } from "./gemini";
import { Chunk } from "./chunking";

interface StoredChunk extends Chunk {
  embedding: number[];
}

let store: StoredChunk[] | null = null;

function loadStore(): StoredChunk[] {
  if (!store) {
    const p = path.join(process.cwd(), "data", "vector-store.json");

    store = JSON.parse(fs.readFileSync(p, "utf-8"));
  }

  return store!;
}

function cosineSim(a: number[], b: number[]): number {
  let dot = 0,
    na = 0,
    nb = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];

    na += a[i] * a[i];

    nb += b[i] * b[i];
  }

  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

export async function retrieve(query: string, topK = 5) {
  const res = await ai.models.embedContent({
    model: EMBEDDING_MODEL,

    contents: query,

    config: {
      taskType: "RETRIEVAL_QUERY",
      outputDimensionality: EMBEDDING_DIM,
    },
  });

  const qVec = res.embeddings![0].values!;

  return loadStore()
    .map((c) => ({ ...c, score: cosineSim(qVec, c.embedding) }))

    .sort((a, b) => b.score - a.score)

    .slice(0, topK);
}

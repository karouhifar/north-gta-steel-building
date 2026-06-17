import { createClient } from "@supabase/supabase-js";
import { ai, EMBEDDING_MODEL, EMBEDDING_DIM } from "./gemini";
import { Chunk } from "./chunking";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // server-side key, never expose to client
);

export interface RetrievedChunk {
  id: number;
  content: string;
  metadata: Record<string, unknown>;
  score: number;
}

export async function retrieve(
  query: string,
  topK = 10,
): Promise<RetrievedChunk[]> {
  const res = await ai.models.embedContent({
    model: EMBEDDING_MODEL,
    contents: query,
    config: {
      taskType: "RETRIEVAL_QUERY",
      outputDimensionality: EMBEDDING_DIM,
    },
  });

  const qVec = res.embeddings![0].values!;

  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: qVec,
    match_threshold: 0.78,
    match_count: topK,
  });

  if (error) throw error;
  return data as RetrievedChunk[];
}

export interface Chunk {
  id: string;

  text: string;

  source: string; // filename

  section?: string; // nearest heading, if detected
}

const CHUNK_SIZE = 1000;

const OVERLAP = 180;

// Detects headings like "4.2 Bolted Connections", "Section J3", "CHAPTER F"

const HEADING_RE =
  /^(?:(?:\d+(?:\.\d+)*|[A-Z]\d*(?:\.\d+)*)\s+[A-Z][^\n]{3,80}|SECTION\s+\S+.*|CHAPTER\s+\S+.*)$/gm;

export function chunkDocument(fullText: string, source: string): Chunk[] {
  // 1) Split into sections at headings (keeps the heading with its body)

  const indices: { idx: number; heading: string }[] = [];

  let m: RegExpExecArray | null;

  while ((m = HEADING_RE.exec(fullText)) !== null) {
    indices.push({ idx: m.index, heading: m[0].trim() });
  }

  const sections =
    indices.length > 0
      ? indices.map((h, i) => ({
          heading: h.heading,

          body: fullText.slice(h.idx, indices[i + 1]?.idx ?? fullText.length),
        }))
      : [{ heading: "", body: fullText }];

  // 2) Split each section into overlapping chunks

  const chunks: Chunk[] = [];

  let n = 0;

  for (const sec of sections) {
    const text = sec.body.replace(/\s+\n/g, "\n").trim();

    for (let start = 0; start < text.length; start += CHUNK_SIZE - OVERLAP) {
      const slice = text.slice(start, start + CHUNK_SIZE).trim();

      if (slice.length < 100) continue; // skip tiny fragments

      chunks.push({
        id: `${source}::${n++}`,

        text:
          sec.heading && !slice.startsWith(sec.heading)
            ? `[${sec.heading}]\n${slice}`
            : slice,

        source,

        section: sec.heading || undefined,
      });
    }
  }

  return chunks;
}

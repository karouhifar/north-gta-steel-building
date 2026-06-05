// Server component that renders a JSON-LD structured-data <script>.
// Safe to drop into any server file (root layout, page.tsx, route layouts).
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; values come from our own config/data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default JsonLd;

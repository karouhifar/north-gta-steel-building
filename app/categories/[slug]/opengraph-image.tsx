import { ImageResponse } from "next/og";
import { buildingCategories, getCategoryBySlug } from "@/data/categories";

export const alt = "North GTA STEEL building category";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return buildingCategories.map((category) => ({ slug: category.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const title = (category?.title ?? "Steel Buildings").toUpperCase();
  const eyebrow = category?.eyebrow ?? "Steel Buildings Across Ontario";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "64px",
              height: "8px",
              backgroundColor: "#cc0000",
              display: "flex",
              marginRight: "24px",
            }}
          />
          <div
            style={{
              display: "flex",
              color: "#cc0000",
              fontSize: "24px",
              letterSpacing: "6px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: "90px",
            fontWeight: 800,
            lineHeight: 1.02,
            textTransform: "uppercase",
            letterSpacing: "-3px",
            maxWidth: "1040px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#999999",
            fontSize: "30px",
          }}
        >
          <div style={{ display: "flex", color: "#ffffff", fontWeight: 700 }}>
            North GTA STEEL
          </div>
          <div style={{ display: "flex" }}>northgtasteel.ca</div>
        </div>
      </div>
    ),
    { ...size },
  );
}

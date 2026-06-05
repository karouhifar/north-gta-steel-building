import { ImageResponse } from "next/og";

export const alt = "North GTA STEEL — Steel Buildings Across Ontario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
              fontSize: "28px",
              letterSpacing: "8px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Steel Buildings · Ontario
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: "118px",
              fontWeight: 800,
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: "-4px",
            }}
          >
            North GTA
          </div>
          <div
            style={{
              display: "flex",
              color: "#cc0000",
              fontSize: "118px",
              fontWeight: 800,
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: "-4px",
            }}
          >
            Steel
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#999999",
            fontSize: "30px",
          }}
        >
          <div style={{ display: "flex", maxWidth: "760px" }}>
            Commercial · Industrial · Agricultural · Custom steel buildings
            across the GTA &amp; Ontario
          </div>
          <div style={{ display: "flex", color: "#ffffff", fontWeight: 700 }}>
            northgtasteel.ca
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

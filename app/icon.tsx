import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#cc0000",
        }}
      >
        <svg width="34" height="30" viewBox="0 0 34 30">
          <polygon points="17,30 0,0 34,0" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        <svg width="96" height="84" viewBox="0 0 34 30">
          <polygon points="17,30 0,0 34,0" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size },
  );
}

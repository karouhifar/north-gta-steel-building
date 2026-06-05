import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

// Self-hosted Fontshare display font (no render-blocking external @import).
export const clash = localFont({
  variable: "--font-clash-src",
  display: "swap",
  fallback: ["Impact", "sans-serif"],
  src: [
    { path: "./fonts/clash-200.woff2", weight: "200", style: "normal" },
    { path: "./fonts/clash-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/clash-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/clash-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/clash-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/clash-700.woff2", weight: "700", style: "normal" },
  ],
});

// Self-hosted Fontshare body font.
export const general = localFont({
  variable: "--font-general-src",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  src: [
    { path: "./fonts/general-200.woff2", weight: "200", style: "normal" },
    { path: "./fonts/general-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/general-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/general-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/general-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/general-700.woff2", weight: "700", style: "normal" },
  ],
});

export const mono = JetBrains_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  display: "swap",
});

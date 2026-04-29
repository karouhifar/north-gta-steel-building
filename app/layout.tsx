import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/ Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "North GTA Steel Building | Steel Buildings in Ontario | Vaughan, Markham, Richmond Hill, Aurora, Newmarket | Toronto Area Stee",
    template: "%s | North GTA Steel Building",
  },
  description:
    "Durable commercial, industrial, agricultural, and custom steel buildings across Vaughan, Markham, Richmond Hill, Aurora, Newmarket, and the Greater Toronto Area.",
  metadataBase: new URL("https://northgtasteel.com"),
  openGraph: {
    title: "North GTA Steel Building",
    description:
      "Custom steel building solutions for commercial, industrial, agricultural, and storage projects across Ontario.",
    url: "https://northgtasteel.com",
    siteName: "North GTA Steel Building",
    locale: "en_CA",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

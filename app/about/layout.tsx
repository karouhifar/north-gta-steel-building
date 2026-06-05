import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "North GTA STEEL helps Ontario property owners, farmers, contractors, and businesses plan, supply, and build durable steel structures with confidence.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${SITE_NAME}`,
    description:
      "Ontario's steel building partner — clear planning, durable steel, and permit-aware support from concept to completed structure.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      {children}
    </>
  );
}

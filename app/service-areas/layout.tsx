import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceAreaSchema } from "@/lib/structured-data";
import { AREA_SERVED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "North GTA STEEL serves the Greater Toronto Area and all of Ontario — Toronto, Vaughan, Markham, Richmond Hill, Mississauga, Brampton, Durham, Halton, Niagara, and beyond.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas Across Ontario | North GTA STEEL",
    description:
      "Steel building design, supply, and construction support across the GTA and Ontario.",
    url: "/service-areas",
    type: "website",
  },
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={serviceAreaSchema(AREA_SERVED)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />
      {children}
    </>
  );
}

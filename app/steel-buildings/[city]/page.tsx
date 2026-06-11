import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceCities } from "@/data/service-cities";
import { getFullServiceCity } from "@/data/service-city-content";
import CityTemplate from "@/components/template/CityTemplate";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  cityServiceSchema,
  faqPageSchema,
} from "@/lib/structured-data";

type CityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceCities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getFullServiceCity(slug);

  if (!city) {
    return {
      title: "Service Area Not Found",
      robots: { index: false, follow: false },
    };
  }

  const path = `/steel-buildings/${slug}`;

  return {
    title: { absolute: city.metaTitle },
    description: city.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: path,
      type: "website",
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getFullServiceCity(slug);

  if (!city) {
    notFound();
  }

  return (
    <>
      <JsonLd data={cityServiceSchema(city)} />
      <JsonLd data={faqPageSchema(city.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          {
            name: `Steel Buildings ${city.name}`,
            path: `/steel-buildings/${slug}`,
          },
        ])}
      />
      <CityTemplate city={city} />
    </>
  );
}

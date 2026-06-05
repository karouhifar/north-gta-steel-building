import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildingCategories, getCategoryBySlug } from "@/data/categories";
import CategoryTemplate from "@/components/template/CategoryTemplate";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, categoryServiceSchema } from "@/lib/structured-data";
import { SITE_NAME } from "@/lib/site";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return buildingCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
      robots: { index: false, follow: false },
    };
  }

  const path = `/categories/${slug}`;

  return {
    title: category.title,
    description: category.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${category.title} | ${SITE_NAME}`,
      description: category.summary,
      url: path,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <JsonLd data={categoryServiceSchema(category)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: category.title, path: `/categories/${slug}` },
        ])}
      />
      <CategoryTemplate category={category} slug={slug} />
    </>
  );
}

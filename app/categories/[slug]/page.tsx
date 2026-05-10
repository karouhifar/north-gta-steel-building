"use client";
import { notFound } from "next/navigation";
import { buildingCategories, getCategoryBySlug } from "@/data/categories";
import CategoryTemplate from "@/components/template/CategoryTemplate";

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

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.title} | North GTA Steel Buildings`,
    description: category.summary,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return <CategoryTemplate category={category} slug={slug} />;
}

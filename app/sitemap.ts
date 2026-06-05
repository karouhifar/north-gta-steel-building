import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { buildingCategories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = buildingCategories.map(
    (category) => ({
      url: `${SITE_URL}/categories/${category.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  return [...staticRoutes, ...categoryRoutes];
}

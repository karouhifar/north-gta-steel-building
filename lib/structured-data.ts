import type { BuildingCategory } from "@/data/categories";
import type {
  FullServiceCity,
  ServiceCityFaq,
} from "@/data/service-city-content";
import {
  AREA_SERVED,
  COUNTRY,
  EMAIL,
  FOUNDER,
  LANG,
  LEGAL_NAME,
  LOGO_PATH,
  PHONE,
  REGION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  absoluteUrl,
} from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const places = (names: string[]) =>
  names.map((name) => ({ "@type": "Place", name }));

/** Site-wide business entity (Organization + local construction business). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness"],
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl(LOGO_PATH),
    image: absoluteUrl(LOGO_PATH),
    hasMap: "https://maps.app.goo.gl/kRoQ5YcgAyrLFRKF7",
    email: EMAIL,
    telephone: PHONE,
    founder: { "@type": "Person", name: FOUNDER },
    // Service-area business: no storefront address, region/country only.
    address: {
      "@type": "PostalAddress",
      addressRegion: REGION,
      addressCountry: COUNTRY,
    },
    areaServed: places(AREA_SERVED),
    ...(SOCIAL_LINKS.length > 0 ? { sameAs: SOCIAL_LINKS } : {}),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    knowsLanguage: LANG,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: LANG,
    publisher: { "@id": ORG_ID },
  };
}

export function categoryServiceSchema(category: BuildingCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.title,
    description: category.summary,
    serviceType: category.title,
    url: absoluteUrl(`/categories/${category.slug}`),
    image: absoluteUrl(category.heroImage),
    provider: { "@id": ORG_ID },
    areaServed: places(AREA_SERVED),
  };
}

export function serviceAreaSchema(cities: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Steel Building Services Across Ontario",
    serviceType: "Steel building design, supply, and construction support",
    url: absoluteUrl("/service-areas"),
    provider: { "@id": ORG_ID },
    areaServed: places(cities),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function cityServiceSchema(city: FullServiceCity) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Steel Buildings in ${city.name}`,
    description: city.metaDescription,
    serviceType: "Steel building design, supply, and construction",
    url: absoluteUrl(`/steel-buildings/${city.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: places([city.name, city.region, "Ontario"]),
  };
}

export function faqPageSchema(faqs: ServiceCityFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function categoryItemListSchema(categories: BuildingCategory[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Steel Building Types",
    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.title,
      url: absoluteUrl(`/categories/${category.slug}`),
    })),
  };
}

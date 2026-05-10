export enum CategorySlug {
  Commercial = "commercial",
  Industrial = "industrial",
  Agricultural = "agricultural",
  EngineeringDesign = "engineering-design",
}

export type BuildingCategory = {
  slug: CategorySlug;
  number: string;
  title: string;
  eyebrow: string;
  heroImage: string;
  summary: string;
  description: string;
  minSize: string;
  bestFor: string[];
  features: string[];
  imageGallery: {
    src: string;
    alt: string;
  }[];
  sections: {
    title: string;
    description: string;
  }[];
};

export const buildingCategories: BuildingCategory[] = [
  {
    slug: CategorySlug.Commercial,
    number: "01",
    title: "Commercial Steel Buildings",
    eyebrow: "Warehouses, Retail Spaces & Business Facilities",
    heroImage: "/images/categories/commercial-building.webp",
    summary:
      "Flexible commercial steel buildings designed for warehouses, retail units, offices, showrooms, and distribution facilities across Ontario.",
    description:
      "Commercial steel buildings are ideal for businesses that need large open spans, fast construction, durable materials, and long-term flexibility. Whether you are expanding a warehouse, building a retail plaza, or developing a contractor shop, these structures are engineered to handle Ontario snow loads, wind exposure, and daily commercial use.",
    minSize: "From 5,000 sq ft",
    bestFor: [
      "Warehouses",
      "Retail buildings",
      "Distribution centers",
      "Showrooms",
      "Office and shop combinations",
    ],
    features: [
      "Clear-span interiors up to large commercial widths",
      "Insulated wall and roof systems",
      "Overhead door and loading dock options",
      "Fast construction compared to conventional builds",
      "Designed for Ontario snow and wind loads",
    ],
    imageGallery: [
      {
        src: "/images/categories/Deep_Earth_Farms.webp",
        alt: "Commercial steel warehouse exterior",
      },
      {
        src: "/images/categories/retail-metal-building.webp",
        alt: "Large commercial steel building interior",
      },
      {
        src: "/images/categories/Stair-South.webp",
        alt: "Large commercial steel building interior",
      },
      {
        src: "/images/categories/Steel-Buildings.webp",
        alt: "Large commercial steel building interior",
      },
    ],
    sections: [
      {
        title: "Built for growing businesses",
        description:
          "Commercial steel buildings allow business owners to scale with practical layouts, large open floor plans, and future expansion options.",
      },
      {
        title: "Efficient and durable envelope",
        description:
          "Insulated panels, metal cladding, and engineered framing help reduce maintenance while improving long-term energy performance.",
      },
    ],
  },
  {
    slug: CategorySlug.Industrial,
    number: "02",
    title: "Industrial Steel Buildings",
    eyebrow: "Manufacturing, Processing & Heavy Equipment Storage",
    heroImage: "/images/categories/industrial-steel-building.webp",
    summary:
      "Heavy-duty steel buildings for manufacturing plants, processing facilities, equipment storage, and industrial operations.",
    description:
      "Industrial buildings require strength, clear access, crane-ready layouts, and long-term durability. Steel framing is ideal for production spaces, truck service facilities, fabrication shops, storage yards, and processing operations that need reliable structural performance.",
    minSize: "From 10,000 sq ft",
    bestFor: [
      "Manufacturing plants",
      "Processing facilities",
      "Equipment storage",
      "Truck garages",
      "Fabrication shops",
    ],
    features: [
      "Heavy-duty structural steel framing",
      "Crane-ready frame options",
      "Large bay spacing",
      "Tall clear heights",
      "Industrial-grade doors and ventilation options",
    ],
    imageGallery: [
      {
        src: "/images/categories/industrial-steel-building-2.webp",
        alt: "Industrial steel building exterior",
      },
      {
        src: "/images/categories/industrial-steel-building-3.webp",
        alt: "Industrial steel building interior with equipment",
      },
      {
        src: "/images/categories/industrial-steel-building-4.webp",
        alt: "Industrial steel building interior with equipment",
      },
      {
        src: "/images/categories/industrial-steel-building-5.webp",
        alt: "Industrial steel building interior with equipment",
      },
    ],
    sections: [
      {
        title: "Designed for demanding operations",
        description:
          "Industrial steel buildings support heavy equipment, large doors, high ceilings, and clear workflows for production and storage.",
      },
      {
        title: "Custom engineered for your site",
        description:
          "Each structure can be designed around site access, machinery layout, crane needs, drainage, insulation, and local code requirements.",
      },
    ],
  },
  {
    slug: CategorySlug.Agricultural,
    number: "03",
    title: "Agricultural Steel Buildings",
    eyebrow: "Barns, Riding Arenas, Equipment Shelters & Storage",
    heroImage: "/images/categories/agricultural-hero.webp",
    summary:
      "Reliable agricultural steel buildings for farms, rural properties, riding arenas, grain storage, and equipment protection.",
    description:
      "Agricultural steel buildings are built to protect valuable equipment, livestock, feed, grain, and working spaces from harsh Canadian weather. These structures are practical, low-maintenance, and customizable for rural sites across Ontario.",
    minSize: "From 2,400 sq ft",
    bestFor: [
      "Farm storage",
      "Riding arenas",
      "Equipment shelters",
      "Grain storage",
      "Livestock buildings",
    ],
    features: [
      "Wide clear-span layouts",
      "Durable exterior cladding",
      "Large sliding or overhead doors",
      "Ventilation and insulation options",
      "Engineered for rural wind and snow loads",
    ],
    imageGallery: [
      {
        src: "/images/categories/agricultural-detail-1.webp",
        alt: "Agricultural steel barn exterior",
      },
      {
        src: "/images/categories/agricultural-detail-2.webp",
        alt: "Steel riding arena interior",
      },
    ],
    sections: [
      {
        title: "Practical buildings for working farms",
        description:
          "Agricultural steel buildings give farmers dependable space for equipment, animals, feed, crops, and daily operations.",
      },
      {
        title: "Low maintenance for rural sites",
        description:
          "Steel cladding and engineered frames reduce upkeep compared to traditional wood construction, especially in exposed rural areas.",
      },
    ],
  },
  {
    slug: CategorySlug.EngineeringDesign,
    number: "04",
    title: "Steel Engineering & Design",
    eyebrow: "Structural Engineering, Stamped Drawings & Custom Frame Design",
    heroImage: "/images/categories/engineering-design-hero.webp",
    summary:
      "Custom steel building engineering and design services — structural drawings, frame engineering, and P.Eng sealed packages for Ontario projects.",
    description:
      "Every steel building stands or fails on its engineering. We provide stamped structural drawings, custom frame design, and Ontario Building Code compliant packages — whether you're a contractor needing sealed plans for permit, an owner adapting a kit to your site, or a developer scoping a new build from scratch.",
    minSize: "Custom scope",
    bestFor: [
      "Permit-ready stamped drawings",
      "Custom frame engineering",
      "Foundation design",
      "Site-specific load analysis",
      "Retrofit and modification engineering",
    ],
    features: [
      "P.Eng sealed structural drawings",
      "Ontario Building Code (OBC) compliance",
      "Custom snow, wind, and seismic load calculations",
      "Foundation and anchor bolt design",
      "Frame modifications for existing buildings",
    ],
    imageGallery: [
      {
        src: "/images/categories/Main_Steel_Frame.webp",
        alt: "Structural steel engineering drawings and blueprints",
      },
      {
        src: "/images/categories/Main_Steel_Frame2.webp",
        alt: "Engineer reviewing steel frame design on site",
      },
    ],
    sections: [
      {
        title: "Stamped drawings for permit submission",
        description:
          "Our P.Eng licensed engineers provide sealed structural packages ready for municipal permit submission across Ontario, including site-specific load calculations and foundation details.",
      },
      {
        title: "Engineered for your site, not a catalog",
        description:
          "Snow loads in Barrie aren't the same as Toronto. Wind exposure on rural land differs from urban infill. Every design is calculated for your exact location, soil conditions, and intended use.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return buildingCategories.find((category) => category.slug === slug);
}

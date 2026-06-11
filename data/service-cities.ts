// Base data for the 18 service cities — names, regions, map coordinates,
// one-line descriptions. This file is imported by client components (Footer,
// /service-areas page), so keep it light: the city landing-page prose lives
// in data/service-city-content.ts and must stay server-side only.

export type ServiceCity = {
  slug: string;
  name: string;
  region: string;
  x: number;
  y: number;
  description: string;
};

export const serviceCities: ServiceCity[] = [
  {
    slug: "toronto",
    name: "Toronto",
    region: "GTA",
    x: 312,
    y: 278,
    description:
      "Commercial, industrial, and custom steel building support for Greater Toronto projects.",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "GTA West",
    x: 295,
    y: 281,
    description:
      "Warehouses, commercial buildings, and practical steel solutions for growing business sites.",
  },
  {
    slug: "brampton",
    name: "Brampton",
    region: "GTA West",
    x: 286,
    y: 266,
    description:
      "Steel structures for logistics, workshops, truck garages, and industrial expansion.",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "York Region",
    x: 306,
    y: 258,
    description:
      "Custom steel buildings for commercial, warehouse, and contractor-driven developments.",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "York Region",
    x: 319,
    y: 248,
    description:
      "Permit-aware planning and structural support for steel building projects in York Region.",
  },
  {
    slug: "oakville",
    name: "Oakville",
    region: "Halton",
    x: 274,
    y: 286,
    description:
      "Steel garages, workshops, and commercial-use steel buildings for long-term property value.",
  },
  {
    slug: "burlington",
    name: "Burlington",
    region: "Halton",
    x: 255,
    y: 290,
    description:
      "Support for storage buildings, commercial structures, and custom steel applications.",
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "Toronto East",
    x: 332,
    y: 278,
    description:
      "Eastern Toronto service coverage for steel garages, storage, and light industrial structures.",
  },
  {
    slug: "pickering",
    name: "Pickering",
    region: "Durham",
    x: 352,
    y: 281,
    description:
      "Steel building solutions for east GTA commercial, agricultural, and custom-use projects.",
  },
  {
    slug: "ajax",
    name: "Ajax",
    region: "Durham",
    x: 367,
    y: 284,
    description:
      "Durable steel structures for business growth, vehicle storage, and industrial use.",
  },
  {
    slug: "whitby",
    name: "Whitby",
    region: "Durham",
    x: 382,
    y: 287,
    description:
      "Planning and supply support for garages, workshops, and commercial steel buildings.",
  },
  {
    slug: "caledon",
    name: "Caledon",
    region: "Peel",
    x: 262,
    y: 250,
    description:
      "Strong fit for agricultural, equestrian, workshop, and rural steel building projects.",
  },
  {
    slug: "uxbridge",
    name: "Uxbridge",
    region: "Durham North",
    x: 351,
    y: 252,
    description:
      "Permit-aware steel building support for rural, agricultural, and mixed-use properties.",
  },
  {
    slug: "halton-hills",
    name: "Halton Hills",
    region: "Halton",
    x: 250,
    y: 269,
    description:
      "Custom steel structures for storage, farm buildings, garages, and practical site expansion.",
  },
  {
    slug: "milton",
    name: "Milton",
    region: "Halton",
    x: 266,
    y: 274,
    description:
      "Commercial and industrial steel building support for rapidly growing development corridors.",
  },
  {
    slug: "sudbury",
    name: "Sudbury",
    region: "Northern Ontario",
    x: 180,
    y: 174,
    description:
      "Northern Ontario coverage for industrial, storage, and large-span steel building requirements.",
  },
  {
    slug: "kingston",
    name: "Kingston",
    region: "Eastern Ontario",
    x: 429,
    y: 330,
    description:
      "Eastern Ontario support for warehouses, custom steel buildings, and commercial structures.",
  },
  {
    slug: "st-catharines",
    name: "St. Catharines",
    region: "Niagara",
    x: 235,
    y: 312,
    description:
      "Niagara area support for steel garages, storage buildings, and commercial applications.",
  },
];

export function getServiceCity(slug: string): ServiceCity | undefined {
  return serviceCities.find((city) => city.slug === slug);
}

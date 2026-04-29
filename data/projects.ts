export type Project = {
  code: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  featured?: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    code: "PRJ-0847",
    title: "Mississauga Distribution Hub",
    description:
      "120,000 sq ft commercial warehouse with integrated loading docks",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&h=760&fit=crop&q=80",
    alt: "Commercial warehouse",
    featured: true,
    stats: [
      { label: "SPAN", value: "200 ft" },
      { label: "HEIGHT", value: "32 ft" },
      { label: "STEEL", value: "480 tons" },
      { label: "YEAR", value: "2024" },
    ],
  },
  {
    code: "PRJ-0912",
    title: "Perth County Riding Arena",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=440&fit=crop&q=80",
    alt: "Agricultural steel building",
    stats: [
      { label: "SPAN", value: "80 ft" },
      { label: "LENGTH", value: "160 ft" },
      { label: "TYPE", value: "Clear-Span" },
    ],
  },
  {
    code: "PRJ-1034",
    title: "Caledon Workshop Complex",
    image:
      "https://www.steelcobuildings.com/wp-content/uploads/2025/01/Prefab-metal-building-mid-construction-2048x1365-1.webp",
    alt: "Workshop steel building",
    stats: [
      { label: "SPAN", value: "60 ft" },
      { label: "BAYS", value: "4" },
      { label: "TYPE", value: "Multi-Bay" },
    ],
  },
  {
    code: "PRJ-0756",
    title: "Muskoka Aviation Hangar",
    description: "Clear-span aircraft hangar / 14,000 sq ft",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=700&h=520&fit=crop&q=80",
    alt: "Steel aircraft hangar",
  },
  {
    code: "PRJ-0923",
    title: "Saint-Antonin Mini Storage",
    description: "Multi-unit storage complex / 32 bays",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&h=520&fit=crop&q=80",
    alt: "Steel storage facility",
  },
  {
    code: "PRJ-1102",
    title: "Rice Lake 3-Bay Garage",
    description: "Residential workshop garage / 2,400 sq ft",
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=700&h=520&fit=crop&q=80",
    alt: "Residential steel garage",
  },
];

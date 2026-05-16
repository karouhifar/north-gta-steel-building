import {
  Factory,
  Building2,
  Wheat,
  Wrench,
  Warehouse,
  Package,
  Car,
  Mountain,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

export type BuildingType =
  | "industrial"
  | "commercial"
  | "agriculture"
  | "workshop"
  | "warehouse"
  | "storage"
  | "garage"
  | "quonset"
  | "other";

export const BUILDING_TYPES: {
  value: BuildingType;
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    value: "industrial",
    label: "Industrial",
    description: "Manufacturing & heavy use",
    icon: Factory,
  },
  {
    value: "commercial",
    label: "Commercial",
    description: "Retail, office, mixed-use",
    icon: Building2,
  },
  {
    value: "agriculture",
    label: "Agriculture",
    description: "Barns, livestock, equipment",
    icon: Wheat,
  },
  {
    value: "workshop",
    label: "Workshop",
    description: "Shops, fabrication, repair",
    icon: Wrench,
  },
  {
    value: "warehouse",
    label: "Warehouse",
    description: "Distribution & logistics",
    icon: Warehouse,
  },
  {
    value: "storage",
    label: "Storage",
    description: "Self-storage, bulk storage",
    icon: Package,
  },
  {
    value: "garage",
    label: "Garage",
    description: "Personal, fleet, RV",
    icon: Car,
  },
  {
    value: "quonset",
    label: "Quonset / Arch",
    description: "Curved-roof structures",
    icon: Mountain,
  },
  {
    value: "other",
    label: "Other",
    description: "Tell us more in step 5",
    icon: HelpCircle,
  },
];

export const ONTARIO_REGIONS = [
  "Southwest Ontario",
  "Niagara Canada",
  "Hamilton, Halton & Brant",
  "Huron, Perth, Waterloo & Wellington",
  "Greater Toronto Area",
  "York, Durham & Headwaters",
  "Bruce, Grey & Simcoe",
  "Kawarthas & Northumberland",
  "South Eastern Ontario",
  "Ottawa & Countryside",
  "Haliburton Highlands to the Ottawa Valley",
  "Muskoka, Parry Sound & Algonquin Park",
  "Northern Ontario",
] as const;

export type TimelineOption = "asap" | "1-3" | "3-6" | "6-12" | "researching";

export const TIMELINE_OPTIONS: {
  value: TimelineOption;
  label: string;
  sub: string;
}[] = [
  { value: "asap", label: "ASAP", sub: "Ready to move" },
  { value: "1-3", label: "1–3 months", sub: "Near-term" },
  { value: "3-6", label: "3–6 months", sub: "Planning phase" },
  { value: "6-12", label: "6–12 months", sub: "Future project" },
  { value: "researching", label: "Just researching", sub: "Exploring options" },
];

export const STEPS = [
  { id: 1, label: "Building" },
  { id: 2, label: "Size" },
  { id: 3, label: "Location" },
  { id: 4, label: "Timeline" },
  { id: 5, label: "Contact" },
] as const;

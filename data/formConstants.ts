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
    description: "Tell us more at the end",
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

/* ---------------------------------------------------------------------------
   Roof & panel spec — mirrors the fields on our paper "Building Layout" sheet
   (roof pitch, screw down vs SSR, galvalume vs painted, gutters/downs).
   Every group carries a "Not sure" escape hatch so nobody stalls on a spec
   question they were never meant to answer.
--------------------------------------------------------------------------- */

export type RoofShape = "gable" | "single-slope" | "unsure";

export const ROOF_SHAPE_OPTIONS: {
  value: RoofShape;
  label: string;
  sub: string;
}[] = [
  { value: "gable", label: "Gable", sub: "Peak down the middle" },
  { value: "single-slope", label: "Single slope", sub: "Shed / lean-to style" },
  { value: "unsure", label: "Not sure", sub: "Recommend one for me" },
];

export type RoofPitch = "1:12" | "2:12" | "3:12" | "4:12" | "6:12" | "unsure";

export const ROOF_PITCH_OPTIONS: {
  value: RoofPitch;
  label: string;
  sub: string;
}[] = [
  { value: "1:12", label: "1:12", sub: "Low slope" },
  { value: "2:12", label: "2:12", sub: "Most common" },
  { value: "3:12", label: "3:12", sub: "Sheds snow well" },
  { value: "4:12", label: "4:12", sub: "Residential look" },
  { value: "6:12", label: "6:12", sub: "Steep" },
  { value: "unsure", label: "Not sure", sub: "We'll advise" },
];

export type RoofPanel = "screw-down" | "standing-seam" | "unsure";

export const ROOF_PANEL_OPTIONS: {
  value: RoofPanel;
  label: string;
  sub: string;
}[] = [
  {
    value: "screw-down",
    label: "Screw down",
    sub: "Exposed fasteners · lower cost",
  },
  {
    value: "standing-seam",
    label: "Standing seam (SSR)",
    sub: "Concealed clips · longer life",
  },
  { value: "unsure", label: "Not sure", sub: "Show me both options" },
];

export type RoofFinish = "galvalume" | "painted" | "unsure";

export const ROOF_FINISH_OPTIONS: {
  value: RoofFinish;
  label: string;
  sub: string;
}[] = [
  { value: "galvalume", label: "Galvalume", sub: "Bare mill finish" },
  { value: "painted", label: "Painted", sub: "Colour matched" },
  { value: "unsure", label: "Not sure", sub: "Price me both" },
];

export type GutterChoice = "yes" | "no" | "unsure";

export const GUTTER_OPTIONS: {
  value: GutterChoice;
  label: string;
  sub: string;
}[] = [
  { value: "yes", label: "Yes", sub: "Include gutters + downspouts" },
  { value: "no", label: "No", sub: "Leave them off" },
  { value: "unsure", label: "Not sure", sub: "Quote them separately" },
];

export const PANEL_GAUGE_OPTIONS = ["29ga", "26ga", "24ga"] as const;
export type PanelGauge = (typeof PANEL_GAUGE_OPTIONS)[number];

export type LinerPanel = "none" | "walls" | "ceiling" | "both";

export const LINER_PANEL_OPTIONS: { value: LinerPanel; label: string }[] = [
  { value: "none", label: "No liner panel" },
  { value: "walls", label: "Walls only" },
  { value: "ceiling", label: "Ceiling only" },
  { value: "both", label: "Walls + ceiling" },
];

/* ---------------------------------------------------------------------------
   Framed openings — the LEW / REW / FSW / BSW elevations on the layout sheet.
   We collect counts here and take exact placement from the customer's sketch.
--------------------------------------------------------------------------- */

export type LayoutSketch = "have" | "describe" | "none";

export const LAYOUT_SKETCH_OPTIONS: {
  value: LayoutSketch;
  label: string;
  sub: string;
}[] = [
  {
    value: "have",
    label: "Yes, I have one",
    sub: "Even a hand sketch works — we'll ask for it by email",
  },
  {
    value: "describe",
    label: "No, but I know what I need",
    sub: "I'll list the openings below",
  },
  {
    value: "none",
    label: "Not yet",
    sub: "Help me lay the openings out",
  },
];

export const OPENING_FIELDS: {
  name: "overheadDoors" | "manDoors" | "windows" | "louvers";
  label: string;
  sub: string;
}[] = [
  {
    name: "overheadDoors",
    label: "Overhead doors",
    sub: "Roll-up or sectional",
  },
  { name: "manDoors", label: "Man doors", sub: "Walk-in entry doors" },
  { name: "windows", label: "Windows", sub: "Any size" },
  { name: "louvers", label: "Louvers / vents", sub: "Wall ventilation" },
];

export const STEPS = [
  {
    id: 1,
    label: "Building",
    question: "What type of building do you need?",
  },
  {
    id: 2,
    label: "Size",
    question: "What are the dimensions of your building?",
  },
  {
    id: 3,
    label: "Roof",
    question: "How should the roof and panels be built?",
  },
  {
    id: 4,
    label: "Openings",
    question: "Where do the doors and windows go?",
  },
  {
    id: 5,
    label: "Location",
    question: "Where will your building be located?",
  },
  {
    id: 6,
    label: "Timeline",
    question: "When do you plan to start your project?",
  },
  {
    id: 7,
    label: "Contact",
    question: "How can we reach you?",
  },
] as const;

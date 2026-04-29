// data/quote.ts

export type BuildingSizeField = {
  id: string;
  label: string;
  placeholder: string;
};

export const buildingSizeFields: BuildingSizeField[] = [
  {
    id: "width",
    label: "Width (ft)",
    placeholder: "60",
  },
  {
    id: "length",
    label: "Length (ft)",
    placeholder: "100",
  },
  {
    id: "height",
    label: "Height (ft)",
    placeholder: "20",
  },
];

export const buildingUseOptions = [
  "Commercial / Warehouse",
  "Industrial / Manufacturing",
  "Agricultural / Farming",
  "Recreational / Arena",
  "Aviation / Hangar",
  "Residential / Garage",
];

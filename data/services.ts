// data/services.ts

export enum ServiceIcon {
  Warehouse = "warehouse",
  Factory = "factory",
  Tractor = "tractor",
  Plane = "plane",
}

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  startingFrom: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    id: "commercial",
    number: "01",
    title: "Commercial",
    icon: ServiceIcon.Warehouse,
    description:
      "Warehouses, distribution centers, retail spaces, garages and auto shops. Clear spans up to 300 feet. Snow load rated for all Canadian provinces.",
    startingFrom: "FROM 5,000 SQ FT",
  },
  {
    id: "industrial",
    number: "02",
    title: "Industrial",
    icon: ServiceIcon.Factory,
    description:
      "Manufacturing plants, processing facilities, heavy equipment storage. Crane-ready frames with 40-ton overhead bridge capacity.",
    startingFrom: "FROM 10,000 SQ FT",
  },
  {
    id: "agricultural",
    number: "03",
    title: "Agricultural",
    icon: ServiceIcon.Tractor,
    description:
      "Barns, riding arenas, equipment shelters, grain storage. Engineered for rural sites with aggressive wind and snow loads.",
    startingFrom: "FROM 2,400 SQ FT",
  },
  {
    id: "aviation",
    number: "04",
    title: "Aviation",
    icon: ServiceIcon.Plane,
    description:
      "Aircraft hangars, maintenance facilities, FBO terminals. Bi-fold and hydraulic door systems. Transport Canada compliant.",
    startingFrom: "FROM 3,600 SQ FT",
  },
];

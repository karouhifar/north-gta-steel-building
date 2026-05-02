export type Service = {
  name: string;
  coords: [number, number];
};

export const cities: Service[] = [
  { name: "Toronto (GTA)", coords: [43.6532, -79.3832] as [number, number] },
  { name: "Ottawa", coords: [45.4215, -75.6972] as [number, number] },
  { name: "Hamilton", coords: [43.2557, -79.8711] as [number, number] },
  { name: "London", coords: [42.9849, -81.2453] as [number, number] },
  { name: "Sudbury", coords: [46.4917, -80.993] as [number, number] },
  { name: "Thunder Bay", coords: [48.3809, -89.2477] as [number, number] },
  { name: "Kingston", coords: [44.2312, -76.486] as [number, number] },
  { name: "Barrie", coords: [44.3894, -79.6903] as [number, number] },
];

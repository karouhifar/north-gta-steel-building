import { redirect } from "next/navigation";

// The service-areas page is the hub for all city pages; the bare
// /steel-buildings path only exists so it never 404s.
export default function SteelBuildingsIndex() {
  redirect("/service-areas");
}

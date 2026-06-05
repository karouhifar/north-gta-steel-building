import type { Metadata } from "next";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import QuoteSection from "@/components/sections/Quote";
import RawSteelSection from "@/components/sections/RawSteel";
import Service from "@/components/sections/Service";
import { JsonLd } from "@/components/JsonLd";
import { categoryItemListSchema } from "@/lib/structured-data";
import { buildingCategories } from "@/data/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <JsonLd data={categoryItemListSchema(buildingCategories)} />
      <Hero />
      <About />
      <Projects />
      <Service />
      <RawSteelSection />
      <QuoteSection />
    </main>
  );
}

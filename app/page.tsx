"use client";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import QuoteSection from "@/components/sections/Quote";
import RawSteelSection from "@/components/sections/RawSteel";
import Service from "@/components/sections/Service";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <About />
      <Projects />
      <Service />
      <RawSteelSection />
      <QuoteSection />
    </div>
  );
}

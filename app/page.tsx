"use client";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-clash">
      <Hero />
    </div>
  );
}

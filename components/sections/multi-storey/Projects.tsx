"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SectionLabel } from "./utils";

const EASE_STEEL: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projects = [
  {
    code: "PRJ-0847",
    name: "Hawthorne Office",
    city: "Vaughan, ON",
    year: "2024",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=900&fit=crop&q=80",
    tag: "Office Class A",
    stats: [
      ["5", "Storeys"],
      ["8 400 m²", "GFA"],
      ["CBF", "Lateral"],
    ] as [string, string][],
  },
  {
    code: "PRJ-0911",
    name: "Bramalea Mixed-Use",
    city: "Brampton, ON",
    year: "2024",
    img: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1200&h=900&fit=crop&q=80",
    tag: "Retail + Office",
    stats: [
      ["4", "Storeys"],
      ["6 200 m²", "GFA"],
      ["MRF", "Lateral"],
    ] as [string, string][],
  },
  {
    code: "PRJ-1024",
    name: "Lakeshore Foundry Lofts",
    city: "Mississauga, ON",
    year: "2025",
    img: "https://images.unsplash.com/photo-1565130838609-c3a86655db61?w=1200&h=900&fit=crop&q=80",
    tag: "Mid-Rise Residential",
    stats: [
      ["6", "Storeys"],
      ["9 100 m²", "GFA"],
      ["HYBRID", "Lateral"],
    ] as [string, string][],
  },
];

export function Projects() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: EASE_STEEL }}
      >
        <SectionLabel code="006" label="Selected Multi-Storey Works" />
      </motion.div>

      <div className="grid items-end gap-12 lg:grid-cols-2">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE_STEEL }}
          className="font-clash text-4xl font-black uppercase leading-none tracking-tight text-foreground md:text-6xl"
        >
          Built across
          <br />
          the GTA<span className="text-steel-red">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE_STEEL }}
          className="max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          Three recent PEB Multi-Storey buildings — each engineered, fabricated, and erected by
          the same team that will run your project.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.code}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: EASE_STEEL }}
          >
            <Link href="#" className="group block">
              <Card className="overflow-hidden rounded-none border-foreground/10 bg-foreground/3 transition-colors group-hover:border-steel-red/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-all duration-700 [filter:grayscale(1)_contrast(1.25)_brightness(0.75)] group-hover:scale-105 group-hover:[filter:grayscale(1)_contrast(1.3)_brightness(0.55)]"
                  />
                  <div className="absolute left-4 top-4 h-0.5 w-12 bg-steel-red" />
                  <Badge className="absolute bottom-4 left-4 rounded-none bg-steel-red px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-primary-foreground">
                    {p.tag}
                  </Badge>
                  <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground">
                    {p.code}
                  </span>
                </div>

                <div className="px-6 pt-6 pb-4">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {p.city} · {p.year}
                  </p>
                  <h3 className="font-clash text-2xl font-bold uppercase tracking-tight text-foreground">
                    {p.name}
                  </h3>
                </div>

                <Separator className="bg-foreground/10" />

                <div className="grid grid-cols-3 divide-x divide-foreground/10">
                  {p.stats.map(([v, k]) => (
                    <div key={k} className="px-4 py-4">
                      <p className="font-clash text-lg font-bold uppercase tracking-tight text-foreground">
                        {v}
                      </p>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                        {k}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE_STEEL }}
        className="flex flex-wrap items-center justify-between gap-6 border-t border-foreground/10 pt-7"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          14 multi-storey buildings completed · 2018–2025
        </p>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="rounded-none px-0 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-red hover:bg-transparent hover:text-steel-darkred"
        >
          <Link href="#">
            View Full Archive
            <ArrowRight className="ml-2 size-3.5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}

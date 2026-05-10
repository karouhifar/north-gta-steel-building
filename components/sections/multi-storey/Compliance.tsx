"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./utils";
import gta from "@/data/GTA_Boundary.json";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/ui/leaflet-map"), {
  ssr: false,
  loading: () => <div>Loading map...</div>,
});
const EASE_STEEL: [number, number, number, number] = [0.16, 1, 0.3, 1];

const codes = [
  {
    code: "OBC 2024",
    title: "Ontario Building Code",
    note: "Part 4 (structural design), Part 3 (fire & life safety), Part 6 (HVAC).",
  },
  {
    code: "NBCC 2020",
    title: "National Building Code of Canada",
    note: "Reference standard for environmental loads and limit states design.",
  },
  {
    code: "CSA S16-19",
    title: "Design of Steel Structures",
    note: "Member sizing, connection design, seismic provisions, ductile fuses.",
  },
  {
    code: "CSA W47.1",
    title: "Certified Welding Bureau",
    note: "Division 1 fabrication shop. CWI-supervised welding throughout.",
  },
  {
    code: "CSA W59",
    title: "Welded Steel Construction",
    note: "Workmanship + acceptance for shop and field welds.",
  },
  {
    code: "CISC HSC",
    title: "Handbook of Steel Construction",
    note: "Connection details, member tables, erection practice — Canadian.",
  },
  {
    code: "ULC S101",
    title: "Fire Endurance Tests",
    note: "Listed assemblies for column, beam, and floor fire ratings.",
  },
  {
    code: "CSA Z276",
    title: "Site Class Determination",
    note: "Geotechnical site response classification for seismic design.",
  },
];

const cities = [
  { name: "Toronto", x: 410, y: 320, ss: "1.7" },
  { name: "Mississauga", x: 360, y: 350, ss: "1.7" },
  { name: "Brampton", x: 350, y: 290, ss: "1.8" },
  { name: "Vaughan", x: 395, y: 270, ss: "1.8" },
  { name: "Markham", x: 445, y: 280, ss: "1.8" },
  { name: "Richmond Hill", x: 415, y: 245, ss: "1.9" },
  { name: "Oakville", x: 305, y: 380, ss: "1.6" },
  { name: "Burlington", x: 260, y: 400, ss: "1.6" },
  { name: "Pickering", x: 495, y: 320, ss: "1.7" },
  { name: "Ajax", x: 525, y: 325, ss: "1.7" },
  { name: "Whitby", x: 555, y: 330, ss: "1.7" },
  { name: "Newmarket", x: 410, y: 195, ss: "2.0" },
  { name: "Aurora", x: 400, y: 215, ss: "1.9" },
  { name: "Milton", x: 280, y: 340, ss: "1.7" },
];

export function Compliance() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: EASE_STEEL }}
      >
        <SectionLabel code="005" label="Code & Compliance" />
      </motion.div>

      <div className="grid items-end gap-12 lg:grid-cols-2">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE_STEEL }}
          className="font-clash text-4xl font-black uppercase leading-none tracking-tight text-foreground md:text-6xl"
        >
          Sealed by an
          <br />
          Ontario PEng<span className="text-steel-red">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE_STEEL }}
          className="max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          Every PEB-MS package is checked against the codes below before it
          leaves the office. Submission packages are tabbed, indexed, and ready
          for municipal plan review on first reading.
        </motion.p>
      </div>

      <div className="grid items-stretch gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE_STEEL }}
        >
          <Card className="flex h-full flex-col rounded-none border-foreground/10 bg-foreground/3">
            <div className="flex items-center justify-between border-b border-foreground/10 px-7 py-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red">
                FIG. 03 — GTA Snow Load (Ss · kPa)
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                OBC App. C
              </span>
            </div>
            <CardContent className="flex flex-1 flex-col p-6">
              <div className="relative aspect-square overflow-hidden rounded-[1rem] border border-border bg-background">
                <Map shape={gta as any} />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4 border-t border-foreground/10 pt-5">
                {(
                  [
                    ["1.6 – 1.7", "Lakeshore"],
                    ["1.7 – 1.8", "Inner GTA"],
                    ["1.9 – 2.0", "York / Durham N"],
                  ] as const
                ).map(([range, region]) => (
                  <div key={region}>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red">
                      {range} kPa
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                      {region}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.25, ease: EASE_STEEL }}
        >
          <Card className="flex h-full flex-col rounded-none border-foreground/10 bg-foreground/3">
            <div className="flex items-center justify-between border-b border-foreground/10 px-7 py-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red">
                Standards Reference
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                R.07 / 2026
              </span>
            </div>
            <ul className="flex-1">
              {codes.map((c, i) => (
                <li key={c.code}>
                  {i > 0 && <Separator className="bg-foreground/10" />}
                  <div className="grid grid-cols-[110px_1fr] items-baseline gap-6 px-7 py-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-steel-red">
                      {c.code}
                    </span>
                    <div>
                      <p className="mb-1 font-clash text-base font-bold uppercase tracking-tight text-foreground">
                        {c.title}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {c.note}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-foreground/10 px-7 py-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Submission package
              </span>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="rounded-none px-0 font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red hover:bg-transparent hover:text-steel-darkred"
              >
                <a href="#download">
                  Code Matrix Sample
                  <ArrowRight className="ml-2 size-3" />
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

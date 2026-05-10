"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./utils";

const EASE_STEEL: [number, number, number, number] = [0.16, 1, 0.3, 1];

type ProgramSpec = {
  live: string;
  floors: string;
  f2f: string;
  bay: string;
  drift: string;
  vibration: string;
};

const programs: Record<string, ProgramSpec> = {
  Office: {
    live: "2.4 kPa",
    floors: "3 – 5",
    f2f: "4.0 m",
    bay: "9 × 9 m",
    drift: "h/400",
    vibration: "8 Hz min",
  },
  "Retail / Mixed-Use": {
    live: "4.8 kPa (GF) / 2.4 kPa",
    floors: "2 – 4",
    f2f: "4.5 m / 3.6 m",
    bay: "12 × 9 m",
    drift: "h/400",
    vibration: "6 Hz min",
  },
  Residential: {
    live: "1.9 kPa",
    floors: "4 – 6",
    f2f: "3.0 m",
    bay: "7.5 × 7.5 m",
    drift: "h/500",
    vibration: "5 Hz min",
  },
  "Light Industrial": {
    live: "6.0 kPa",
    floors: "2 – 3",
    f2f: "5.5 m",
    bay: "12 × 10 m",
    drift: "h/400",
    vibration: "4 Hz min",
  },
};

export function Specs() {
  const names = React.useMemo(() => Object.keys(programs), []);
  const [active, setActive] = React.useState<string>(names[0]);
  const cur = programs[active];

  const tables: { key: string; rows: [string, string][] }[] = [
    {
      key: "GEOMETRY",
      rows: [
        ["Storey Range", cur.floors],
        ["Floor-to-Floor", cur.f2f],
        ["Typical Bay (primary × secondary)", cur.bay],
        ["Maximum Footprint", "< 7,500 m²"],
        ["Cantilever Capability", "≤ 3.0 m"],
      ],
    },
    {
      key: "LOADS",
      rows: [
        ["Live Load (typical)", cur.live],
        ["Snow (GTA Ss / Sr)", "1.8 / 0.4 kPa"],
        ["Wind (q 1/50)", "0.44 kPa"],
        ["Inter-storey Drift Limit", cur.drift],
        ["Floor Vibration", cur.vibration],
      ],
    },
    {
      key: "MATERIALS",
      rows: [
        ["Columns", "HSS 254–356 · W310–360"],
        ["Primary Beams", "W360 × 39 – W530 × 82"],
        ["Secondary / Joists", "W200 – W360 + OWSJ"],
        ["Composite Deck", "76 mm galv. + 65 mm topping"],
        ["Lateral System", "CBF · MRF · Combination"],
      ],
    },
  ];

  return (
    <div id="specs" className="space-y-10 bg-background text-foreground ">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: EASE_STEEL }}
      >
        <SectionLabel code="002" label="Performance Envelope" />
      </motion.div>

      <div className="grid items-end gap-12 lg:grid-cols-2">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE_STEEL }}
          className="font-clash text-4xl font-black uppercase leading-none tracking-tight md:text-6xl"
        >
          Specify by
          <br />
          program<span className="text-steel-red">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE_STEEL }}
          className="max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          The PEB-MS envelope adapts to occupancy. Switch program to see
          code-default loads, geometry windows, and material families. Final
          values are set during preliminary design — all subject to an Ontario
          PEng review.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE_STEEL }}
        className="grid grid-cols-1 border-y border-foreground/10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {names.map((name, i) => {
          const isActive = active === name;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setActive(name)}
              className={`group relative px-7 py-6 text-left transition-colors ${
                isActive ? "bg-foreground/4" : "hover:bg-foreground/2"
              } ${i < names.length - 1 ? "lg:border-r border-foreground/10" : ""}`}
            >
              <span
                className={`absolute left-0 right-0 top-0 h-0.5 transition-colors ${
                  isActive ? "bg-steel-red" : "bg-transparent"
                }`}
              />
              <p
                className={`mb-2 font-mono text-[10px] uppercase tracking-[0.16em] ${
                  isActive ? "text-steel-red" : "text-muted-foreground"
                }`}
              >
                Program / 0{i + 1}
              </p>
              <p
                className={`font-clash text-xl font-bold leading-tight tracking-tight ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {name}
              </p>
            </button>
          );
        })}
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        {tables.map((t, i) => (
          <motion.div
            key={t.key}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.1 * (i + 1),
              ease: EASE_STEEL,
            }}
          >
            <Card className="rounded-none border-foreground/10 bg-foreground/3">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red">
                    [0{i + 1}.0{i + 1}]
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {t.key}
                  </span>
                </div>
                <ul>
                  {t.rows.map(([k, v], j) => (
                    <li key={k}>
                      {j > 0 && <Separator className="bg-foreground/10" />}
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                          {k}
                        </span>
                        <span className="font-clash text-lg font-bold uppercase tracking-tight text-foreground">
                          {v}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE_STEEL }}
        className="flex flex-wrap items-center justify-between gap-6 border border-foreground/10 border-l-[3px] border-l-steel-red px-7 py-5"
      >
        <p className="max-w-2xl font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
          Values shown reflect typical GTA — Toronto / Vaughan / Markham /
          Brampton / Oakville. Site-specific loads may vary.
        </p>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="rounded-none px-0 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-red hover:bg-transparent hover:text-steel-darkred"
        >
          <a href="#download">
            Download PEB-MS-
            {active
              .replace(/[^A-Z]/gi, "")
              .slice(0, 3)
              .toUpperCase() || "OFC"}
            .pdf
            <ArrowRight className="ml-2 size-3.5" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
}

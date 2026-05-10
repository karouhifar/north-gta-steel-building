"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SectionLabel } from "./utils";

const EASE_STEEL: [number, number, number, number] = [0.16, 1, 0.3, 1];

const phases = [
  {
    n: "01",
    name: "Brief & Site",
    dur: "1–2 wk",
    lead: "Site, occupancy, footprint, height limits, neighbour conditions, soils.",
    deliverables: ["Concept floor plate", "Block massing", "Code-path memo"],
  },
  {
    n: "02",
    name: "Schematic Design",
    dur: "2–3 wk",
    lead: "Bay grid, lateral system selection, vertical circulation, MEP zones.",
    deliverables: ["Stamped SD package", "Steel tonnage estimate", "GMP cost band"],
  },
  {
    n: "03",
    name: "Engineering & Permit",
    dur: "4–6 wk",
    lead: "Member sizing, connection design, drift + vibration check, PEng seal.",
    deliverables: ["Permit drawings", "Structural calculations", "OBC matrix"],
  },
  {
    n: "04",
    name: "Shop Tickets",
    dur: "3–4 wk",
    lead: "CNC fabrication models, weld maps, paint schedule, erection sequence.",
    deliverables: ["IFC fabrication model", "Bolt list", "Crane plan"],
  },
  {
    n: "05",
    name: "Fabrication",
    dur: "5–7 wk",
    lead: "CWB W47.1 div 1 shop. Mill-test reports tracked to each member.",
    deliverables: ["Mill certs", "NDT reports", "Pre-coat inspection"],
  },
  {
    n: "06",
    name: "Erection & Closeout",
    dur: "4–6 wk",
    lead: "Field welding, decking, slab pours, lateral commissioning, sign-off.",
    deliverables: ["As-built drawings", "Bolt torque log", "Letter of compliance"],
  },
];

export function Process() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: EASE_STEEL }}
      >
        <SectionLabel code="004" label="Engineering Process" />
      </motion.div>

      <div className="grid items-end gap-12 lg:grid-cols-2">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE_STEEL }}
          className="font-clash text-4xl font-black uppercase leading-none tracking-tight text-foreground md:text-6xl"
        >
          Concept to
          <br />
          occupancy
          <br />
          in 18 weeks<span className="text-steel-red">.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE_STEEL }}
        >
          <p className="mb-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Six phases. Each one ends in a deliverable the next phase consumes — no gaps, no
            rework, no surprises at building permit.
          </p>
          <Separator className="bg-foreground/10" />
          <div className="flex gap-12 pt-5">
            <div>
              <p className="font-clash text-3xl font-black uppercase leading-none tracking-tight text-foreground">
                18<span className="text-steel-red">wk</span>
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Average
              </p>
            </div>
            <div>
              <p className="font-clash text-3xl font-black uppercase leading-none tracking-tight text-foreground">
                6
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Stage Gates
              </p>
            </div>
            <div>
              <p className="font-clash text-3xl font-black uppercase leading-none tracking-tight text-foreground">
                1
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Sealed Submission
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-3 h-px bg-foreground/10" />
        <div
          className="pointer-events-none absolute top-3 left-0 h-0.5 bg-steel-red"
          style={{ width: "50%" }}
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {phases.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE_STEEL }}
            >
              <div
                className={`mb-6 size-4 rounded-full border-2 border-steel-red ${
                  i < 3 ? "bg-steel-red" : "bg-background"
                }`}
              />
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red">
                Phase [{p.n}]
              </p>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {p.dur}
              </p>
              <h3 className="mb-3 font-clash text-xl font-bold uppercase tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{p.lead}</p>
              <Separator className="mb-4 bg-foreground/10" />
              <ul className="space-y-2">
                {p.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-foreground/70"
                  >
                    <Plus className="mt-px size-3 shrink-0 text-steel-red" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

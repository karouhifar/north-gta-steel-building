"use client";

import * as React from "react";
import { motion } from "motion/react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./utils";

const EASE_STEEL: [number, number, number, number] = [0.16, 1, 0.3, 1];

type AnatomyComponent = {
  id: string;
  n: string;
  name: string;
  shape: string;
  grade: string;
  role: string;
  data: [string, string][];
};

const components: AnatomyComponent[] = [
  {
    id: "col",
    n: "01",
    name: "Primary Column",
    shape: "HSS 305 × 305 × 13",
    grade: "CSA G40.21 / 350W",
    role: "Carries gravity load floor-to-foundation. HSS preferred for clean architectural reveal and torsional stiffness.",
    data: [
      ["Capacity (φCr)", "4 200 kN"],
      ["Fire Rating", "1 hr · gypsum encapsulated"],
      ["Connection", "Bolted splice every 2 storeys"],
      ["Weight", "120 kg/m"],
    ],
  },
  {
    id: "beam",
    n: "02",
    name: "Floor Beam",
    shape: "W360 × 57 (composite)",
    grade: "CSA G40.21 / 350W",
    role: "Supports the composite floor system. Designed for strength, deflection, and footfall vibration response.",
    data: [
      ["Span", "9.0 m typ."],
      ["Studs", "19 mm Ø shear connectors @ 300 mm"],
      ["Deflection", "L/360 (live), L/240 (total)"],
      ["Vibration", "a/g ≤ 0.5%"],
    ],
  },
  {
    id: "deck",
    n: "03",
    name: "Composite Deck",
    shape: "76 mm Galv Steel Deck + 65 mm topping",
    grade: "Z275 / fc′ 25 MPa",
    role: "The galvanized steel deck is permanent formwork and tension reinforcement. Concrete topping completes the diaphragm.",
    data: [
      ["Total Slab Depth", "141 mm"],
      ["Topping Strength", "25 MPa @ 28 days"],
      ["Reinforcement", "152×152 MW9.1 mesh"],
      ["Diaphragm", "Rigid · transfers lateral load"],
    ],
  },
  {
    id: "brace",
    n: "04",
    name: "Lateral Brace",
    shape: "HSS 178 × 178 × 9.5 (CBF)",
    grade: "CSA G40.21 / 350W",
    role: "Concentric Braced Frame resists wind and seismic. Ductile gusset detailing per CSA S16-19.",
    data: [
      ["System", "Type LD CBF (Rd 3.0 / Ro 1.3)"],
      ["Connection", "Welded gusset, slotted HSS"],
      ["Drift", "< h/400 service · h/40 ultimate"],
      ["Yield", "Brace governs · ductile fuse"],
    ],
  },
  {
    id: "base",
    n: "05",
    name: "Base Plate & Anchor",
    shape: "40 mm plate · 4 × 32 mm Ø rod",
    grade: "CSA W59 weld · 350W plate",
    role: "Transfers column load into reinforced concrete pier. Designed for axial, moment, and base-shear transfer.",
    data: [
      ["Plate", "600 × 600 × 40 mm"],
      ["Anchors", "4 × 32 mm Ø · 600 mm embed"],
      ["Pier", "900 × 900 mm RC"],
      ["Grout", "50 mm non-shrink"],
    ],
  },
  {
    id: "clad",
    n: "06",
    name: "Cladding System",
    shape: "IMP 100 mm + Curtain Wall",
    grade: "PIR R28 / Aluminum 6063",
    role: "Insulated metal panels and unitized curtain wall hang from spandrel beams via stick framing.",
    data: [
      ["U-value (assembly)", "0.21 W/m²K"],
      ["Air Tightness", "< 0.20 L/s·m² @ 75 Pa"],
      ["Movement", "± 25 mm storey drift"],
      ["Fire", "NFPA 285 compliant"],
    ],
  },
  {
    id: "fire",
    n: "07",
    name: "Fire Protection",
    shape: "Intumescent / Encapsulation",
    grade: "ULC S101 listed",
    role: "Steel framing rated by intumescent coating, gypsum encapsulation, or sprayed cementitious — based on member exposure.",
    data: [
      ["Columns", "1 hr gypsum (2 layers 16 mm Type X)"],
      ["Beams", "Intumescent · 1 hr"],
      ["Floor", "1 hr inherent (composite slab)"],
      ["Egress", "Stair shafts 2 hr enc."],
    ],
  },
];

export function Anatomy() {
  const [active, setActive] = React.useState<string>("col");
  const cur = components.find((c) => c.id === active)!;

  return (
    <div id="anatomy" className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: EASE_STEEL }}
      >
        <SectionLabel code="003" label="Structural Anatomy" />
      </motion.div>

      <div className="grid items-end gap-12 lg:grid-cols-2">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE_STEEL }}
          className="font-clash text-4xl font-black uppercase leading-none tracking-tight text-foreground md:text-6xl"
        >
          Seven layers.
          <br />
          One stamped
          <br />
          frame<span className="text-steel-red">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE_STEEL }}
          className="max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          Click any callout to inspect specification, grade, and the engineering decision behind
          it. Each component is fabricated to shop tickets with tolerances tighter than CSA W59
          minimums.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, delay: 0.2, ease: EASE_STEEL }}
        className="grid grid-cols-1 border border-foreground/10 lg:grid-cols-[1.4fr_1fr]"
      >
        <div className="relative bg-foreground/2 lg:border-r lg:border-foreground/10">
          <div className="flex items-center justify-between border-b border-foreground/10 px-7 py-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red">
              FIG. 02 — Section A-A
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Scale 1:75 · North facade
            </span>
          </div>
          <div className="p-8">
            <SectionCutaway active={active} onSelect={setActive} />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b border-foreground/10 px-7 py-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red">
              Component [{cur.n}]
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              of 07
            </span>
          </div>

          <div className="flex-1 px-9 py-8">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red">
              {cur.shape}
            </p>
            <h3 className="mb-2 font-clash text-3xl font-black uppercase leading-none tracking-tight text-foreground">
              {cur.name}
            </h3>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {cur.grade}
            </p>
            <div className="mb-6 h-px w-16 bg-steel-red" />
            <p className="mb-8 text-sm leading-relaxed text-foreground/75">{cur.role}</p>
            <ul>
              {cur.data.map(([k, v], i) => (
                <li key={k}>
                  {i > 0 && <Separator className="bg-foreground/10" />}
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-3.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      {k}
                    </span>
                    <span className="text-sm font-medium text-foreground">{v}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-foreground/10 px-7 py-5">
            {components.map((c) => {
              const isActive = active === c.id;
              return (
                <Button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c.id)}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  className={`rounded-none font-mono text-[10px] uppercase tracking-[0.1em] ${
                    isActive
                      ? "bg-steel-red text-primary-foreground hover:bg-steel-darkred"
                      : "border-foreground/15 bg-transparent text-muted-foreground hover:border-steel-red hover:bg-transparent hover:text-steel-red"
                  }`}
                >
                  {c.n} · {c.name.split(" ")[0]}
                </Button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SectionCutaway({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  const hotspots: Record<string, { cx: number; cy: number }> = {
    col: { cx: 220, cy: 380 },
    beam: { cx: 360, cy: 320 },
    deck: { cx: 480, cy: 305 },
    brace: { cx: 285, cy: 245 },
    base: { cx: 215, cy: 600 },
    clad: { cx: 545, cy: 460 },
    fire: { cx: 330, cy: 510 },
  };

  return (
    <svg viewBox="0 0 600 720" className="block h-auto w-full">
      <defs>
        <pattern id="ms-hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#999" strokeWidth="0.6" />
        </pattern>
        <pattern id="ms-conc" patternUnits="userSpaceOnUse" width="4" height="4">
          <circle cx="2" cy="2" r="0.5" fill="#999" />
        </pattern>
        <pattern id="ms-deck" patternUnits="userSpaceOnUse" width="14" height="8">
          <path d="M0 8 L4 0 L10 0 L14 8 Z" fill="#cc0000" opacity="0.15" stroke="#cc0000" strokeWidth="0.5" />
        </pattern>
        <pattern id="ms-ground" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#666" strokeWidth="0.4" />
        </pattern>
      </defs>

      <rect x="0" y="640" width="600" height="80" fill="url(#ms-ground)" opacity="0.4" />
      <line x1="0" y1="640" x2="600" y2="640" stroke="#333" strokeWidth="1.5" />
      <text x="10" y="700" fontFamily="JetBrains Mono" fontSize="9" fill="#999">
        GRADE / EXIST. SUBGRADE
      </text>

      <rect x="180" y="600" width="80" height="40" fill="#1a1a1a" stroke="#333" />
      <rect x="195" y="595" width="50" height="5" fill="#666" />
      <rect x="190" y="595" width="60" height="3" fill="#cc0000" />
      <line x1="200" y1="640" x2="200" y2="600" stroke="#666" strokeWidth="0.6" strokeDasharray="2 2" />
      <line x1="240" y1="640" x2="240" y2="600" stroke="#666" strokeWidth="0.6" strokeDasharray="2 2" />
      <text x="200" y="635" fontFamily="JetBrains Mono" fontSize="7" fill="#999" textAnchor="middle">
        RC PIER
      </text>

      <rect x="500" y="600" width="80" height="40" fill="#1a1a1a" stroke="#333" />
      <rect x="510" y="595" width="60" height="3" fill="#cc0000" />

      {[
        { y: 580, name: "L1", code: "F-01" },
        { y: 460, name: "L2", code: "F-02" },
        { y: 340, name: "L3", code: "F-03" },
        { y: 220, name: "L4", code: "F-04" },
        { y: 100, name: "ROOF", code: "R-04" },
      ].map((f, i) => (
        <g key={f.code}>
          <rect x="195" y={f.y - 5} width="380" height="5" fill="url(#ms-conc)" stroke="#333" strokeWidth="0.5" />
          <rect x="195" y={f.y} width="380" height="8" fill="url(#ms-deck)" />
          <line x1="195" y1={f.y + 8} x2="575" y2={f.y + 8} stroke="#cc0000" strokeWidth="0.6" opacity="0.6" />
          <text
            x="20"
            y={f.y + 4}
            fontFamily="JetBrains Mono"
            fontSize="9"
            fill={f.name === "L3" ? "#cc0000" : "#999"}
            fontWeight="500"
          >
            {f.name}
          </text>
          <text x="20" y={f.y + 16} fontFamily="JetBrains Mono" fontSize="7" fill="#666">
            {f.code}
          </text>
          <line x1="60" y1={f.y} x2="80" y2={f.y} stroke="#cc0000" strokeWidth="0.5" />
          {i < 4 && (
            <text x="70" y={f.y + 60} fontFamily="JetBrains Mono" fontSize="8" fill="#cc0000" textAnchor="middle">
              4.0m
            </text>
          )}
        </g>
      ))}
      <line x1="70" y1="100" x2="70" y2="585" stroke="#cc0000" strokeWidth="0.5" strokeDasharray="2 2" />

      {[200, 400, 570].map((x) => (
        <g key={x}>
          <rect x={x - 6} y={100} width={12} height={500} fill="#0a0a0a" stroke="#333" strokeWidth="0.5" />
          {[220, 460].map((y) => (
            <line key={y} x1={x - 9} y1={y} x2={x + 9} y2={y} stroke="#cc0000" strokeWidth="1" opacity="0.6" />
          ))}
        </g>
      ))}

      {[100, 220, 340, 460, 580].map((y) => (
        <g key={y}>
          <rect x={206} y={y - 10} width={188} height={10} fill="#1a1a1a" stroke="#333" strokeWidth="0.4" />
          <line x1="206" y1={y - 5} x2="394" y2={y - 5} stroke="#666" strokeWidth="0.5" />
          <rect x={406} y={y - 10} width={158} height={10} fill="#1a1a1a" stroke="#333" strokeWidth="0.4" />
          <line x1="406" y1={y - 5} x2="564" y2={y - 5} stroke="#666" strokeWidth="0.5" />
        </g>
      ))}

      <line x1="206" y1="220" x2="394" y2="340" stroke="#0a0a0a" strokeWidth="6" strokeLinecap="round" />
      <line x1="206" y1="220" x2="394" y2="340" stroke="#cc0000" strokeWidth="1" opacity="0.6" />
      <polygon points="200,220 220,220 220,240" fill="#cc0000" />
      <polygon points="394,340 394,320 374,340" fill="#cc0000" />

      <rect x="575" y="100" width="14" height="500" fill="#1a1a1a" />
      <rect x="589" y="100" width="6" height="500" fill="url(#ms-hatch)" />
      {[160, 280, 400, 520].map((y) => (
        <line key={y} x1="575" y1={y} x2="595" y2={y} stroke="#333" strokeWidth="0.6" />
      ))}

      <rect x="206" y="550" width="188" height="10" fill="url(#ms-hatch)" opacity="0.6" />

      <text x="20" y="80" fontFamily="JetBrains Mono" fontSize="9" fill="#cc0000">
        SECTION A-A
      </text>
      <line x1="20" y1="85" x2="60" y2="85" stroke="#cc0000" strokeWidth="0.6" />

      {components.map((c) => {
        const pos = hotspots[c.id];
        if (!pos) return null;
        const isActive = active === c.id;
        return (
          <g
            key={c.id}
            onClick={() => onSelect(c.id)}
            className="cursor-pointer"
          >
            <circle
              cx={pos.cx}
              cy={pos.cy}
              r={isActive ? 18 : 14}
              fill={isActive ? "#cc0000" : "#fff"}
              stroke="#cc0000"
              strokeWidth="1.5"
            />
            <circle
              cx={pos.cx}
              cy={pos.cy}
              r={isActive ? 22 : 18}
              fill="none"
              stroke="#cc0000"
              strokeWidth="0.8"
              opacity={isActive ? 0.5 : 0}
            >
              {isActive && <animate attributeName="r" values="18;30;18" dur="2s" repeatCount="indefinite" />}
              {isActive && <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />}
            </circle>
            <text
              x={pos.cx}
              y={pos.cy + 4}
              fontFamily="JetBrains Mono"
              fontSize="11"
              fontWeight="600"
              fill={isActive ? "#fff" : "#cc0000"}
              textAnchor="middle"
            >
              {c.n}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

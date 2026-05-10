"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { QuoteUI } from "@/components/ui/quoteUI";

const EASE_STEEL: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PROGRAMS = ["Office", "Retail", "Mixed-Use", "Residential", "Industrial"];
const CITIES = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Oakville",
  "Pickering",
  "Other GTA",
];

export function Quote() {
  const [program, setProgram] = React.useState("Office");
  const [storeys, setStoreys] = React.useState(4);
  const [span, setSpan] = React.useState(9);
  const [city, setCity] = React.useState("Toronto");
  const [submitted, setSubmitted] = React.useState(false);

  const gfa = Math.round(span * span * 0.85 * 4 * storeys);
  const tonnage = Math.round(gfa * 0.045);
  const ballpark = `$${(gfa * 1.85).toFixed(0)}k – $${(gfa * 2.4).toFixed(0)}k`;

  return (
    <QuoteUI id="quote">
      <div className="relative grid items-start gap-12 px-8 py-16 lg:grid-cols-2 lg:px-12 lg:py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE_STEEL }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground">
              [007]
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground/70">
              Configure Your Build
            </span>
            <span className="h-px flex-1 bg-primary-foreground/20" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE_STEEL }}
            className="mb-8 font-clash text-4xl font-black uppercase leading-none tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
          >
            Tell us
            <br />
            the building<span className="text-steel-black">.</span>
            <br />
            We&apos;ll size
            <br />
            the steel<span className="text-steel-black">.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE_STEEL }}
          >
            <div className="mb-8 h-0.5 w-28 bg-steel-black" />
            <p className="mb-10 max-w-md text-base leading-relaxed text-primary-foreground/85">
              Configure a starting point below. We&apos;ll send a sealed
              preliminary package — bay grid, member sizes, ballpark cost, and
              18-week schedule — within 48 hours.
            </p>

            <div className="grid grid-cols-2 gap-6 border-y border-primary-foreground/20 py-7">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground/60">
                  Response
                </p>
                <p className="font-clash text-3xl font-black uppercase leading-none tracking-tight text-primary-foreground">
                  48hr
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground/60">
                  Quote
                </p>
                <p className="font-clash text-3xl font-black uppercase leading-none tracking-tight text-primary-foreground">
                  No Cost
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground/60">
                  Sealed By
                </p>
                <p className="font-clash text-lg font-bold uppercase tracking-tight text-primary-foreground">
                  Ontario PEng
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground/60">
                  Serves
                </p>
                <p className="font-clash text-lg font-bold uppercase tracking-tight text-primary-foreground">
                  All GTA + S. Ont
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE_STEEL }}
        >
          <Card className="relative rounded-none border-transparent bg-background text-foreground shadow-2xl">
            <div
              className="pointer-events-none absolute left-0 top-0 size-20 border-l-[6px] border-t-[6px] border-steel-black"
              aria-hidden
            />
            <CardContent className="p-10">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-steel-red">
                Project Brief / Form-01
              </p>
              <h3 className="mb-7 font-clash text-2xl font-bold uppercase tracking-tight">
                Preliminary Configuration
              </h3>

              <div className="space-y-6">
                <div>
                  <Label className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    01 — Program
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {PROGRAMS.map((p) => {
                      const isActive = program === p;
                      return (
                        <Button
                          key={p}
                          type="button"
                          variant={isActive ? "default" : "outline"}
                          size="sm"
                          onClick={() => setProgram(p)}
                          className={`rounded-none font-mono text-[10px] uppercase tracking-[0.12em] ${
                            isActive
                              ? "bg-steel-red text-primary-foreground hover:bg-steel-darkred"
                              : "border-border bg-transparent text-muted-foreground hover:border-steel-red hover:bg-transparent hover:text-steel-red"
                          }`}
                        >
                          {p}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <Label className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      02 — Storeys
                    </Label>
                    <span className="font-clash text-xl font-bold tracking-tight text-steel-red">
                      {storeys}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={6}
                    step={1}
                    value={storeys}
                    onChange={(e) => setStoreys(+e.target.value)}
                    className="w-full accent-steel-red"
                    aria-label="Storeys"
                  />
                  <div className="mt-1 flex justify-between font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
                    <span>2 Storey</span>
                    <span>6 Storey</span>
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <Label className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      03 — Typical Bay (m)
                    </Label>
                    <span className="font-clash text-xl font-bold tracking-tight text-steel-red">
                      {span}m
                    </span>
                  </div>
                  <input
                    type="range"
                    min={6}
                    max={12}
                    step={0.5}
                    value={span}
                    onChange={(e) => setSpan(+e.target.value)}
                    className="w-full accent-steel-red"
                    aria-label="Typical bay span"
                  />
                  <div className="mt-1 flex justify-between font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
                    <span>6m</span>
                    <span>12m</span>
                  </div>
                </div>

                <div>
                  <Label className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    04 — Site Municipality
                  </Label>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="w-full rounded-md border-border bg-background py-3 text-sm">
                      <SelectValue placeholder="Select municipality" />
                    </SelectTrigger>
                    <SelectContent>
                      {CITIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-steel-black p-5 text-primary-foreground">
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-steel-red">
                    Preliminary Estimate
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.12em] text-primary-foreground/45">
                        GFA
                      </p>
                      <p className="font-clash text-base font-bold tracking-tight text-primary-foreground">
                        {gfa.toLocaleString()} m²
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.12em] text-primary-foreground/45">
                        Steel
                      </p>
                      <p className="font-clash text-base font-bold tracking-tight text-primary-foreground">
                        {tonnage} T
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.12em] text-primary-foreground/45">
                        Budget
                      </p>
                      <p className="font-clash whitespace-nowrap text-base font-bold tracking-tight text-primary-foreground">
                        {ballpark}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="ms-quote-email"
                    className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    05 — Email
                  </Label>
                  <Input
                    id="ms-quote-email"
                    type="email"
                    placeholder="you@firm.com"
                    className="h-11 rounded-md border-border bg-background text-sm"
                  />
                </div>

                <Button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  size="lg"
                  className={`w-full rounded-md py-6 font-mono text-xs uppercase tracking-[0.12em] transition-transform ${
                    submitted
                      ? "bg-steel-black text-primary-foreground hover:bg-steel-black"
                      : "bg-steel-red text-primary-foreground hover:-translate-y-0.5 hover:bg-steel-darkred"
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check className="size-4" />
                      Brief Received — Reply within 48hr
                    </>
                  ) : (
                    <>
                      Send Brief
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>

                <p className="text-center font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
                  No spam · No marketing list · No phone scripts
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </QuoteUI>
  );
}

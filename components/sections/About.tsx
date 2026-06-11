"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="relative overflow-hidden border-b bg-background py-16 text-foreground sm:py-20 lg:py-32">
      {/* Red brutalist accent */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "70%" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-1/2 hidden w-1 -translate-y-1/2 bg-steel-red lg:block"
      />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Number column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.75,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-2"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              [001]
            </p>

            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              Manifesto
            </p>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="min-w-0 lg:col-span-7"
          >
            <h2 className="font-clash text-[clamp(2.5rem,11vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              We don&apos;t put up
              <br />
              <span className="text-muted-foreground">buildings.</span>
              <br />
              We engineer
              <br />
              <span className="text-steel-red">permanence.</span>
            </h2>
          </motion.div>

          {/* Right description card */}
          <motion.div
            initial={{ opacity: 0, x: 56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-end lg:col-span-3"
          >
            <Card className="rounded-none border-x-0 border-b-0 border-t border-border bg-transparent shadow-none ring-0">
              <CardContent className="px-0 pb-0 pt-5 sm:pt-6">
                <p className="max-w-xl font-general text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-sm">
                  Every structure begins with raw Canadian steel. Cold-formed.
                  Pre-engineered. Assembled with precision tolerances measured
                  in millimeters. This isn&apos;t construction — it&apos;s
                  fabrication at architectural scale.
                </p>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-6 h-auto rounded-none px-0 font-general text-xs uppercase tracking-widest text-foreground hover:bg-transparent hover:text-steel-red"
                >
                  <Link href="#about" className="inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

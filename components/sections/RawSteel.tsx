"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "CSA",
    description: "A660 Certified",
  },
  {
    title: "NBC",
    description: "2020 Compliant",
  },
  {
    title: "P.Eng",
    description: "Stamped Drawings",
  },
];

export default function RawSteelSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 text-foreground sm:py-20 lg:py-32">
      {/* Asymmetric background text */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-clash font-bold uppercase leading-none text-steel-offwhite/70 dark:text-steel-gray/20"
        style={{
          fontSize: "clamp(56px, 22vw, 360px)",
        }}
      >
        Raw Steel
      </motion.div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="min-w-0 lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Red border accent */}
              <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-steel-red" />

              <Card className="relative overflow-hidden rounded-none border border-border bg-card p-0 shadow-2xl">
                <CardContent className="group relative aspect-[4/3] overflow-hidden p-0 sm:aspect-[3/4] lg:aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=1200&fit=crop&q=80"
                    alt="Steel fabrication"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 42vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-75"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-steel-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute left-5 top-5 h-0.5 w-12 bg-steel-red sm:left-6 sm:top-6 sm:w-16" />
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <div className="hidden lg:col-span-1 lg:block" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="min-w-0 lg:col-span-6"
          >
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-steel-red sm:mb-6 sm:text-xs">
              Raw Campaign / 2024
            </p>

            <h2 className="mb-6 font-clash text-[clamp(2.75rem,12vw,5rem)] font-bold uppercase leading-none tracking-tight text-foreground sm:mb-8 sm:text-6xl lg:text-6xl xl:text-7xl">
              No ornament.
              <br />
              <span className="text-muted-foreground">No pretense.</span>
              <br />
              Just structure.
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-6 h-0.5 bg-steel-red sm:mb-8"
            />

            <p className="mb-8 max-w-xl font-general text-sm leading-relaxed text-muted-foreground sm:text-base lg:max-w-lg">
              Steel doesn&apos;t apologize. It doesn&apos;t follow trends. It
              carries loads measured in tons across spans measured in hundreds
              of feet. When you strip away the decoration, what remains is truth
              — the honest expression of engineered force meeting functional
              demand.
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
              {certifications.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.25 + index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-t border-border pt-4"
                >
                  <p className="font-clash text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {item.title}
                  </p>

                  <p className="mt-1 font-mono text-[11px] text-muted-foreground sm:text-xs">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

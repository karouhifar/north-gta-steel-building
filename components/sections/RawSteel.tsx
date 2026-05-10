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
    <section className="relative overflow-hidden bg-background py-24 text-foreground lg:py-32">
      {/* Asymmetric background text */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap font-clash font-bold uppercase leading-none text-steel-offwhite dark:text-steel-gray/30"
        style={{
          fontSize: "20vw",
        }}
      >
        Raw Steel
      </motion.div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="relative">
              {/* Red border accent */}
              <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-steel-red" />

              <Card className="relative overflow-hidden rounded-none border border-steel-mid bg-steel-dark p-0 shadow-2xl">
                <CardContent className="group relative aspect-[3/4] overflow-hidden p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&h=1200&fit=crop&q=80"
                    alt="Steel fabrication"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-75"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-steel-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute left-6 top-6 h-0.5 w-16 bg-steel-red" />
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
            className="col-span-12 lg:col-span-6"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-steel-red">
              Raw Campaign / 2024
            </p>

            <h2 className="mb-8 font-clash text-4xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-6xl xl:text-7xl">
              No ornament.
              <br />
              <span className="text-steel-light">No pretense.</span>
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
              className="mb-8 h-0.5 bg-steel-red"
            />

            <p className="mb-8 max-w-lg font-general text-base leading-relaxed text-shadow-steel-dark">
              Steel doesn&apos;t apologize. It doesn&apos;t follow trends. It
              carries loads measured in tons across spans measured in hundreds
              of feet. When you strip away the decoration, what remains is truth
              — the honest expression of engineered force meeting functional
              demand.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
                  className="border-t border-steel-mid pt-4"
                >
                  <p className="font-clash text-3xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </p>

                  <p className="mt-1 font-mono text-xs text-shadow-steel-dark">
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

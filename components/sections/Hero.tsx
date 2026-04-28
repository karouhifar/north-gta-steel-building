"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Grid from "@/public/grid.svg";
import HeroIMG from "@/public/hero_img.png";

const titleLines = ["GTA", "STEEL", "CRAFT"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-steel-black pt-16 text-white">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-100">
        <Image
          src={Grid}
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Featured build card */}
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -8,
          scale: 1.015,
        }}
        className="group pointer-events-auto absolute right-8 top-28 z-20 hidden w-105 lg:block xl:right-16 xl:w-170"
      >
        {/* Red border accent */}
        <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-steel-red" />

        <Card className="relative overflow-hidden rounded-[2rem] border border-steel-mid bg-steel-dark p-2 shadow-2xl">
          <CardContent className="relative aspect-6/4 overflow-hidden rounded-[1.5rem] p-0">
            <Image
              src={HeroIMG}
              alt="Modern steel building exterior"
              fill
              priority
              sizes="(min-width: 1280px) 700px, 420px"
              className="object-cover brightness-90 contrast-125 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale group-hover:brightness-50 group-hover:contrast-100"
            />

            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-steel-black/20 via-transparent to-transparent transition-all duration-700 ease-out group-hover:from-steel-black/90 group-hover:via-steel-black/40" />

            {/* Red hover line */}
            <div className="pointer-events-none absolute left-6 top-6 h-0.5 w-0 bg-steel-red transition-all duration-500 ease-out group-hover:w-24" />

            {/* Hover text */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-8 p-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-steel-red">
                Featured Build
              </p>

              <h2 className="font-clash text-2xl font-bold uppercase tracking-tight text-white">
                Industrial Steel System
              </h2>

              <p className="mt-2 max-w-sm font-general text-sm leading-relaxed text-steel-light">
                Clear-span structure engineered for commercial and industrial
                applications across Ontario.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Left fade for legibility */}
      <div className="pointer-events-none absolute inset-0 z-2 bg-linear-to-r from-steel-black via-steel-black/30 to-transparent" />

      {/* Main content */}
      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-screen-2xl px-6 pb-16 lg:px-12 lg:pb-24">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="pointer-events-auto col-span-12 lg:col-span-8">
            <div className="mb-2 overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-mono text-xs uppercase tracking-widest text-steel-light"
              >
                Pre-Engineered Steel Structures — Since 2010
              </motion.p>
            </div>

            <div className="space-y-0">
              {titleLines.map((line, index) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.2 + index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-clash font-bold uppercase leading-none tracking-tight"
                    style={{
                      fontSize: "clamp(72px, 9vw, 160px)",
                    }}
                  >
                    {line}
                    {line !== "GTA" && (
                      <span className="text-steel-red">&nbsp;.</span>
                    )}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{
                duration: 0.8,
                delay: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-8 mt-6 h-1 bg-steel-red"
            />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-16">
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-md font-general text-base leading-relaxed text-steel-light"
              >
                Custom pre-engineered steel buildings for commercial,
                industrial, and agricultural applications. Uncompromising
                structural integrity. Zero aesthetic compromise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button
                  asChild
                  className="h-auto rounded-none bg-white px-8 py-4 font-general text-xs font-semibold uppercase tracking-widest text-steel-black hover:bg-steel-red hover:text-white"
                >
                  <Link href="#configure">
                    Configure Your Build
                    <ArrowRight className="ml-3 size-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-auto rounded-none border-steel-mid bg-transparent px-8 py-4 font-general text-xs font-medium uppercase tracking-widest text-white hover:border-white hover:bg-transparent hover:text-white"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-[30] flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-steel-light">
          Scroll
        </span>
        <div className="h-8 w-px animate-pulse bg-steel-red" />
      </motion.div>
    </section>
  );
}

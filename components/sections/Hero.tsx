"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Grid from "@/public/images/grid.svg";
import HeroIMG from "@/public/images/hero_img.png";

const titleLines = ["North GTA", "STEEL", "Buildings"];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] overflow-hidden bg-background pt-24 text-foreground sm:pt-28 lg:pt-16">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-100">
        <Image
          src={Grid}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Left fade for legibility */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-linear-to-r from-background via-background/50 to-transparent sm:via-background/35" />

      {/* Main content */}
      <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-screen-2xl items-end px-4 pb-14 sm:px-6 sm:pb-20 lg:min-h-[calc(100svh-4rem)] lg:px-12 lg:pb-24 xl:pb-28">
        {/* Featured build card — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -8, scale: 1.015 }}
          className="group pointer-events-auto absolute right-6 top-8 z-20 hidden w-[min(38vw,420px)] lg:block xl:right-12 xl:top-16 xl:w-[min(42vw,620px)] 2xl:right-16 2xl:w-[680px]"
        >
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-steel-red" />

          <Card className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-2xl">
            <CardContent className="relative aspect-[6/4] overflow-hidden rounded-[1.5rem] p-0">
              <Image
                src={HeroIMG}
                alt="Modern steel building exterior"
                fill
                priority
                sizes="(min-width: 1536px) 680px, (min-width: 1280px) 42vw, 38vw"
                className="object-cover brightness-90 contrast-125 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale group-hover:brightness-50 group-hover:contrast-100"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-steel-black/20 via-transparent to-transparent transition-all duration-700 ease-out group-hover:from-steel-black/90 group-hover:via-steel-black/40" />

              <div className="pointer-events-none absolute left-6 top-6 h-0.5 w-0 bg-steel-red transition-all duration-500 ease-out group-hover:w-24" />

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-8 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 xl:p-6">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-steel-red xl:text-xs">
                  Featured Build
                </p>

                <h2 className="font-clash text-xl font-bold uppercase tracking-tight text-primary-foreground xl:text-2xl">
                  Industrial Steel System
                </h2>

                <p className="mt-2 max-w-sm font-general text-xs leading-relaxed text-steel-offwhite xl:text-sm">
                  Clear-span structure engineered for commercial and industrial
                  applications across Ontario.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid w-full min-w-0 grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="pointer-events-auto col-span-1 flex min-w-0 flex-col gap-y-5 lg:col-span-8 lg:max-w-[62vw] xl:col-span-7">
            <div className="mb-1 overflow-hidden sm:mb-2">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-xs sm:tracking-widest"
              >
                Pre-Engineered Steel Structures
              </motion.p>
            </div>

            <div className="space-y-2 sm:space-y-4 lg:space-y-5">
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
                    className="break-words font-clash text-[clamp(42px,15vw,82px)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-foreground sm:text-[clamp(64px,12vw,110px)] lg:text-[clamp(76px,7vw,150px)] lg:leading-none lg:tracking-wide"
                  >
                    {line}
                    {line !== "North GTA" && (
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
              className="mb-3 mt-3 h-1 max-w-[120px] bg-steel-red sm:mb-6 sm:mt-5"
            />

            <div className="flex flex-col gap-6 md:max-w-3xl md:flex-row md:items-start lg:max-w-none">
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-md font-general text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                Custom pre-engineered steel buildings for commercial,
                industrial, and agricultural applications. Uncompromising
                structural integrity. Zero aesthetic compromise.
              </motion.p>

              <div className="flex w-full flex-col gap-4 md:w-auto">
                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4 md:w-auto"
                >
                  <Button
                    asChild
                    className="h-auto w-full rounded-none bg-foreground px-6 py-4 font-general text-xs font-semibold uppercase tracking-widest text-background hover:bg-steel-red hover:text-primary-foreground sm:w-auto sm:px-8"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center"
                    >
                      Get a Free Quote
                      <ArrowRight className="ml-3 size-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-auto w-full rounded-none border-border bg-transparent px-6 py-4 font-general text-xs font-medium uppercase tracking-widest text-foreground hover:border-foreground hover:bg-transparent hover:text-foreground sm:w-auto sm:px-8"
                  >
                    <Link
                      href="#projects"
                      className="flex items-center justify-center"
                    >
                      View Projects
                    </Link>
                  </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="pointer-events-none hidden flex-col items-center gap-2 md:flex"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                    Scroll
                  </span>
                  <div className="h-6 w-px animate-pulse bg-steel-red sm:h-8" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  MapPin,
  ShieldCheck,
  Snowflake,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HandymanImg from "@/public/images/handyman.webp";
const stats = [
  {
    value: "Ontario",
    label: "Focused Steel Building Partner",
  },
  {
    value: "Permit",
    label: "Ready Planning Support",
  },
  {
    value: "Turnkey",
    label: "Design To Build Guidance",
  },
];

const values = [
  {
    icon: Snowflake,
    title: "Built For Ontario Conditions",
    description:
      "Ontario steel buildings need to account for snow load, wind exposure, seasonal weather, site access, insulation needs, and long-term use. We help customers plan with those real conditions in mind.",
  },
  {
    icon: ClipboardCheck,
    title: "Simplified Buying Process",
    description:
      "Choosing a steel building can feel overwhelming. We make the process clearer by helping you understand building size, layout, options, timelines, budget, and the next practical step.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Driven Construction Support",
    description:
      "From custom design guidance to steel supply, permit preparation, foundation coordination, and erection support, we help move your project from idea to completed structure.",
  },
  {
    icon: Compass,
    title: "Guidance Before You Order",
    description:
      "Before you buy a steel building package, we help you think through your land, use case, municipality, access, doors, clear span, height, insulation, and future growth.",
  },
];

const process = [
  {
    number: "01",
    title: "Tell Us What You Need To Build",
    description:
      "We begin with your use case: garage, workshop, warehouse, farm building, truck garage, storage facility, commercial building, or custom structure.",
  },
  {
    number: "02",
    title: "Plan The Right Building",
    description:
      "We help review the correct size, height, layout, doors, insulation, clear span, foundation needs, and practical options for your property.",
  },
  {
    number: "03",
    title: "Prepare For Permits And Site Work",
    description:
      "We guide you through the permit-aware planning stage so your project is better prepared for municipal requirements, drawings, foundation planning, and site coordination.",
  },
  {
    number: "04",
    title: "Supply And Build With Confidence",
    description:
      "Once the plan is clear, we help support the steel package, delivery, foundation coordination, erection, insulation options, and project completion.",
  },
];

const buildingTypes = [
  "Commercial Steel Buildings",
  "Steel Warehouses",
  "Agricultural Buildings",
  "Steel Garages",
  "Workshops",
  "Truck Garages",
  "Storage Buildings",
  "Custom Steel Buildings",
];

const serviceHighlights = [
  "Custom steel building design",
  "Permit-ready guidance",
  "Foundation and concrete coordination",
  "Steel building supply",
  "Building erection support",
  "Insulation options",
  "Site planning support",
  "Turnkey project guidance",
];

export default function About() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background py-16 sm:py-20 lg:py-32">
        <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.08]" />

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 select-none whitespace-nowrap font-clash font-bold uppercase leading-none text-foreground/5 lg:block"
          style={{ fontSize: "clamp(96px, 18vw, 320px)" }}
        >
          Ontario Steel
        </motion.div>

        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 max-w-full font-mono text-[10px] uppercase tracking-[0.22em] text-steel-red sm:mb-5 sm:text-xs sm:tracking-[0.35em]"
              >
                About North GTA Steel Buildings
              </motion.p>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="max-w-full break-words font-clash text-[clamp(2.75rem,12vw,8.25rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-foreground"
                >
                  Steel Buildings
                  <br />
                  Built For Ontario
                  <br />
                  <span className="text-steel-red">Weather, Work, Growth.</span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="my-6 h-1 max-w-[8rem] bg-steel-red sm:my-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-2xl font-general text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
              >
                North GTA Steel Buildings helps Ontario property owners,
                farmers, contractors, and businesses plan, supply, and build
                durable steel structures with confidence. From garages and
                workshops to warehouses, agricultural buildings, truck garages,
                storage buildings, and commercial facilities, we make the
                process clearer from the first conversation to the final build.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap"
              >
                <Button
                  asChild
                  className="h-auto w-full justify-center whitespace-normal rounded-none bg-steel-red px-6 py-4 text-center font-general text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:bg-foreground hover:text-background sm:w-auto sm:px-8"
                >
                  <Link href="/#quote">
                    Get A Free Building Quote
                    <ArrowRight className="ml-3 size-4 shrink-0" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-auto w-full justify-center whitespace-normal rounded-none border-border bg-transparent px-6 py-4 text-center font-general text-xs font-medium uppercase tracking-widest text-foreground hover:border-steel-red hover:bg-transparent hover:text-steel-red sm:w-auto sm:px-8"
                >
                  <Link href="/#services">Explore Building Types</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.5rem] border-2 border-steel-red sm:-bottom-4 sm:-right-4 sm:rounded-[2rem]" />

                <Card className="relative overflow-hidden rounded-[1.5rem] border border-border bg-muted p-2 shadow-2xl sm:rounded-[2rem]">
                  <CardContent className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] p-0 sm:aspect-[16/11] sm:rounded-[1.5rem] lg:aspect-[4/5]">
                    <Image
                      src={HandymanImg}
                      alt="North GTA steel building project"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover brightness-75 contrast-125 grayscale transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-steel-black/90 via-steel-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-steel-red">
                        Ontario-Ready Structures
                      </p>

                      <h2 className="font-clash text-xl font-bold uppercase tracking-tight text-primary-foreground sm:text-2xl">
                        Planning. Supply. Permit-Aware Support.
                      </h2>

                      <p className="mt-3 max-w-sm font-general text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        A clearer path for steel garages, warehouses,
                        agricultural buildings, workshops, and commercial steel
                        structures.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main statement */}
      <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest sm:text-xs text-muted-foreground">
                [001]
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-muted-foreground">
                Who We Are
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-7"
            >
              <h2 className="font-clash text-3xl font-semibold uppercase leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                We do more than
                <br />
                <span className="text-muted-foreground">
                  sell steel packages.
                </span>
                <br />
                We help you build
                <br />
                <span className="text-steel-red">the right structure.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 56 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-end lg:col-span-3"
            >
              <div className="border-t border-border pt-6">
                <p className="font-general text-sm leading-relaxed text-muted-foreground">
                  We help Ontario buyers understand what their site, use,
                  budget, and municipality may require before they order. Our
                  goal is to make every project more practical, more durable,
                  and better prepared from the start.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-muted py-10 sm:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-t border-border pt-5"
              >
                <p className="font-clash text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden border-b border-border bg-background py-16 sm:py-20 lg:py-32">
        <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.05]" />

        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="mb-10 grid grid-cols-1 gap-8 sm:mb-16 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-widest sm:text-xs text-steel-red">
                [002]
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-muted-foreground">
                Why Choose Us
              </p>
            </div>

            <div className="lg:col-span-10">
              <h2 className="font-clash text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                Simplifying
                <br />
                Steel Building_
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 56 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Card className="group h-full rounded-none border border-border bg-transparent shadow-none transition-colors hover:border-steel-red">
                    <CardContent className="p-6 sm:p-8">
                      <div className="mb-8 flex items-center justify-between">
                        <span className="font-mono text-xs text-muted-foreground">
                          0{index + 1}
                        </span>

                        <Icon className="size-6 text-muted-foreground transition-colors group-hover:text-steel-red" />
                      </div>

                      <h3 className="mb-3 font-clash text-lg font-semibold uppercase tracking-tight text-foreground sm:text-xl">
                        {value.title}
                      </h3>

                      <p className="font-general text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-border bg-muted py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-steel-red">
                [003] Our Mission
              </p>

              <h2 className="font-clash text-3xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-4xl lg:text-6xl">
                Clear Planning.
                <br />
                Durable Steel.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
                <Card className="rounded-none border border-border bg-background shadow-none">
                  <CardContent className="p-6 sm:p-8">
                    <CheckCircle2 className="mb-8 size-7 text-steel-red" />

                    <h3 className="mb-3 font-clash text-lg font-semibold uppercase tracking-tight text-foreground sm:text-xl">
                      Our Mission
                    </h3>

                    <p className="font-general text-sm leading-relaxed text-muted-foreground">
                      To help Ontario property owners build strong, efficient,
                      and permit-ready steel buildings through clear guidance,
                      durable materials, and reliable project support.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-none border border-border bg-background shadow-none">
                  <CardContent className="p-6 sm:p-8">
                    <Building2 className="mb-8 size-7 text-steel-red" />

                    <h3 className="mb-3 font-clash text-lg font-semibold uppercase tracking-tight text-foreground sm:text-xl">
                      Our Promise
                    </h3>

                    <p className="font-general text-sm leading-relaxed text-muted-foreground">
                      Built for Ontario. Engineered for decades. We help
                      customers avoid common mistakes by making the steel
                      building path more structured, transparent, and practical.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="mb-10 sm:mb-16">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-steel-red">
              [004] How We Help
            </p>

            <h2 className="font-clash text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              A Better Way
              <br />
              To Start_
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="h-full rounded-none border border-border bg-muted shadow-none">
                  <CardContent className="p-6 sm:p-8">
                    <p className="mb-8 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-steel-red">
                      {item.number}
                    </p>

                    <h3 className="mb-3 font-clash text-lg font-semibold uppercase tracking-tight text-foreground sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="font-general text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services and building types */}
      <section className="border-y border-border bg-muted py-16 sm:py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-steel-red">
                [005] What We Support
              </p>

              <h2 className="font-clash text-3xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-4xl lg:text-6xl">
                From Concept
                <br />
                To Build_
              </h2>

              <p className="mt-6 max-w-md font-general text-sm leading-relaxed text-muted-foreground">
                Our support can include planning, design guidance, supply,
                permit preparation, foundation coordination, insulation options,
                and building erection support.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
                {serviceHighlights.map((service) => (
                  <span
                    key={service}
                    className="max-w-full break-words border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-steel-red hover:text-steel-red sm:px-4 sm:text-xs"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-steel-red">
                  Building Types
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {buildingTypes.map((type) => (
                    <span
                      key={type}
                      className="max-w-full break-words border border-border bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-steel-red hover:text-steel-red sm:px-4 sm:text-xs"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="border-b border-border bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-widest sm:text-xs text-steel-red">
                [006] Service Area
              </p>
            </div>

            <div className="lg:col-span-9">
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-steel-red" />

                <p className="max-w-3xl font-general text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We serve property owners, farmers, contractors, and businesses
                  across Ontario, with a strong focus on the Greater Toronto
                  Area, North GTA communities, rural Ontario properties, and
                  commercial or industrial sites that need practical steel
                  building solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-steel-red py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.3) 41px)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-screen-2xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest sm:text-xs text-primary-foreground/70">
              Start Your Build
            </p>

            <h2 className="font-clash text-3xl font-bold uppercase leading-[0.98] tracking-tight text-primary-foreground sm:text-4xl lg:text-6xl">
              Start With A Plan
              <br />
              Before You Order Steel.
            </h2>

            <p className="mt-5 max-w-xl font-general text-sm leading-relaxed text-primary-foreground/80">
              Tell us what you want to build, where you want to build it, and
              how you plan to use it. We will help you understand the right next
              step for your Ontario steel building project.
            </p>
          </div>

          <Button
            asChild
            className="h-auto w-full justify-center whitespace-normal rounded-none bg-primary-foreground px-6 py-4 text-center font-general text-xs font-semibold uppercase tracking-widest text-steel-black hover:bg-steel-black hover:text-primary-foreground sm:w-auto sm:px-8"
          >
            <Link href="/#quote">
              Start A Free Steel Building Consultation
              <ArrowRight className="ml-3 size-4 shrink-0" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Compass,
  Hammer,
  MapPin,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Map = dynamic(() => import("@/components/ui/leaflet-map"), {
  ssr: false,
  loading: () => <p>Loading map…</p>,
});

type ServiceCity = {
  slug: string;
  name: string;
  region: string;
  x: number;
  y: number;
  description: string;
};

const serviceCities: ServiceCity[] = [
  {
    slug: "toronto",
    name: "Toronto",
    region: "GTA",
    x: 312,
    y: 278,
    description:
      "Commercial, industrial, and custom steel building support for Greater Toronto projects.",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "GTA West",
    x: 295,
    y: 281,
    description:
      "Warehouses, commercial buildings, and practical steel solutions for growing business sites.",
  },
  {
    slug: "brampton",
    name: "Brampton",
    region: "GTA West",
    x: 286,
    y: 266,
    description:
      "Steel structures for logistics, workshops, truck garages, and industrial expansion.",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "York Region",
    x: 306,
    y: 258,
    description:
      "Custom steel buildings for commercial, warehouse, and contractor-driven developments.",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "York Region",
    x: 319,
    y: 248,
    description:
      "Permit-aware planning and structural support for steel building projects in York Region.",
  },
  {
    slug: "oakville",
    name: "Oakville",
    region: "Halton",
    x: 274,
    y: 286,
    description:
      "Steel garages, workshops, and commercial-use steel buildings for long-term property value.",
  },
  {
    slug: "burlington",
    name: "Burlington",
    region: "Halton",
    x: 255,
    y: 290,
    description:
      "Support for storage buildings, commercial structures, and custom steel applications.",
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "Toronto East",
    x: 332,
    y: 278,
    description:
      "Eastern Toronto service coverage for steel garages, storage, and light industrial structures.",
  },
  {
    slug: "pickering",
    name: "Pickering",
    region: "Durham",
    x: 352,
    y: 281,
    description:
      "Steel building solutions for east GTA commercial, agricultural, and custom-use projects.",
  },
  {
    slug: "ajax",
    name: "Ajax",
    region: "Durham",
    x: 367,
    y: 284,
    description:
      "Durable steel structures for business growth, vehicle storage, and industrial use.",
  },
  {
    slug: "whitby",
    name: "Whitby",
    region: "Durham",
    x: 382,
    y: 287,
    description:
      "Planning and supply support for garages, workshops, and commercial steel buildings.",
  },
  {
    slug: "caledon",
    name: "Caledon",
    region: "Peel",
    x: 262,
    y: 250,
    description:
      "Strong fit for agricultural, equestrian, workshop, and rural steel building projects.",
  },
  {
    slug: "uxbridge",
    name: "Uxbridge",
    region: "Durham North",
    x: 351,
    y: 252,
    description:
      "Permit-aware steel building support for rural, agricultural, and mixed-use properties.",
  },
  {
    slug: "halton-hills",
    name: "Halton Hills",
    region: "Halton",
    x: 250,
    y: 269,
    description:
      "Custom steel structures for storage, farm buildings, garages, and practical site expansion.",
  },
  {
    slug: "milton",
    name: "Milton",
    region: "Halton",
    x: 266,
    y: 274,
    description:
      "Commercial and industrial steel building support for rapidly growing development corridors.",
  },
  {
    slug: "sudbury",
    name: "Sudbury",
    region: "Northern Ontario",
    x: 180,
    y: 174,
    description:
      "Northern Ontario coverage for industrial, storage, and large-span steel building requirements.",
  },
  {
    slug: "kingston",
    name: "Kingston",
    region: "Eastern Ontario",
    x: 429,
    y: 330,
    description:
      "Eastern Ontario support for warehouses, custom steel buildings, and commercial structures.",
  },
  {
    slug: "st-catharines",
    name: "St. Catharines",
    region: "Niagara",
    x: 235,
    y: 312,
    description:
      "Niagara area support for steel garages, storage buildings, and commercial applications.",
  },
];

const serviceHighlights = [
  "Custom Steel Building Design",
  "Building Insulation",
  "Turnkey Projects",
  "Permit Applications",
  "Foundation Design & Installation",
  "Building Site Grading & Preparation",
  "Structural Steel Fabrication",
  "Steel Building Renovation & Expansion",
];

const cityGroups = [
  {
    title: "Greater Toronto Area",
    cities: [
      "Toronto",
      "Mississauga",
      "Brampton",
      "Vaughan",
      "Richmond Hill",
      "Scarborough",
      "Pickering",
      "Ajax",
      "Whitby",
      "Caledon",
    ],
  },
  {
    title: "Halton & Niagara",
    cities: [
      "Oakville",
      "Burlington",
      "Halton Hills",
      "Milton",
      "St. Catharines",
    ],
  },
  {
    title: "Extended Ontario Coverage",
    cities: ["Uxbridge", "Kingston", "Sudbury"],
  },
];

function OntarioMap() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-muted p-4 shadow-2xl">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-steel-red">
            Ontario Coverage Map
          </p>
          <h3 className="mt-1 font-clash text-xl font-semibold uppercase tracking-tight text-foreground">
            Areas We Serve
          </h3>
        </div>

        <div className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Interactive
        </div>
      </div>

      <div className="relative aspect-square overflow-hidden rounded-[1rem] border border-border bg-background">
        <Map />
      </div>
    </div>
  );
}

export default function ServiceAreas() {
  const [openCity, setOpenCity] = useState<string>("toronto");

  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background py-24 lg:py-32">
        <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.08]" />

        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 select-none whitespace-nowrap font-clash font-bold uppercase leading-none text-foreground/5 lg:block"
          style={{ fontSize: "16vw" }}
        >
          Ontario
        </motion.div>

        <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-steel-red"
              >
                North GTA Steel Buildings
              </motion.p>

              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-clash text-[clamp(50px,8vw,126px)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-foreground"
              >
                Service Areas
                <br />
                Across
                <br />
                <span className="text-steel-red">Ontario.</span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="my-8 h-1 bg-steel-red"
              />

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-2xl font-general text-base leading-relaxed text-muted-foreground lg:text-lg"
              >
                We serve property owners, contractors, farmers, and businesses
                across Ontario, with a strong focus on the Greater Toronto Area.
                Explore the map to see our key service regions and cities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Button
                  asChild
                  className="h-auto rounded-none bg-steel-red px-8 py-4 font-general text-xs font-semibold uppercase tracking-widest text-white hover:bg-foreground hover:text-background"
                >
                  <Link href="/#quote">
                    Get A Free Quote
                    <ArrowRight className="ml-3 size-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-auto rounded-none border-border bg-transparent px-8 py-4 font-general text-xs font-medium uppercase tracking-widest text-foreground hover:border-steel-red hover:bg-transparent hover:text-steel-red"
                >
                  <Link href="/#services">Explore Services</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="col-span-12 lg:col-span-5"
            >
              <Card className="rounded-[1.75rem] border border-border bg-muted shadow-2xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6 flex items-start justify-between gap-4 border-b border-border pb-6">
                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-steel-red">
                        Service Coverage
                      </p>
                      <h2 className="font-clash text-2xl font-bold uppercase tracking-tight text-foreground">
                        Ontario-Focused
                      </h2>
                    </div>

                    <div className="hidden rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:block">
                      GTA Priority
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-5 shrink-0 text-steel-red" />
                      <p className="font-general text-sm leading-relaxed text-muted-foreground">
                        Core service area includes Toronto, Peel, York, Durham,
                        Halton, Niagara, Eastern Ontario, and selected Northern
                        Ontario coverage.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 size-5 shrink-0 text-steel-red" />
                      <p className="font-general text-sm leading-relaxed text-muted-foreground">
                        Permit-aware planning and steel building support adapted
                        to local municipal and site conditions.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <PackageCheck className="mt-0.5 size-5 shrink-0 text-steel-red" />
                      <p className="font-general text-sm leading-relaxed text-muted-foreground">
                        Support available for custom steel buildings, garages,
                        workshops, agricultural structures, warehouses, and
                        commercial projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map + active city */}
      <section className="border-b border-border bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="mb-12 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-steel-red">
                [001]
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Areas We Serve
              </p>
            </div>

            <div className="col-span-12 lg:col-span-10">
              <h2 className="font-clash text-5xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-7xl">
                Ontario Service
                <br />
                Coverage_
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-8"
            >
              <OntarioMap />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="col-span-12 lg:col-span-4"
            >
              <Card className="h-full rounded-[1.5rem] border border-border bg-background shadow-none">
                <CardContent className="p-6 sm:p-8">
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-steel-red">
                    Service Areas
                  </p>

                  <h3 className="font-clash text-3xl font-bold uppercase tracking-tight text-foreground">
                    Ontario Coverage
                  </h3>

                  <p className="mt-2 font-general text-sm leading-relaxed text-muted-foreground">
                    Select a city to view local steel building support, service
                    notes, and project coverage.
                  </p>

                  <div className="my-6 h-px bg-border" />

                  <div className="max-h-175 space-y-3 overflow-y-auto pr-2">
                    {serviceCities.map((city) => {
                      const isOpen = openCity === city.slug;

                      return (
                        <Collapsible
                          key={city.slug}
                          open={isOpen}
                          onOpenChange={(open) =>
                            setOpenCity(open ? city.slug : "")
                          }
                          className="rounded-xl border border-border bg-muted/60 transition-colors hover:border-steel-red/60"
                        >
                          <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left">
                            <div className="flex items-start gap-3">
                              <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-steel-red/15 text-steel-red">
                                <MapPin className="size-4" />
                              </div>

                              <div>
                                <h4 className="font-clash text-lg font-bold uppercase tracking-tight text-foreground">
                                  {city.name}
                                </h4>

                                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                  {city.region}
                                </p>
                              </div>
                            </div>

                            <ChevronDown
                              className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                                isOpen ? "rotate-180 text-steel-red" : ""
                              }`}
                            />
                          </CollapsibleTrigger>

                          <CollapsibleContent className="px-4 pb-4">
                            <div className="border-t border-border pt-4">
                              <p className="font-general text-sm leading-relaxed text-muted-foreground">
                                {city.description}
                              </p>

                              <div className="mt-5 rounded-xl border border-border bg-background/70 p-4">
                                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-steel-red">
                                  Coverage Note
                                </p>

                                <p className="font-general text-sm leading-relaxed text-muted-foreground">
                                  Service availability can vary by project
                                  scope, location, and build requirements.
                                  Contact us to confirm your site and building
                                  type.
                                </p>
                              </div>

                              <Button
                                asChild
                                className="mt-5 h-auto w-full rounded-xl bg-steel-red px-6 py-4 font-general text-xs font-semibold uppercase tracking-widest text-white hover:bg-foreground hover:text-background"
                              >
                                <Link href="/#quote">
                                  Request Service In {city.name}
                                  <ArrowRight className="ml-3 size-4" />
                                </Link>
                              </Button>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* City groups */}
      <section className="relative overflow-hidden border-b border-border bg-background py-24 lg:py-32">
        <div className="steel-grid-bg pointer-events-none absolute inset-0 opacity-[0.05]" />

        <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-steel-red">
              [002] Cities & Regions
            </p>

            <h2 className="font-clash text-5xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-7xl">
              Service Areas
              <br />
              By Region_
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {cityGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card className="h-full rounded-none border border-border bg-transparent shadow-none">
                  <CardContent className="p-8">
                    <p className="mb-6 font-mono text-xs uppercase tracking-widest text-steel-red">
                      0{index + 1}
                    </p>

                    <h3 className="mb-5 font-clash text-xl font-semibold uppercase tracking-tight text-foreground">
                      {group.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {group.cities.map((city) => {
                        const cityMatch = serviceCities.find(
                          (item) => item.name === city,
                        );

                        return (
                          <button
                            key={city}
                            type="button"
                            onClick={() =>
                              cityMatch && setOpenCity(cityMatch.slug)
                            }
                            className="border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-all duration-300 hover:border-steel-red hover:text-steel-red"
                          >
                            {city}
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in these areas */}
      <section className="border-b border-border bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          <div className="mb-16 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-steel-red">
                [003] Services We Support
              </p>

              <h2 className="font-clash text-4xl font-bold uppercase leading-none tracking-tight text-foreground lg:text-6xl">
                Across These
                <br />
                Areas_
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-9">
              <p className="max-w-3xl font-general text-base leading-relaxed text-muted-foreground">
                Our Ontario coverage supports planning, steel building supply,
                permit-aware preparation, and construction-related services
                designed for commercial, industrial, agricultural, and custom
                steel building projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {serviceHighlights.map((service, index) => {
              const icons = [Compass, ShieldCheck, Hammer, Building2];
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Card className="group h-full rounded-none border border-border bg-background shadow-none transition-colors hover:border-steel-red">
                    <CardContent className="p-8">
                      <div className="mb-8 flex items-center justify-between">
                        <span className="font-mono text-xs text-muted-foreground">
                          0{index + 1}
                        </span>
                        <Icon className="size-6 text-muted-foreground transition-colors group-hover:text-steel-red" />
                      </div>

                      <h3 className="font-clash text-lg font-semibold uppercase tracking-tight text-foreground">
                        {service}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-steel-red py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.3) 40px, rgba(0,0,0,0.3) 41px)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-screen-2xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/70">
              Start Your Build
            </p>

            <h2 className="font-clash text-4xl font-bold uppercase leading-none tracking-tight text-white lg:text-6xl">
              Need Steel Building
              <br />
              Service In Ontario?
            </h2>

            <p className="mt-5 max-w-xl font-general text-sm leading-relaxed text-white/80">
              Tell us what you want to build and where the project is located.
              We’ll help you understand the right next step for your service
              area and building type.
            </p>
          </div>

          <Button
            asChild
            className="h-auto rounded-none bg-white px-8 py-4 font-general text-xs font-semibold uppercase tracking-widest text-steel-black hover:bg-steel-black hover:text-white"
          >
            <Link href="/#quote">
              Get A Free Estimate
              <ArrowRight className="ml-3 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

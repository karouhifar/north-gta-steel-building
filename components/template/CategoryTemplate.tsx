"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BuildingCategory } from "@/data/categories";
import { Specs } from "../sections/multi-storey/Specs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Anatomy } from "../sections/multi-storey/Anatomy";
import { Process } from "../sections/multi-storey/Process";
import { Compliance } from "../sections/multi-storey/Compliance";
import { Projects } from "../sections/multi-storey/Projects";
import { Quote } from "../sections/multi-storey/Quote";

type CategoryTemplateProps = {
  category: BuildingCategory;
};

export default function CategoryTemplate({ category }: CategoryTemplateProps) {
  return (
    <main className="min-h-screen relative overflow-hidden border-b bg-background  text-foreground ">
      {/* ============================================================== */}
      {/* HERO                                                            */}
      {/* ============================================================== */}
      <section className="relative overflow-hidden border-b border-foreground/10">
        {/* Background image + brand-styled overlays */}
        <div className="absolute inset-0">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />

          {/* Theme-aware gradient: heavy on the left for text legibility */}
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/30" />

          {/* Bottom-up fade so the section blends into the next */}
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

          {/* Brand red accent bar across the top — punch of #CC0000 */}
          <div className="absolute left-0 top-0 h-1 w-full bg-steel-red" />
        </div>

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center px-6 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 gap-x-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-sm text-muted-foreground">
                {category.number}
              </span>
              <Badge className="rounded-none border border-steel-red/40 bg-steel-red/10 font-mono uppercase tracking-wider text-steel-red hover:bg-steel-red/15">
                {category.minSize}
              </Badge>
            </div>

            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.35em] text-steel-red">
              {category.eyebrow}
            </p>

            <h1 className="font-clash max-w-4xl text-5xl font-black uppercase tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {category.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              {category.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-steel-red px-8 font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-steel-darkred"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-foreground/20 bg-foreground/5 px-8 font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Link href="/service-area">View Service Area</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-16 hidden lg:block"
          >
            <Card className="rounded-none border border-steel-red/40 bg-background/40 backdrop-blur">
              <CardContent className="p-8">
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Best For
                </p>

                <div className="space-y-4">
                  {category.bestFor.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-foreground/10 pb-4"
                    >
                      <span className="text-foreground/80">{item}</span>
                      <span className="text-steel-red">+</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Specs />
      </section>
      <Separator className="bg-foreground/10" />
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Anatomy />
      </section>
      <Separator className="bg-foreground/10" />
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Process />
      </section>
      <Separator className="bg-foreground/10" />
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Compliance />
      </section>
      <Separator className="bg-foreground/10" />
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Projects />
      </section>
      <Separator className="bg-foreground/10" />
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <Quote />
      </section>
      <Separator className="bg-foreground/10" />
      {/* ============================================================== */}
      {/* STRUCTURE DETAILS                                               */}
      {/* ============================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-steel-red">
              Structure Details
            </p>

            <h2 className="font-clash text-4xl font-black uppercase tracking-tight md:text-5xl">
              Engineered for Ontario projects
            </h2>

            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Every building can be configured around site conditions, use case,
              door placement, clear height, insulation needs, snow loads, and
              future expansion planning.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {category.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="border border-foreground/10 bg-foreground/3 p-6 transition-colors hover:border-steel-red/40"
              >
                <span className="mb-8 block font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold text-foreground">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-foreground/10" />

      {/* ============================================================== */}
      {/* IMAGE GALLERY                                                   */}
      {/* ============================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {category.imageGallery.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className="group relative h-100 overflow-hidden border border-foreground/10 bg-foreground/3"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="transition duration-700 group-hover:scale-105 h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
              <p className="font-clash absolute bottom-6 left-6 max-w-md text-lg font-semibold uppercase tracking-wide">
                {image.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* PLANNING NOTES                                                  */}
      {/* ============================================================== */}
      <section className="border-y border-foreground/10 bg-background/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-steel-red">
              Planning Notes
            </p>

            <h2 className="font-clash text-4xl font-black uppercase tracking-tight md:text-5xl">
              What to consider before building
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {category.sections.map((section, index) => (
              <AccordionItem
                key={section.title}
                value={`item-${index}`}
                className="border-foreground/10"
              >
                <AccordionTrigger className="text-left text-xl font-semibold text-foreground hover:text-steel-red hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-8 text-muted-foreground">
                  {section.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============================================================== */}
      {/* CTA                                                             */}
      {/* ============================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="border border-steel-red/40 bg-steel-red/10 p-8 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-steel-red">
                Start Your Project
              </p>

              <h2 className="font-clash text-3xl font-black uppercase tracking-tight md:text-5xl">
                Need a {category.title.toLowerCase()}?
              </h2>

              <p className="mt-5 max-w-3xl text-muted-foreground">
                Tell us your location, target size, building use, and preferred
                timeline. We can help shape the right steel building concept for
                your Ontario site.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-none bg-steel-red px-8 font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-steel-darkred"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

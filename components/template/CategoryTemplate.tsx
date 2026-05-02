"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BuildingCategory } from "@/data/categories";

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

type CategoryTemplateProps = {
  category: BuildingCategory;
};

export default function CategoryTemplate({ category }: CategoryTemplateProps) {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src={category.heroImage}
            alt={category.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-[#111111]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center px-6 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-sm text-white/40">
                {category.number}
              </span>
              <Badge className="border border-red-600/40 bg-red-600/10 text-red-500 hover:bg-red-600/10">
                {category.minSize}
              </Badge>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
              {category.eyebrow}
            </p>

            <h1 className="max-w-4xl text-5xl font-black uppercase tracking-tight text-white md:text-7xl lg:text-8xl">
              {category.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              {category.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-red-600 px-8 font-semibold uppercase tracking-wide text-white hover:bg-red-700"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-white/20 bg-white/5 px-8 font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-black"
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
            <Card className="rounded-none border border-red-600/40 bg-black/35 backdrop-blur">
              <CardContent className="p-8">
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                  Best For
                </p>

                <div className="space-y-4">
                  {category.bestFor.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 pb-4"
                    >
                      <span className="text-white/75">{item}</span>
                      <span className="text-red-500">+</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-red-500">
              Structure Details
            </p>

            <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
              Engineered for Ontario projects
            </h2>

            <p className="mt-6 text-base leading-8 text-white/60">
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
                className="border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="mb-8 block font-mono text-xs text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold text-white">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-white/10" />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {category.imageGallery.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className="group relative h-[420px] overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 max-w-md text-lg font-semibold">
                {image.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-red-500">
              Planning Notes
            </p>

            <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
              What to consider before building
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {category.sections.map((section, index) => (
              <AccordionItem
                key={section.title}
                value={`item-${index}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-xl font-semibold text-white hover:text-red-500 hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-8 text-white/60">
                  {section.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="border border-red-600/40 bg-red-600/10 p-8 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-red-500">
                Start Your Project
              </p>

              <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
                Need a {category.title.toLowerCase()}?
              </h2>

              <p className="mt-5 max-w-3xl text-white/65">
                Tell us your location, target size, building use, and preferred
                timeline. We can help shape the right steel building concept for
                your Ontario site.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-none bg-red-600 px-8 font-semibold uppercase tracking-wide text-white hover:bg-red-700"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

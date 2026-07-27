// components/sections/QuoteSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock,
  FileText,
  MapPin,
  Phone,
  Ruler,
  UserRound,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { STEPS } from "@/data/formConstants";
import { PHONE, PHONE_DISPLAY } from "@/lib/site";
import { QuoteUI } from "../ui/quoteUI";

const STEP_ICONS: Record<number, LucideIcon> = {
  1: Warehouse,
  2: Ruler,
  3: MapPin,
  4: CalendarDays,
  5: UserRound,
};

export default function QuoteSection() {
  return (
    <QuoteUI id="quote">
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="min-w-0 lg:col-span-7"
          >
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-primary-foreground/60 sm:text-xs">
              [004] Start Your Build
            </p>

            <h2 className="mb-5 font-clash text-[clamp(3rem,14vw,5.25rem)] font-bold uppercase leading-none tracking-tight text-primary-foreground sm:mb-6 sm:text-6xl lg:text-7xl xl:text-8xl">
              Get A Free
              <br />
              Estimate_
            </h2>

            <p className="max-w-xl font-general text-sm leading-relaxed text-primary-foreground/80 sm:text-base lg:max-w-lg">
              {STEPS.length} quick steps. No obligation. Our engineering team
              will prepare a complete structural specification and budgetary
              estimate for your project within 48 hours.
            </p>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="min-w-0 lg:col-span-5"
          >
            <Card className="relative overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur sm:rounded-3xl lg:rounded-none">
              {/* Blueprint watermark — top right corner */}
              <Image
                src="/images/frame-bg.webp"
                alt=""
                aria-hidden
                width={620}
                height={393}
                priority={false}
                className="pointer-events-none absolute right-0 top-6 w-58 select-none opacity-70 mix-blend-multiply sm:w-76 dark:opacity-20 dark:mix-blend-screen dark:invert"
              />

              <CardContent className="relative p-5 sm:p-6 lg:p-7">
                <div className="mb-5 flex items-start justify-between gap-4 pb-2">
                  <div className="min-w-0">
                    <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-steel-red">
                      Estimate Request
                    </p>

                    <h3 className="font-clash text-xl font-bold uppercase leading-none tracking-tight text-foreground sm:text-2xl">
                      What We&apos;ll Ask
                    </h3>

                    <p className="mt-2 font-general text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Quick {STEPS.length} steps to your custom steel building
                      estimate
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground">
                    <Clock className="size-3 text-steel-red" />
                    48hr Reply
                  </div>
                </div>

                {/* Step preview — mirrors the contact page form */}
                <ol className="relative mb-5 space-y-2 z-50">
                  {STEPS.map((formStep, index) => {
                    const Icon = STEP_ICONS[formStep.id];
                    const isLast = index === STEPS.length - 1;

                    return (
                      <li key={formStep.id} className="relative flex gap-3">
                        {/* Rail: number badge + dashed connector */}
                        <div className="relative flex w-7 shrink-0 top-3 justify-center">
                          <span className="relative z-10 flex size-7 items-center justify-center rounded-full bg-steel-red font-clash text-[10px] font-bold text-primary-foreground">
                            {String(formStep.id).padStart(2, "0")}
                          </span>

                          {!isLast && (
                            <span
                              aria-hidden
                              className="absolute left-1/2 top-7 -bottom-2 w-px -translate-x-1/2 border-l border-dashed border-steel-red/50"
                            />
                          )}
                        </div>

                        {/* Step row */}
                        <div className="flex min-w-0 flex-1 items-center gap-3 border border-border bg-background/60 px-3 py-2 transition-colors duration-300 hover:border-steel-red">
                          <span className="flex size-8 shrink-0 items-center justify-center bg-steel-red/10">
                            <Icon className="size-4 text-steel-red" />
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="font-clash text-sm font-bold uppercase tracking-tight text-foreground">
                              {formStep.label}
                            </p>

                            <p className="truncate font-general text-xs text-muted-foreground">
                              {formStep.question}
                            </p>
                          </div>

                          <ChevronRight className="size-3.5 shrink-0 text-steel-red" />
                        </div>
                      </li>
                    );
                  })}
                </ol>

                <Button
                  asChild
                  className="h-auto w-full rounded-xl bg-steel-red px-6 py-3 font-general text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background sm:px-8"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-3"
                  >
                    <FileText className="size-4" />
                    Get Free Estimate
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <a
                  href={`tel:${PHONE}`}
                  className="mt-2.5 flex items-center justify-center gap-3 border border-border px-4 py-2.5 text-center transition-colors duration-300 hover:border-steel-red"
                >
                  <Phone className="size-4 shrink-0 text-steel-red" />

                  <span className="min-w-0">
                    <span className="block font-general text-[11px] text-muted-foreground">
                      Prefer to talk? Call us now
                    </span>

                    <span className="block font-clash text-sm font-bold tracking-tight text-foreground">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                <p className="mt-3 text-center font-mono text-[10px] leading-relaxed text-muted-foreground">
                  No obligation — Response within 48 hours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </QuoteUI>
  );
}

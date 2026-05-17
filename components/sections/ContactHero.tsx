"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Phone, Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: "(416) 505-1371",
    href: "tel:+14165051371",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "estimates@northgtasteel.ca",
    href: "mailto:estimates@northgtasteel.ca",
    external: false,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri · 8:00 AM – 6:00 PM EST",
    href: null,
    external: false,
  },
  {
    icon: MapPin,
    label: "Service area",
    value: "Greater Toronto Area · All of Ontario",
    href: null,
    external: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ContactHero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col"
    >
      {/* Eyebrow */}
      <motion.div
        variants={item}
        className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-steel-red"
      >
        <span className="h-px w-8 bg-steel-red" />
        Contact us
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={item}
        className="mt-5 font-clash text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
      >
        Let&apos;s build
        <br />
        <span className="text-steel-red">something great</span>
      </motion.h1>

      {/* Red underline accent */}
      <motion.div variants={item} className="mt-6 h-[3px] w-16 bg-steel-red" />

      {/* Description */}
      <motion.p
        variants={item}
        className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
      >
        Ready to start your project? Fill out the form and our team will get
        back to you within 24 hours with a custom consultation.
      </motion.p>

      {/* Contact details */}
      <motion.div
        variants={item}
        className="grid grid-cols-2 gap-x-5 border-t-2 border-border"
      >
        {CONTACT_ITEMS.map((c) => {
          const Icon = c.icon;
          const content = (
            <div className="group flex items-start gap-4 border-b-2 border-border bg-transparent py-5 transition-colors hover:bg-secondary/40">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-border bg-card transition-colors group-hover:border-steel-red group-hover:bg-steel-red group-hover:text-white">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 font-clash text-base font-semibold leading-snug sm:text-lg">
                  {c.value}
                </div>
              </div>
              {c.href && (
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-steel-red"
                  strokeWidth={2}
                />
              )}
            </div>
          );

          return c.href ? (
            <Link
              key={c.label}
              href={c.href}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-steel-red"
            >
              {content}
            </Link>
          ) : (
            <div key={c.label}>{content}</div>
          );
        })}
      </motion.div>

      {/* Trust badge */}
      <motion.div
        variants={item}
        className="mt-10 flex items-center gap-3 border-2 border-steel-red bg-steel-red/5 p-4"
      >
        <span className="h-2 w-2 shrink-0 animate-pulse bg-steel-red" />
        <p className="text-xs leading-relaxed sm:text-sm">
          <span className="font-clash font-semibold uppercase tracking-tight">
            Fast response
          </span>{" "}
          <span className="text-muted-foreground">
            — Quotes returned within 1 business day.
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}

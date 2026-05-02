// components/sections/QuoteSection.tsx

"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { buildingSizeFields, buildingUseOptions } from "@/data/quote";

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-steel-red py-24 lg:py-10 scroll-mt-25"
    >
      {/* Diagonal line pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.2) 40px, rgba(0,0,0,0.2) 41px)",
          opacity: 1,
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-12 lg:col-span-7"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-white/60">
              [004] Start Your Build
            </p>

            <h2 className="mb-6 font-clash text-5xl font-bold uppercase leading-none tracking-tight text-white lg:text-7xl xl:text-8xl">
              Get A Free
              <br />
              Estimate_
            </h2>

            <p className="max-w-lg font-general text-base leading-relaxed text-white/80">
              Three steps. No obligation. Our engineering team will prepare a
              complete structural specification and budgetary estimate for your
              project within 48 hours.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-12 lg:col-span-5"
          >
            <Card className="relative overflow-hidden border border-border bg-card/95 shadow-2xl backdrop-blur">
              <CardContent className="relative p-6 sm:p-8 lg:p-10">
                <div className="mb-8 flex items-start justify-between gap-6 border-b border-border pb-6">
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-steel-red">
                      Estimate Form
                    </p>

                    <h3 className="font-clash text-2xl font-bold uppercase leading-none tracking-tight text-foreground">
                      Building Size
                    </h3>
                  </div>

                  <div className="hidden rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-foreground sm:block">
                    48hr Reply
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {buildingSizeFields.map((field) => (
                      <div key={field.id} className="space-y-2">
                        <Label
                          htmlFor={field.id}
                          className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
                        >
                          {field.label}
                        </Label>

                        <Input
                          id={field.id}
                          name={field.id}
                          type="number"
                          placeholder={field.placeholder}
                          className="
                h-auto
                rounded-xl
                border-border
                bg-background/70
                px-4
                py-3
                font-mono
                text-sm
                text-foreground
                placeholder:text-muted-foreground
                transition-all
                duration-300
                focus-visible:border-steel-red
                focus-visible:ring-2
                focus-visible:ring-steel-red/30
              "
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Building Use
                    </Label>

                    <Select defaultValue={buildingUseOptions[0]}>
                      <SelectTrigger
                        className="
              h-auto
              rounded-xl
              border-border
              bg-background/70
              px-4
              py-3
              font-mono
              text-sm
              text-foreground
              transition-all
              duration-300
              focus:border-steel-red
              focus:ring-2
              focus:ring-steel-red/30
            "
                      >
                        <SelectValue placeholder="Select building use" />
                      </SelectTrigger>

                      <SelectContent className="rounded-xl border-border bg-card text-foreground shadow-2xl">
                        {buildingUseOptions.map((option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            className="
                  font-mono
                  text-sm
                  focus:bg-steel-red
                  focus:text-white
                  data-[highlighted]:bg-steel-red
                  data-[highlighted]:text-white
                "
                          >
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="rounded-xl border border-border bg-background/60 p-4">
                    <Label className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Province
                    </Label>

                    <p className="font-general text-base leading-relaxed text-foreground">
                      Ontario
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="
          h-auto
          w-full
          rounded-xl
          bg-steel-red
          px-8
          py-4
          font-general
          text-xs
          font-semibold
          uppercase
          tracking-widest
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-foreground
          hover:text-background
        "
                  >
                    Get Free Estimate
                    <ArrowRight className="ml-3 size-4" />
                  </Button>

                  <p className="text-center font-mono text-xs text-muted-foreground">
                    No obligation — Response within 48 hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

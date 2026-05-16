"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "motion/react";
import { QuoteFormValues } from "@/lib/schema";
import { StepHeader } from "../StepHeader";
import { TIMELINE_OPTIONS } from "@/data/formConstants";
import { cn } from "@/lib/utils";

export function StepTimeline() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();
  const selected = watch("timeline");

  return (
    <div>
      <StepHeader
        step={4}
        title="When do you need it?"
        subtitle="No pressure — pick whatever's closest."
      />

      <div
        role="radiogroup"
        aria-label="Timeline"
        className="flex flex-wrap gap-3"
      >
        {TIMELINE_OPTIONS.map((opt, i) => {
          const isSelected = selected === opt.value;
          return (
            <motion.button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                setValue("timeline", opt.value, { shouldValidate: true })
              }
              className={cn(
                "group relative flex flex-col items-start gap-1 border-2 px-5 py-4 transition-all",
                "min-w-35 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isSelected
                  ? "border-steel-red bg-steel-red text-white"
                  : "border-border bg-card hover:border-steel-red",
              )}
            >
              <span className="font-clash text-base font-semibold uppercase leading-none tracking-tight">
                {opt.label}
              </span>
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-widest",
                  isSelected ? "text-white/80" : "text-muted-foreground",
                )}
              >
                {opt.sub}
              </span>
            </motion.button>
          );
        })}
      </div>

      {errors.timeline && (
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-destructive">
          ▲ {errors.timeline.message}
        </p>
      )}
    </div>
  );
}

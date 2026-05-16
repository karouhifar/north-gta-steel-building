"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "motion/react";
import { Check } from "lucide-react";

import { QuoteFormValues } from "@/lib/schema";
import { BUILDING_TYPES } from "@/data/formConstants";
import { cn } from "@/lib/utils";
import { StepHeader } from "../StepHeader";

export function StepBuildingType() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();
  const selected = watch("buildingType");

  return (
    <div>
      <StepHeader
        step={1}
        title="What type of building?"
        subtitle="Pick the closest match — we'll dial in the details later."
      />

      <div
        role="radiogroup"
        aria-label="Building type"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {BUILDING_TYPES.map((opt, i) => {
          const Icon = opt.icon;
          const isSelected = selected === opt.value;
          return (
            <motion.button
              type="button"
              key={opt.value}
              role="radio"
              aria-checked={isSelected}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                setValue("buildingType", opt.value, { shouldValidate: true })
              }
              className={cn(
                "group relative flex items-start gap-4 border-2 bg-card p-5 text-left transition-all cursor-pointer",
                "hover:border-steel-red focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isSelected
                  ? "border-steel-red bg-steel-red/5 shadow-[6px_6px_0_0_var(--color-steel-red)]"
                  : "border-border",
              )}
            >
              {/* Corner tick */}

              <span
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center transition-colors",
                  isSelected
                    ? "bg-steel-red text-white"
                    : "bg-secondary text-foreground group-hover:bg-steel-red group-hover:text-white",
                )}
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>

              <div className="min-w-0 flex-1">
                <div className="font-clash text-lg font-semibold uppercase leading-tight tracking-tight">
                  {opt.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {opt.description}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {errors.buildingType && (
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-destructive">
          ▲ {errors.buildingType.message}
        </p>
      )}
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { STEPS } from "@/data/formConstants";
import { cn } from "@/lib/utils";

export function ProgressBar({ currentStep }: { currentStep: number }) {
  const pct = (currentStep / STEPS.length) * 100;

  return (
    <div className="w-full">
      {/* Step labels */}
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
        {STEPS.map((s) => {
          const done = s.id < currentStep;
          const active = s.id === currentStep;
          return (
            <div
              key={s.id}
              className={cn(
                "flex items-center gap-1.5 transition-colors",
                active && "text-foreground",
                done && "text-steel-red",
              )}
            >
              <span className="font-clash text-sm font-semibold">
                {String(s.id).padStart(2, "0")}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </div>
          );
        })}
      </div>

      {/* Bar */}
      <div className="relative h-1.5 w-full overflow-hidden bg-secondary">
        <motion.div
          className="absolute left-0 top-0 h-full bg-steel-red"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        />
        {/* Leading edge glow */}
        <motion.div
          className="absolute top-0 h-full w-2 bg-white/70 mix-blend-overlay"
          initial={false}
          animate={{ left: `calc(${pct}% - 8px)` }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>
          Step <span className="text-foreground">{currentStep}</span> /{" "}
          {STEPS.length}
        </span>
        <span>{Math.round(pct)}% complete</span>
      </div>
    </div>
  );
}

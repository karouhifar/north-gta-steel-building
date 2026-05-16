"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { QuoteFormValues } from "@/lib/schema";
import { StepHeader } from "../StepHeader";

function DimensionField({
  name,
  label,
  placeholder,
}: {
  name: "width" | "length" | "height";
  label: string;
  placeholder: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();
  const err = errors[name]?.message as string | undefined;

  return (
    <div className="relative">
      <Label
        htmlFor={name}
        className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </Label>
      <div className="relative">
        <Input
          id={name}
          type="number"
          inputMode="numeric"
          placeholder={placeholder}
          className={cn(
            "h-14 border-2 bg-background pr-14 font-clash text-2xl font-semibold rounded-none! transition-colors",
            "focus-visible:border-steel-red focus-visible:ring-0",
            err && "border-destructive",
          )}
          {...register(name, { valueAsNumber: true })}
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          ft
        </span>
      </div>
      {err && (
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-destructive">
          ▲ {err}
        </p>
      )}
    </div>
  );
}

export function StepSize() {
  const { watch } = useFormContext<QuoteFormValues>();
  const width = watch("width");
  const length = watch("length");

  const footprint =
    Number.isFinite(width) && Number.isFinite(length) && width > 0 && length > 0
      ? width * length
      : 0;

  return (
    <div>
      <StepHeader
        step={2}
        title="What size are you thinking?"
        subtitle="Rough estimates are fine — we'll confirm with you."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <DimensionField name="width" label="Width" placeholder="e.g. 40" />
        <DimensionField name="length" label="Length" placeholder="e.g. 80" />
        <DimensionField name="height" label="Height" placeholder="e.g. 16" />
      </div>

      {/* Live footprint */}
      <motion.div
        layout
        className="mt-8 flex flex-col items-start gap-4 border-2 border-steel-red bg-steel-red/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-red">
            Calculated footprint
          </div>
          <div className="mt-1 font-clash text-4xl font-bold leading-none tracking-tight sm:text-5xl">
            <motion.span
              key={footprint}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {footprint.toLocaleString()}
            </motion.span>
            <span className="ml-2 font-mono text-sm font-normal uppercase tracking-widest text-muted-foreground">
              sq ft
            </span>
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {width || 0}′ W × {length || 0}′ L
        </div>
      </motion.div>
    </div>
  );
}

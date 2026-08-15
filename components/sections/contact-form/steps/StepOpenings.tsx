"use client";

import { useFormContext } from "react-hook-form";
import { motion } from "motion/react";
import { Mail, Minus, Plus } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { QuoteFormValues } from "@/lib/schema";
import { LAYOUT_SKETCH_OPTIONS, OPENING_FIELDS } from "@/data/formConstants";
import { EMAIL } from "@/lib/site";
import { StepHeader } from "../StepHeader";
import { ChoiceGroup } from "../ChoiceGroup";
import { FieldError } from "../FieldError";

type CounterName = (typeof OPENING_FIELDS)[number]["name"];

const MAX_OPENINGS = 99;

function CounterField({
  name,
  label,
  sub,
}: {
  name: CounterName;
  label: string;
  sub: string;
}) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();

  const raw = watch(name);
  const current = Number.isFinite(raw) ? Number(raw) : 0;
  const error = errors[name]?.message;

  const nudge = (delta: number) =>
    setValue(name, Math.min(MAX_OPENINGS, Math.max(0, current + delta)), {
      shouldValidate: true,
      shouldDirty: true,
    });

  return (
    <div className="border-2 border-border p-4">
      <Label
        htmlFor={name}
        className="block font-clash text-base font-semibold uppercase tracking-tight text-foreground"
      >
        {label}
      </Label>
      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {sub}
      </p>

      <div className="mt-3 flex items-stretch">
        <button
          type="button"
          onClick={() => nudge(-1)}
          disabled={current <= 0}
          aria-label={`Remove one ${label.toLowerCase()}`}
          className="flex size-11 shrink-0 cursor-pointer items-center justify-center border-2 border-border transition-colors hover:border-steel-red hover:text-steel-red disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Minus className="size-4" />
        </button>

        <Input
          id={name}
          type="number"
          inputMode="numeric"
          min={0}
          max={MAX_OPENINGS}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className={cn(
            "h-11 w-full border-y-2 border-x-0 border-border bg-background text-center font-clash text-xl font-semibold rounded-none!",
            "focus-visible:border-steel-red focus-visible:ring-0",
            error && "border-destructive",
          )}
          {...register(name, { valueAsNumber: true })}
        />

        <button
          type="button"
          onClick={() => nudge(1)}
          disabled={current >= MAX_OPENINGS}
          aria-label={`Add one ${label.toLowerCase()}`}
          className="flex size-11 shrink-0 cursor-pointer items-center justify-center border-2 border-border transition-colors hover:border-steel-red hover:text-steel-red disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Plus className="size-4" />
        </button>
      </div>

      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

export function StepOpenings() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();

  const layoutSketch = watch("layoutSketch");

  const total = OPENING_FIELDS.reduce((sum, field) => {
    const value = watch(field.name);
    return sum + (Number.isFinite(value) ? Number(value) : 0);
  }, 0);

  return (
    <div>
      <StepHeader
        title="Where do the doors and windows go?"
        subtitle="Framed openings drive the frame design — rough counts now, exact placement later."
      />

      <ChoiceGroup
        label="Building layout sketch"
        hint="Do you have a sketch showing where the framed openings sit? A hand drawing is perfect."
        options={LAYOUT_SKETCH_OPTIONS}
        value={layoutSketch}
        onChange={(value) =>
          setValue("layoutSketch", value, {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
        error={errors.layoutSketch?.message}
        errorId="layoutSketch-error"
      />

      {layoutSketch === "have" && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 flex flex-col gap-3 border-2 border-steel-red bg-steel-red/5 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-foreground">
            Send it over any time — photo of a napkin sketch is fine. We&apos;ll
            match it to your quote.
          </p>

          <a
            href={`mailto:${EMAIL}?subject=Building%20layout%20sketch`}
            className="inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-red underline-offset-4 hover:underline"
          >
            <Mail className="size-4" />
            {EMAIL}
          </a>
        </motion.div>
      )}

      {/* Opening counts */}
      <div className="mt-8">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Framed openings
          </p>

          <motion.span
            key={total}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border-2 border-steel-red px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-steel-red"
          >
            {total} total
          </motion.span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {OPENING_FIELDS.map((field) => (
            <CounterField
              key={field.name}
              name={field.name}
              label={field.label}
              sub={field.sub}
            />
          ))}
        </div>
      </div>

      {/* Placement notes */}
      <div className="mt-8">
        <Label
          htmlFor="openingNotes"
          className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          Placement notes{" "}
          <span className="normal-case text-muted-foreground/60">
            (optional)
          </span>
        </Label>

        <Textarea
          id="openingNotes"
          rows={4}
          placeholder="e.g. 14×14 overhead door centred on the front sidewall, man door on the left endwall, 2 windows on the back sidewall."
          aria-invalid={!!errors.openingNotes}
          aria-describedby={
            errors.openingNotes ? "openingNotes-error" : undefined
          }
          className={cn(
            "min-h-28 resize-none border-2 rounded-none! font-general text-base focus-visible:border-steel-red focus-visible:ring-0",
            errors.openingNotes && "border-destructive",
          )}
          {...register("openingNotes")}
        />

        <FieldError
          id="openingNotes-error"
          message={errors.openingNotes?.message}
        />

        <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-widest text-muted-foreground">
          Wall names we use: FSW front sidewall · BSW back sidewall · LEW left
          endwall · REW right endwall
        </p>
      </div>
    </div>
  );
}

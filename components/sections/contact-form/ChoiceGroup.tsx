"use client";

import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { FieldError } from "./FieldError";

type Option<T extends string> = {
  value: T;
  label: string;
  sub?: string;
};

/**
 * Chip-style radio group used by the spec steps. Keeps the visual language of
 * StepTimeline while adding proper radiogroup keyboard behaviour (arrow keys
 * move the selection, only the active chip is in the tab order).
 */
export function ChoiceGroup<T extends string>({
  label,
  hint,
  options,
  value,
  onChange,
  error,
  errorId,
  className,
}: {
  label: string;
  hint?: string;
  options: readonly Option<T>[];
  value?: T;
  onChange: (value: T) => void;
  error?: string;
  errorId: string;
  className?: string;
}) {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedIndex = options.findIndex((option) => option.value === value);

  const move = (direction: 1 | -1) => {
    const from =
      selectedIndex === -1 ? (direction === 1 ? -1 : 0) : selectedIndex;
    const nextIndex = (from + direction + options.length) % options.length;
    onChange(options[nextIndex].value);
    buttonsRef.current[nextIndex]?.focus();
  };

  return (
    <fieldset className={cn("min-w-0", className)}>
      <legend className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </legend>

      {hint && (
        <p className="mb-3 text-xs text-muted-foreground/80 sm:text-sm">
          {hint}
        </p>
      )}

      <div
        role="radiogroup"
        aria-label={label}
        aria-describedby={error ? errorId : undefined}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            event.preventDefault();
            move(-1);
          }
        }}
        className={cn("flex flex-wrap gap-2.5", !hint && "mt-3")}
      >
        {options.map((option, index) => {
          const isSelected = option.value === value;

          return (
            <motion.button
              key={option.value}
              ref={(node) => {
                buttonsRef.current[index] = node;
              }}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={
                isSelected || (selectedIndex === -1 && index === 0) ? 0 : -1
              }
              whileTap={{ scale: 0.97 }}
              onClick={() => onChange(option.value)}
              className={cn(
                "group flex min-w-32 flex-1 cursor-pointer flex-col items-start gap-0.5 border-2 px-4 py-3 text-left transition-colors sm:flex-none",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isSelected
                  ? "border-steel-red bg-steel-red text-primary-foreground"
                  : "border-border bg-card hover:border-steel-red",
              )}
            >
              <span className="font-clash text-sm font-semibold uppercase leading-none tracking-tight sm:text-base">
                {option.label}
              </span>

              {option.sub && (
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-widest",
                    isSelected
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground",
                  )}
                >
                  {option.sub}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      <FieldError id={errorId} message={error} />
    </fieldset>
  );
}

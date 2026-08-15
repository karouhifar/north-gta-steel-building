"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { STEPS } from "@/data/formConstants";
import { cn } from "@/lib/utils";

const EASE_STEEL = [0.16, 1, 0.3, 1] as const;

const pad = (value: number) => String(value).padStart(2, "0");

export function ProgressBar({
  currentStep,
  onStepSelect,
}: {
  currentStep: number;
  onStepSelect?: (step: number) => void;
}) {
  const pct = (currentStep / STEPS.length) * 100;

  // Slide direction for the crumb swap — forward on Continue, back on Back.
  const previousStep = useRef(currentStep);
  const direction = currentStep >= previousStep.current ? 1 : -1;

  useEffect(() => {
    previousStep.current = currentStep;
  }, [currentStep]);

  const current = STEPS[currentStep - 1];
  const previous = currentStep > 1 ? STEPS[currentStep - 2] : undefined;
  const next = currentStep < STEPS.length ? STEPS[currentStep] : undefined;

  // Everything before the previous crumb collapses into the ellipsis menu.
  const collapsed = STEPS.slice(0, Math.max(0, currentStep - 2));
  const goTo = (step: number) => onStepSelect?.(step);

  return (
    <div className="w-full">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <Breadcrumb>
          <BreadcrumbList className="gap-1 sm:gap-2">
            {collapsed.length > 0 && (
              <>
                <BreadcrumbItem>
                  {onStepSelect ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        aria-label="Jump to an earlier step"
                        className="flex cursor-pointer items-center text-muted-foreground transition-colors hover:text-steel-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <BreadcrumbEllipsis className="size-6" />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="start"
                        className="rounded-none"
                      >
                        {collapsed.map((step) => (
                          <DropdownMenuItem
                            key={step.id}
                            onSelect={() => goTo(step.id)}
                            className="cursor-pointer rounded-none font-mono text-xs uppercase tracking-[0.16em]"
                          >
                            <Check className="size-3.5 text-steel-red" />
                            {pad(step.id)} {step.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <BreadcrumbEllipsis className="size-6" />
                  )}
                </BreadcrumbItem>

                <BreadcrumbSeparator className="text-muted-foreground/50" />
              </>
            )}

            {previous && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild={!!onStepSelect}
                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs"
                  >
                    {onStepSelect ? (
                      <button
                        type="button"
                        onClick={() => goTo(previous.id)}
                        className="cursor-pointer hover:text-steel-red"
                      >
                        {pad(previous.id)} {previous.label}
                      </button>
                    ) : (
                      <span>
                        {pad(previous.id)} {previous.label}
                      </span>
                    )}
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator className="text-muted-foreground/50" />
              </>
            )}

            <BreadcrumbItem>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={current.id}
                  initial={{ opacity: 0, x: direction * 10, y: 2 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: direction * -10, y: -2 }}
                  transition={{ duration: 0.28, ease: EASE_STEEL }}
                  className="inline-flex items-center gap-2"
                >
                  <span className="flex size-6 items-center justify-center bg-steel-red font-clash text-[10px] font-bold text-primary-foreground">
                    {pad(current.id)}
                  </span>

                  <BreadcrumbPage className="font-clash text-sm font-bold uppercase tracking-tight text-steel-red sm:text-base">
                    {current.label}
                  </BreadcrumbPage>
                </motion.span>
              </AnimatePresence>
            </BreadcrumbItem>

            {next && (
              <>
                <BreadcrumbSeparator className="text-muted-foreground/50" />

                <BreadcrumbItem>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={next.id}
                      initial={{ opacity: 0, x: direction * 8 }}
                      animate={{ opacity: 0.85, x: 0 }}
                      exit={{ opacity: 0, x: direction * -8 }}
                      transition={{
                        duration: 0.28,
                        delay: 0.04,
                        ease: EASE_STEEL,
                      }}
                      className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs"
                    >
                      {pad(next.id)} {next.label}
                    </motion.span>
                  </AnimatePresence>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Step <span className="text-foreground">{pad(currentStep)}</span> /{" "}
          {pad(STEPS.length)}
        </span>
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
          className="absolute top-0 h-full w-2 bg-primary-foreground/70 mix-blend-overlay"
          initial={false}
          animate={{ left: `calc(${pct}% - 8px)` }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: EASE_STEEL }}
            className={cn("truncate pr-4 normal-case tracking-normal")}
          >
            {current.question}
          </motion.span>
        </AnimatePresence>

        <span className="shrink-0">{Math.round(pct)}% complete</span>
      </div>
    </div>
  );
}

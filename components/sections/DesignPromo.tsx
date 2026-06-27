"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Box, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const DESIGN_URL = "https://design.northgtasteel.ca/";
const STORAGE_KEY = "design-promo-dismissed";
const DELAY_MS = 8000;

export default function DesignPromo() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY) === "1") return;

    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage may be unavailable (private mode) */
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label="Try our 3D building designer"
          initial={
            reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }
          }
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-xl border border-border bg-background shadow-2xl sm:left-6 sm:bottom-6"
        >
          {/* Accent header */}
          <div className="relative flex items-center gap-2 bg-steel-red px-4 py-3 text-white">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">
              Design It Yourself in 3D
            </span>
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="ml-auto rounded-md p-1 text-white/80 transition hover:bg-white/15 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-4 p-4">
            <p className="text-sm text-muted-foreground">
              Visualize your steel building before you buy. Customize size,
              color, and layout in our free interactive 3D designer.
            </p>

            <div className="flex items-center gap-2">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-steel-red hover:bg-steel-darkred"
              >
                <a href={DESIGN_URL} target="_blank" rel="noopener noreferrer">
                  <Box />
                  Launch 3D Designer
                </a>
              </Button>
              <Button variant="ghost" size="lg" onClick={dismiss}>
                Maybe later
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

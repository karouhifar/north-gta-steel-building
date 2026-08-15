"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  QuoteFormInput,
  quoteFormSchema,
  type QuoteFormValues,
  STEP_FIELDS,
} from "@/lib/schema";
import { STEPS } from "@/data/formConstants";
import { StepBuildingType } from "./steps/StepBuildingType";
import { StepSize } from "./steps/StepSize";
import { StepRoof } from "./steps/StepRoof";
import { StepOpenings } from "./steps/StepOpenings";
import { StepLocation } from "./steps/StepLocation";
import { StepTimeline } from "./steps/StepTimeline";
import { StepContact } from "./steps/StepContact";
import { ProgressBar } from "./ProgressBar";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { useTheme } from "@/hooks/use-theme";

const TOTAL = STEPS.length;

const DEFAULT_VALUES: QuoteFormInput = {
  buildingType: undefined as never,
  width: "" as unknown as number,
  length: "" as unknown as number,
  height: "" as unknown as number,
  roofShape: undefined as never,
  roofPitch: undefined as never,
  roofPanel: undefined as never,
  roofFinish: undefined as never,
  gutters: undefined as never,
  roofColor: "",
  wallColor: "",
  panelGauge: undefined,
  insulationRoof: "",
  insulationWall: "",
  linerPanel: undefined,
  layoutSketch: undefined as never,
  overheadDoors: 0,
  manDoors: 0,
  windows: 0,
  louvers: 0,
  openingNotes: "",
  region: "",
  city: "",
  postalCode: "",
  timeline: undefined as never,
  fullName: "",
  email: "",
  phone: "",
  notes: "",
  smsConsent: false as never,
};

export function QuoteForm() {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const warmedRef = useRef(false);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [token, setToken] = useState("");
  const theme = useTheme();

  const methods = useForm<QuoteFormInput, unknown, QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    mode: "onTouched",
    defaultValues: DEFAULT_VALUES,
  });

  // Warm the route one step early so the connection is open by the time we submit.
  useEffect(() => {
    if (step === TOTAL - 1 && !warmedRef.current) {
      warmedRef.current = true;
      fetch("/api/turnstile", { mode: "no-cors", keepalive: true }).catch(
        () => {},
      );
    }
  }, [step]);

  // Turnstile tokens are single use — always drop the consumed one with the widget.
  const resetTurnstile = useCallback(() => {
    setToken("");
    turnstileRef.current?.reset();
  }, []);

  const next = async () => {
    const valid = await methods.trigger(STEP_FIELDS[step], {
      shouldFocus: true,
    });
    if (!valid) return;
    if (step < TOTAL) {
      setDirection(1);
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const back = () => {
    if (step > 1) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  // Breadcrumb jumps — backwards only, so no step skips its validation gate.
  const goToStep = useCallback(
    (target: number) => {
      if (target < 1 || target >= step) return;
      setDirection(-1);
      setStep(target);
    },
    [step],
  );

  const onSubmit = methods.handleSubmit(async (values) => {
    if (!token) {
      methods.setError("root", {
        message: "Please complete the security check",
      });
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/turnstile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, token }),
      });

      if (!res.ok) {
        resetTurnstile();
        methods.setError("root", {
          message:
            res.status === 403
              ? "Security check failed. Please complete the challenge again."
              : "Something went wrong. Please try again later.",
        });
        return;
      }

      methods.reset(DEFAULT_VALUES);
      resetTurnstile();
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Quote submission failed:", err);
      resetTurnstile();
      methods.setError("root", {
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  });
  const startOver = useCallback(() => {
    methods.reset(DEFAULT_VALUES); // safety — already reset above, but harmless
    setStep(1);
    setDirection(-1);
    setDone(false);
  }, [methods]);

  if (done) {
    return <SuccessScreen onStartOver={startOver} />;
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-full max-w-4xl">
        <ProgressBar currentStep={step} onStepSelect={goToStep} />

        <form onSubmit={onSubmit}>
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {step === 1 && <StepBuildingType />}
                {step === 2 && <StepSize />}
                {step === 3 && <StepRoof />}
                {step === 4 && <StepOpenings />}
                {step === 5 && <StepLocation />}
                {step === 6 && <StepTimeline />}
                {step === TOTAL && (
                  <>
                    <StepContact />
                    <div className="my-5 h-px w-full bg-border" />
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={(token) => setToken(token)}
                      onExpire={() => setToken("")}
                      onError={() => setToken("")}
                      options={{
                        theme: theme,
                        size: "normal",
                        language: "auto",
                        appearance: "always",
                      }}
                    />
                    {methods.formState.errors.root && (
                      <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-destructive">
                        ▲ {methods.formState.errors.root.message}
                      </p>
                    )}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav */}
          <div className="mt-10 flex flex-col-reverse gap-3 border-t-2 border-border pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={back}
              disabled={step === 1 || submitting}
              className="group h-12 rounded-none! border-2 px-5 font-mono text-xs uppercase tracking-[0.2em] hover:border-steel-red hover:bg-transparent hover:text-steel-red disabled:opacity-30"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back
            </Button>

            {step < TOTAL ? (
              <Button
                type="button"
                onClick={next}
                className="group h-12 rounded-none! bg-steel-red px-6 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground hover:bg-steel-darkred"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={submitting}
                className="group h-12 rounded-none! bg-steel-red px-6 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground hover:bg-steel-darkred disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Submit Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

function SuccessScreen({ onStartOver }: { onStartOver: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto flex max-w-2xl flex-col items-center border-2 border-steel-red bg-steel-red/5 p-10 text-center sm:p-16"
    >
      <CheckCircle2 className="h-14 w-14 text-steel-red" strokeWidth={1.5} />
      <h2 className="mt-6 font-clash text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Quote request received
      </h2>
      <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
        Thanks — a North GTA Steel Buildings specialist will be in touch within
        1 business day with your custom quote.
      </p>
      <div className="mt-8 h-0.75 w-12 bg-steel-red" />
      <Button
        type="button"
        onClick={onStartOver}
        variant="outline"
        className="cursor-pointer mt-8 h-12 rounded-none! border-2 px-6 font-mono text-xs uppercase tracking-[0.2em] hover:border-steel-red hover:bg-transparent hover:text-steel-red"
      >
        Submit another quote
      </Button>
    </motion.div>
  );
}

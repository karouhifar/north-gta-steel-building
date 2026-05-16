"use client";

import Link from "next/link";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { StepHeader } from "../StepHeader";
import { QuoteFormValues } from "@/lib/schema";

export function StepContact() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();

  const inputClass = (hasError?: boolean) =>
    cn(
      "h-14 border-2 !rounded-none font-clash text-base focus-visible:border-steel-red focus-visible:ring-0",
      hasError && "border-destructive",
    );

  return (
    <div>
      <StepHeader
        step={5}
        title="Where should we send your quote?"
        subtitle="One of our team will reach out within 1 business day."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <Label
            htmlFor="fullName"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Full name
          </Label>
          <Input
            id="fullName"
            placeholder="Jane Doe"
            className={inputClass(!!errors.fullName)}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-destructive">
              ▲ {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <Label
            htmlFor="email"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            className={inputClass(!!errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-destructive">
              ▲ {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label
            htmlFor="phone"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Phone{" "}
            <span className="normal-case text-muted-foreground/60">
              (optional)
            </span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(416) 555-0199"
            className={inputClass(!!errors.phone)}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-destructive">
              ▲ {errors.phone.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <Label
            htmlFor="notes"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Project notes{" "}
            <span className="normal-case text-muted-foreground/60">
              (optional)
            </span>
          </Label>
          <Textarea
            id="notes"
            rows={4}
            placeholder="Anything else we should know — site access, insulation, doors, deadlines..."
            className={cn(
              "min-h-32 resize-none border-2 rounded-none! font-general text-base focus-visible:border-steel-red focus-visible:ring-0",
              errors.notes && "border-destructive",
            )}
            {...register("notes")}
          />
          {errors.notes && (
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-destructive">
              ▲ {errors.notes.message}
            </p>
          )}
        </div>
      </div>

      {/* SMS consent */}
      <div
        className={cn(
          "mt-8 flex gap-3 border-2 p-5 transition-colors",
          errors.smsConsent
            ? "border-destructive bg-destructive/5"
            : "border-border bg-secondary/50",
        )}
      >
        <Controller
          control={control}
          name="smsConsent"
          render={({ field }) => (
            <Checkbox
              id="smsConsent"
              checked={field.value === true}
              onCheckedChange={(c) => field.onChange(c === true)}
              className={cn(
                "mt-0.5 h-5 w-5 rounded-none! border-2",
                "data-[state=checked]:border-steel-red data-[state=checked]:bg-steel-red",
              )}
            />
          )}
        />
        <Label
          htmlFor="smsConsent"
          className="cursor-pointer text-xs leading-relaxed text-foreground sm:text-sm"
        >
          I agree to receive SMS/text messages from North GTA Steel Buildings
          regarding inquiries, delivery notifications, and promotional offers.
          Msg frequency varies. Msg & data rates may apply. Reply HELP for help,
          STOP to opt out.{" "}
          <Link
            href="https://www.hybrid-steel.com/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative font-semibold text-steel-red underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
        </Label>
      </div>
      {errors.smsConsent && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-destructive">
          ▲ {errors.smsConsent.message}
        </p>
      )}
    </div>
  );
}

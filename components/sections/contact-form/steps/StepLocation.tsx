"use client";

import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { QuoteFormValues } from "@/lib/schema";
import { StepHeader } from "../StepHeader";
import { ONTARIO_REGIONS } from "@/data/formConstants";

export function StepLocation() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();

  const region = watch("region");

  return (
    <div>
      <StepHeader
        step={3}
        title="Where is the project?"
        subtitle="We deliver across Ontario — region helps us plan logistics."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Region */}
        <div className="md:col-span-2">
          <Label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Ontario region
          </Label>
          <Select
            value={region || ""}
            onValueChange={(v) =>
              setValue("region", v, { shouldValidate: true })
            }
          >
            <SelectTrigger
              className={cn(
                "h-14 border-2 bg-background rounded-none! font-clash text-base",
                "focus:border-steel-red focus:ring-0",
                errors.region && "border-destructive",
              )}
            >
              <SelectValue placeholder="Select your region" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {ONTARIO_REGIONS.map((r) => (
                <SelectItem
                  key={r}
                  value={r}
                  className="rounded-none font-general"
                >
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.region && (
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-destructive">
              ▲ {errors.region.message}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <Label
            htmlFor="city"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            City / Town
          </Label>
          <Input
            id="city"
            placeholder="e.g. Barrie"
            className={cn(
              "h-14 border-2 rounded-none! font-clash text-base focus-visible:border-steel-red focus-visible:ring-0",
              errors.city && "border-destructive",
            )}
            {...register("city")}
          />
          {errors.city && (
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-destructive">
              ▲ {errors.city.message}
            </p>
          )}
        </div>

        {/* Postal code */}
        <div>
          <Label
            htmlFor="postalCode"
            className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Postal code{" "}
            <span className="normal-case text-muted-foreground/60">
              (optional)
            </span>
          </Label>
          <Input
            id="postalCode"
            placeholder="e.g. L4N 0A1"
            maxLength={7}
            className={cn(
              "h-14 border-2 rounded-none! font-clash text-base uppercase focus-visible:border-steel-red focus-visible:ring-0",
              errors.postalCode && "border-destructive",
            )}
            {...register("postalCode")}
          />
          {errors.postalCode && (
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-destructive">
              ▲ {errors.postalCode.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

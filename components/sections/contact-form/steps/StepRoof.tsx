"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { QuoteFormValues } from "@/lib/schema";
import {
  GUTTER_OPTIONS,
  LINER_PANEL_OPTIONS,
  PANEL_GAUGE_OPTIONS,
  ROOF_FINISH_OPTIONS,
  ROOF_PANEL_OPTIONS,
  ROOF_PITCH_OPTIONS,
  ROOF_SHAPE_OPTIONS,
} from "@/data/formConstants";
import { StepHeader } from "../StepHeader";
import { ChoiceGroup } from "../ChoiceGroup";
import { FieldError } from "../FieldError";

const textFieldClass = (hasError?: boolean) =>
  cn(
    "h-12 border-2 rounded-none! font-general text-base focus-visible:border-steel-red focus-visible:ring-0",
    hasError && "border-destructive",
  );

export function StepRoof() {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();

  const commit = { shouldValidate: true, shouldDirty: true } as const;

  const roofFinish = watch("roofFinish");

  return (
    <div>
      <StepHeader
        title="How should the roof be built?"
        subtitle="Not sure on the technical bits? Pick “Not sure” — our engineers spec it for you."
      />

      <div className="space-y-7">
        <ChoiceGroup
          label="Roof shape"
          hint="Will this be a gable roof?"
          options={ROOF_SHAPE_OPTIONS}
          value={watch("roofShape")}
          onChange={(value) => setValue("roofShape", value, commit)}
          error={errors.roofShape?.message}
          errorId="roofShape-error"
        />

        <ChoiceGroup
          label="Roof pitch"
          hint="Rise over run — how steep the roof sits."
          options={ROOF_PITCH_OPTIONS}
          value={watch("roofPitch")}
          onChange={(value) => setValue("roofPitch", value, commit)}
          error={errors.roofPitch?.message}
          errorId="roofPitch-error"
        />

        <ChoiceGroup
          label="Roof panels"
          hint="Screw down or standing seam (SSR)?"
          options={ROOF_PANEL_OPTIONS}
          value={watch("roofPanel")}
          onChange={(value) => setValue("roofPanel", value, commit)}
          error={errors.roofPanel?.message}
          errorId="roofPanel-error"
        />

        <ChoiceGroup
          label="Panel finish"
          hint="Galvalume mill finish or a painted colour?"
          options={ROOF_FINISH_OPTIONS}
          value={roofFinish}
          onChange={(value) => setValue("roofFinish", value, commit)}
          error={errors.roofFinish?.message}
          errorId="roofFinish-error"
        />

        <ChoiceGroup
          label="Gutters & downspouts"
          hint="Recommended anywhere water drains toward doors or a driveway."
          options={GUTTER_OPTIONS}
          value={watch("gutters")}
          onChange={(value) => setValue("gutters", value, commit)}
          error={errors.gutters?.message}
          errorId="gutters-error"
        />
      </div>

      {/* Advanced, optional — mirrors the rest of our layout sheet */}
      <Collapsible
        open={advancedOpen}
        onOpenChange={setAdvancedOpen}
        className="mt-8 border-2 border-border"
      >
        <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/50">
          <span className="min-w-0">
            <span className="block font-clash text-base font-semibold uppercase tracking-tight">
              Colours & insulation
            </span>
            <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Optional — skip if you haven&apos;t decided
            </span>
          </span>

          <ChevronDown
            aria-hidden
            className={cn(
              "size-5 shrink-0 text-steel-red transition-transform duration-300",
              advancedOpen && "rotate-180",
            )}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="border-t-2 border-border px-5 py-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <Label
                htmlFor="roofColor"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Roof colour
              </Label>
              <Input
                id="roofColor"
                placeholder={
                  roofFinish === "galvalume" ? "Galvalume" : "e.g. Charcoal"
                }
                aria-invalid={!!errors.roofColor}
                aria-describedby={
                  errors.roofColor ? "roofColor-error" : undefined
                }
                className={textFieldClass(!!errors.roofColor)}
                {...register("roofColor")}
              />
              <FieldError
                id="roofColor-error"
                message={errors.roofColor?.message}
              />
            </div>

            <div>
              <Label
                htmlFor="wallColor"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Wall colour
              </Label>
              <Input
                id="wallColor"
                placeholder="e.g. Light Stone"
                aria-invalid={!!errors.wallColor}
                aria-describedby={
                  errors.wallColor ? "wallColor-error" : undefined
                }
                className={textFieldClass(!!errors.wallColor)}
                {...register("wallColor")}
              />
              <FieldError
                id="wallColor-error"
                message={errors.wallColor?.message}
              />
            </div>

            <div>
              <Label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Panel gauge
              </Label>
              <Select
                value={watch("panelGauge") ?? ""}
                onValueChange={(value) =>
                  setValue(
                    "panelGauge",
                    value as QuoteFormValues["panelGauge"],
                    commit,
                  )
                }
              >
                <SelectTrigger
                  id="panelGauge"
                  className="h-12 w-full border-2 bg-background rounded-none! font-general text-base focus:border-steel-red focus:ring-0"
                >
                  <SelectValue placeholder="Standard 26ga" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {PANEL_GAUGE_OPTIONS.map((gauge) => (
                    <SelectItem
                      key={gauge}
                      value={gauge}
                      className="rounded-none font-general"
                    >
                      {gauge}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Liner panel
              </Label>
              <Select
                value={watch("linerPanel") ?? ""}
                onValueChange={(value) =>
                  setValue(
                    "linerPanel",
                    value as QuoteFormValues["linerPanel"],
                    commit,
                  )
                }
              >
                <SelectTrigger
                  id="linerPanel"
                  className="h-12 w-full border-2 bg-background rounded-none! font-general text-base focus:border-steel-red focus:ring-0"
                >
                  <SelectValue placeholder="Select liner panel" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {LINER_PANEL_OPTIONS.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="rounded-none font-general"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label
                htmlFor="insulationRoof"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Roof insulation
              </Label>
              <Input
                id="insulationRoof"
                placeholder={'e.g. R-20 or 6"'}
                aria-invalid={!!errors.insulationRoof}
                aria-describedby={
                  errors.insulationRoof ? "insulationRoof-error" : undefined
                }
                className={textFieldClass(!!errors.insulationRoof)}
                {...register("insulationRoof")}
              />
              <FieldError
                id="insulationRoof-error"
                message={errors.insulationRoof?.message}
              />
            </div>

            <div>
              <Label
                htmlFor="insulationWall"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Wall insulation
              </Label>
              <Input
                id="insulationWall"
                placeholder={'e.g. R-13 or 4"'}
                aria-invalid={!!errors.insulationWall}
                aria-describedby={
                  errors.insulationWall ? "insulationWall-error" : undefined
                }
                className={textFieldClass(!!errors.insulationWall)}
                {...register("insulationWall")}
              />
              <FieldError
                id="insulationWall-error"
                message={errors.insulationWall?.message}
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

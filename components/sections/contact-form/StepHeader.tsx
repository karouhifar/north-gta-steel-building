import { cn } from "@/lib/utils";

export function StepHeader({
  step,
  title,
  subtitle,
  className,
}: {
  step: number;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 sm:mb-10", className)}>
      <h2 className="mt-4 font-clash text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-5 h-0.75 w-12 bg-steel-red" />
    </div>
  );
}

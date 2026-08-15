import { cn } from "@/lib/utils";

export function FieldError({
  id,
  message,
  className,
}: {
  id?: string;
  message?: string;
  className?: string;
}) {
  if (!message) return null;

  return (
    <p
      id={id}
      role="alert"
      className={cn(
        "mt-1.5 font-mono text-[10px] uppercase tracking-wider text-destructive",
        className,
      )}
    >
      <span aria-hidden>▲</span> {message}
    </p>
  );
}

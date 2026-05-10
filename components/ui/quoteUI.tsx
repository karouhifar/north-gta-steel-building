import { cn } from "@/lib/utils";
import * as React from "react";

export function QuoteUI({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="quote-ui"
      className={cn(
        "relative overflow-hidden bg-steel-red py-24 lg:py-10 scroll-mt-25",
        className,
      )}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.2) 40px, rgba(0,0,0,0.2) 41px)",
          opacity: 1,
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

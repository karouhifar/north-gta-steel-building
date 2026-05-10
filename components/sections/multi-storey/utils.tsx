"use client";

import * as React from "react";

export function SectionLabel({ code, label }: { code: string; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-steel-red">
        [{code}]
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <span className="h-px flex-1 bg-foreground/10" />
    </div>
  );
}

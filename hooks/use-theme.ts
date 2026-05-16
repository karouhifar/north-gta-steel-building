// hooks/use-theme.ts
"use client";

import { useEffect, useState } from "react";

export type ResolvedTheme = "light" | "dark";

export function useTheme(): ResolvedTheme {
  // Start as "light" to keep SSR output stable; the effect corrects it on mount.
  const [theme, setTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const readFromDom = (): ResolvedTheme =>
      document.documentElement.classList.contains("dark") ? "dark" : "light";

    setTheme(readFromDom());

    // The toggler flips the `dark` class on <html> — watch it.
    const observer = new MutationObserver(() => setTheme(readFromDom()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Follow the OS only when no explicit choice is stored (matches the toggler).
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (!localStorage.getItem("theme")) setTheme(readFromDom());
    };
    mql.addEventListener("change", onSystemChange);

    return () => {
      observer.disconnect();
      mql.removeEventListener("change", onSystemChange);
    };
  }, []);

  return theme;
}

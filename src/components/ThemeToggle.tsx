"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={
        "relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-accent/60 " +
        (className ?? "")
      }
    >
      {mounted && (
        <>
          <Sun
            className={`h-4 w-4 transition-all duration-300 ${
              isDark ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0"
            } absolute`}
          />
          <Moon
            className={`h-4 w-4 transition-all duration-300 ${
              isDark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90"
            } absolute`}
          />
        </>
      )}
    </button>
  );
}

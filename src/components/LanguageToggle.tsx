"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      className={
        "flex h-9 items-center gap-1 rounded-full border border-border bg-surface px-2 text-xs font-mono font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 active:scale-90 " +
        (className ?? "")
      }
    >
      <span
        className={`transition-all duration-300 ${
          lang === "id" ? "scale-110 text-accent" : "scale-100 text-muted"
        }`}
      >
        ID
      </span>
      <span className="text-muted">/</span>
      <span
        className={`transition-all duration-300 ${
          lang === "en" ? "scale-110 text-accent" : "scale-100 text-muted"
        }`}
      >
        EN
      </span>
    </button>
  );
}

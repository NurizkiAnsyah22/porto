"use client";

import { Lock } from "lucide-react";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import type { Bi } from "@/lib/dictionaries";
import { RevealOnScroll } from "./RevealOnScroll";

export function PrivateWorkNote({ text, className }: { text: Bi; className?: string }) {
  const t = useT();

  return (
    <RevealOnScroll
      className={
        "flex items-start gap-3 rounded-2xl border border-dashed border-border bg-surface/60 px-4 py-3.5 text-sm text-muted " +
        (className ?? "")
      }
    >
      <Lock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
      <p>{t(text)}</p>
    </RevealOnScroll>
  );
}

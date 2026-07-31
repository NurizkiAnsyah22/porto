"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import { differentiators } from "@/lib/data";
import { RevealOnScroll, StaggerGroup, staggerItem } from "./RevealOnScroll";

export function Differentiators({ className }: { className?: string }) {
  const t = useT();

  return (
    <div className={className}>
      <RevealOnScroll className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-accent transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            {t(common.differentiatorsLabel)}
          </span>
        </div>
        <p className="mb-6 max-w-xl text-sm text-muted">{t(common.differentiatorsDesc)}</p>
      </RevealOnScroll>

      <StaggerGroup className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {differentiators.map((d) => (
          <motion.div
            key={d.title.en}
            variants={staggerItem}
            className="card-hover rounded-2xl border border-border bg-surface p-5"
          >
            <h3 className="text-sm font-semibold">{t(d.title)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t(d.description)}
            </p>
          </motion.div>
        ))}
      </StaggerGroup>
    </div>
  );
}

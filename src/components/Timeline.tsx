"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useT } from "@/lib/language-context";
import { experience } from "@/lib/data";
import { RevealOnScroll } from "./RevealOnScroll";

export function Timeline() {
  const t = useT();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl">
      {/* static base line */}
      <div className="absolute bottom-0 left-[7px] top-2 w-px bg-border sm:left-[9px]" />
      {/* animated progress line, grows as you scroll */}
      <motion.div
        style={{ scaleY: lineScale, transformOrigin: "top" }}
        className="absolute bottom-0 left-[7px] top-2 w-px bg-accent sm:left-[9px]"
      />

      <div className="space-y-10">
        {experience.map((job, i) => (
          <RevealOnScroll key={i} delay={i * 0.05} className="relative pl-8 sm:pl-10">
            <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg sm:h-5 sm:w-5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <span className="font-mono text-xs text-accent">{t(job.period)}</span>
            <h3 className="mt-1 text-lg font-semibold">{t(job.role)}</h3>
            <p className="text-sm text-muted">{t(job.company)}</p>

            <ul className="mt-3 space-y-1.5">
              {job.bullets.map((bullet, bi) => (
                <li key={bi} className="flex gap-2 text-sm leading-relaxed text-ink/80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {t(bullet)}
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

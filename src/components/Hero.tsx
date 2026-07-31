"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Briefcase } from "lucide-react";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import { stats, viraiFeatures } from "@/lib/data";
import { HeroBackground } from "./HeroBackground";
import { RotatingRole } from "./RotatingRole";
import { FeatureCarousel } from "./FeatureCarousel";
import { TextReveal } from "./TextReveal";

export function Hero() {
  const t = useT();

  return (
    <section className="glow-radial relative overflow-hidden px-6 pt-14 sm:px-10 lg:px-16 lg:pt-24">
      <HeroBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            {t(common.liveOnVirai)}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            <Briefcase className="h-3.5 w-3.5" />
            {t(common.openForFreelance)}
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <TextReveal
            as="div"
            text={t(common.heroGreeting)}
            className="block text-muted"
            delay={0.1}
          />
          <TextReveal
            as="div"
            text={t(common.heroName)}
            className="text-gradient animate-gradient-x"
            delay={0.22}
          />
        </h1>

        <div className="mt-3 text-xl font-medium text-ink/80 sm:text-2xl">
          <RotatingRole />
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          <TextReveal text={t(common.heroTagline)} delay={0.4} stagger={0.018} />
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="btn-shine group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            {t(common.startProject)}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 active:scale-95 active:translate-y-0"
          >
            {t(common.viewProjects)}
          </Link>
        </div>

        <div className="mt-10">
          <FeatureCarousel slides={viraiFeatures} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div
            key={s.value}
            className="rounded-2xl border border-border bg-surface/60 px-4 py-5 text-center backdrop-blur-sm card-hover"
          >
            <div className="font-mono text-2xl font-bold text-accent sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-muted">{t(s.label)}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

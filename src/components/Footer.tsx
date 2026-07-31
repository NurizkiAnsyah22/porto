"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import { RevealOnScroll } from "./RevealOnScroll";
import { LiveClock } from "./LiveClock";
import { FooterWordmark } from "./FooterWordmark";

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border">
      <RevealOnScroll className="px-6 py-16 text-center sm:px-10 lg:px-16">
        <h2 className="text-2xl font-bold sm:text-3xl">{t(common.footerCtaTitle)}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          {t(common.footerCtaDesc)}
        </p>
        <Link
          href="/contact"
          className="btn-shine group mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          {t(common.footerCtaButton)}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </RevealOnScroll>
      <div className="border-t border-border px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <FooterWordmark text="Nurizkiansyah" />
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              {t(common.reachOut)}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <LiveClock className="font-mono text-xs tabular-nums text-muted" />
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import { aboutParagraphs } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Differentiators } from "@/components/Differentiators";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  const t = useT();

  return (
    <>
      <section className="px-6 pt-14 sm:px-10 lg:px-16 lg:pt-20">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-12">
          <RevealOnScroll className="mx-auto w-48 sm:w-64 lg:sticky lg:top-24 lg:mx-0 lg:w-full">
            <div className="card-hover relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/profile-photo.jpg"
                alt="Nurizkiansyah"
                fill
                sizes="(min-width: 1024px) 280px, 60vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              {t(common.aboutTitle)}
            </span>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              {t(common.aboutTitle)}
            </h1>

            <div className="mt-6 space-y-4">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {t(p)}
                </p>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <Differentiators className="mx-auto mb-20 mt-14 max-w-4xl" />
      </section>
      <Footer />
    </>
  );
}

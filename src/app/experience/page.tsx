"use client";

import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import { education, certifications } from "@/lib/data";
import { Timeline } from "@/components/Timeline";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Footer } from "@/components/Footer";
import { GraduationCap, Award } from "lucide-react";

export default function ExperiencePage() {
  const t = useT();

  return (
    <>
      <section className="px-6 pt-14 sm:px-10 lg:px-16 lg:pt-20">
        <RevealOnScroll className="mx-auto max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {t(common.careerTimeline)}
          </span>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            {t(common.experienceTitle)}
          </h1>
          <p className="mt-3 max-w-xl text-muted">{t(common.experienceDesc)}</p>
        </RevealOnScroll>

        <div className="mt-14">
          <Timeline />
        </div>

        <RevealOnScroll className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {t(common.educationLabel)}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold">{t(education.degree)}</h3>
          <p className="text-sm text-muted">
            {education.school} · {education.period} · {education.gpa}
          </p>
          <ul className="mt-3 space-y-1.5">
            {education.notes.map((note, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink/80">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                {t(note)}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll className="mx-auto mb-20 mt-8 max-w-3xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {t(common.certificationsLabel)}
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between rounded-xl border border-border bg-surface-2 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium">{cert.name}</p>
                  <p className="text-xs text-muted">{cert.issuer}</p>
                </div>
                <span className="font-mono text-xs text-accent">{cert.year}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>
      <Footer />
    </>
  );
}

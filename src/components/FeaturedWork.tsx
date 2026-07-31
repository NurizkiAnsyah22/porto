"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { PrivateWorkNote } from "./PrivateWorkNote";
import { RevealOnScroll, StaggerGroup } from "./RevealOnScroll";

export function FeaturedWork() {
  const t = useT();
  const flagship = projects.find((p) => p.slug === "virai")!;

  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <RevealOnScroll className="mx-auto max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          {t(common.featuredWork)}
        </span>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          {t(common.featuredWorkDesc)}
        </h2>
      </RevealOnScroll>

      <StaggerGroup className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5">
        <ProjectCard project={flagship} />
      </StaggerGroup>

      <div className="mx-auto mt-6 max-w-5xl">
        <PrivateWorkNote text={common.privateWorkNoteShort} />
      </div>

      <div className="mx-auto mt-6 max-w-5xl">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
        >
          {t(common.allProjects)}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </section>
  );
}

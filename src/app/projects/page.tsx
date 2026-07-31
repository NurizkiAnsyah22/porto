"use client";

import { useT } from "@/lib/language-context";
import { common, nav } from "@/lib/dictionaries";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { PrivateWorkNote } from "@/components/PrivateWorkNote";
import { RevealOnScroll, StaggerGroup } from "@/components/RevealOnScroll";
import { Footer } from "@/components/Footer";

export default function ProjectsPage() {
  const t = useT();

  return (
    <>
      <section className="px-6 pt-14 sm:px-10 lg:px-16 lg:pt-20">
        <RevealOnScroll className="mx-auto max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {t(nav.projects)}
          </span>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            {t(common.allProjects)}
          </h1>
          <p className="mt-3 max-w-xl text-muted">{t(common.allProjectsDesc)}</p>
        </RevealOnScroll>

        <PrivateWorkNote text={common.privateWorkNote} className="mx-auto mt-6 max-w-3xl" />

        <StaggerGroup className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 pb-20 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerGroup>
      </section>
      <Footer />
    </>
  );
}

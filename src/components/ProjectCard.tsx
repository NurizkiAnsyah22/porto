"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import type { Project } from "@/lib/data";
import { staggerItem } from "./RevealOnScroll";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function ProjectCard({ project }: { project: Project }) {
  const t = useT();
  const isLarge = project.size === "large";
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 240,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), {
    stiffness: 240,
    damping: 24,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div
      className={isLarge ? "sm:col-span-2 lg:col-span-2" : ""}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        variants={staggerItem}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8"
      >
      <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-xl">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes={isLarge ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 400px, 100vw"}
            className="scale-100 object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <ImagePlaceholder
            label={common.previewComingSoon}
            className="h-full w-full scale-100 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        )}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
          <span className="flex h-10 w-10 -translate-y-1 items-center justify-center rounded-full bg-accent text-accent-ink opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-xs uppercase tracking-wide text-muted">
          {t(project.category)}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
            project.status === "live"
              ? "bg-accent/15 text-accent"
              : "bg-surface-2 text-muted"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              project.status === "live" ? "bg-accent animate-pulse" : "bg-muted"
            }`}
          />
          {project.status === "live" ? t(common.live) : t(common.internal)}
        </span>
      </div>

      <h3 className={`font-semibold ${isLarge ? "text-2xl sm:text-3xl" : "text-lg"}`}>
        {project.name}
      </h3>
      <p className="mt-1 text-xs text-muted">{t(project.role)}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {t(project.description)}
      </p>

      {isLarge && project.highlights.length > 0 && (
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink/80">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {t(h)}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent active:scale-95 active:translate-y-0"
            >
              {link.label.id.toLowerCase().includes("github") ? (
                <Github className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:scale-110" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              )}
              {t(link.label)}
            </a>
          ))}
        </div>
      )}
      </motion.div>
    </div>
  );
}

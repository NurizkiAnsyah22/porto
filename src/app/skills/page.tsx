"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, ShieldCheck } from "lucide-react";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import { skillGroups } from "@/lib/data";
import { techIcons } from "@/lib/tech-icons";
import { RevealOnScroll, StaggerGroup, staggerItem } from "@/components/RevealOnScroll";
import { Footer } from "@/components/Footer";

const groupIcons: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Infrastructure: Cloud,
  "Enterprise Security": ShieldCheck,
};

export default function SkillsPage() {
  const t = useT();

  return (
    <>
      <section className="px-6 pt-14 sm:px-10 lg:px-16 lg:pt-20">
        <RevealOnScroll className="mx-auto max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {t(common.skillsTitle)}
          </span>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            {t(common.skillsTitle)}
          </h1>
          <p className="mt-3 max-w-xl text-muted">{t(common.skillsDesc)}</p>
        </RevealOnScroll>

        <StaggerGroup className="mx-auto mb-20 mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = groupIcons[group.title.en] ?? Code2;
            const isSecurity = group.title.en === "Enterprise Security";
            return (
              <motion.div
                key={group.title.en}
                variants={staggerItem}
                className={`card-hover rounded-2xl border border-border bg-surface p-6 ${
                  isSecurity ? "sm:col-span-2 lg:col-span-1 opacity-90" : ""
                }`}
              >
                <div className="mb-5 flex items-center gap-2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg bg-surface-2 ${
                      isSecurity ? "text-muted" : "text-accent"
                    }`}
                  >
                    <GroupIcon className="h-4 w-4" />
                  </span>
                  <h3
                    className={`font-mono text-sm font-semibold uppercase tracking-wide ${
                      isSecurity ? "text-muted" : "text-accent"
                    }`}
                  >
                    {t(group.title)}
                    {isSecurity && (
                      <span className="ml-2 normal-case tracking-normal text-[10px] text-muted/70">
                      </span>
                    )}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {group.items.map((item, i) => {
                    const entry = techIcons[item];
                    const Icon = entry?.Icon;
                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.04 }}
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-2.5 py-2 transition-colors hover:border-accent/50"
                      >
                        {Icon ? (
                          <Icon
                            className="h-4 w-4 shrink-0"
                            style={{ color: entry.color }}
                          />
                        ) : (
                          <span className="h-4 w-4 shrink-0 rounded-full bg-accent/40" />
                        )}
                        <span className="truncate text-xs text-ink/80">{item}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </section>
      <Footer />
    </>
  );
}

"use client";

import { Bot, MessageSquare, LayoutDashboard, ShoppingCart, Code2, Workflow } from "lucide-react";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import { services } from "@/lib/data";
import { RevealOnScroll, StaggerGroup, staggerItem } from "./RevealOnScroll";
import { motion } from "framer-motion";

const iconMap: Record<string, typeof Bot> = {
  bot: Bot,
  message: MessageSquare,
  dashboard: LayoutDashboard,
  cart: ShoppingCart,
  code: Code2,
  workflow: Workflow,
};

export function WhatIBuild() {
  const t = useT();

  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <RevealOnScroll className="mx-auto max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          {t(common.whatIBuildLabel)}
        </span>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{t(common.whatIBuildTitle)}</h2>
        <p className="mt-3 max-w-xl text-muted">{t(common.whatIBuildDesc)}</p>
      </RevealOnScroll>

      <StaggerGroup className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Code2;
          return (
            <motion.div
              key={service.icon}
              variants={staggerItem}
              className="card-hover group rounded-2xl border border-border bg-surface p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{t(service.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t(service.description)}
              </p>
            </motion.div>
          );
        })}
      </StaggerGroup>
    </section>
  );
}

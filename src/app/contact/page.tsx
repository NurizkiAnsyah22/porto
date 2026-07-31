"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useT, useLanguage } from "@/lib/language-context";
import { common, projectTypeOptions } from "@/lib/dictionaries";
import { links } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const t = useT();
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const typeLine = projectType ? `\nProject type: ${projectType}` : "";
    const body = encodeURIComponent(`${message}${typeLine}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="px-6 pt-14 sm:px-10 lg:px-16 lg:pt-20">
        <RevealOnScroll className="mx-auto max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {t(common.contactTitle)}
          </span>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            {t(common.contactTitle)}
          </h1>
          <p className="mt-3 text-muted">{t(common.contactDesc)}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${links.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 active:scale-95 active:translate-y-0"
            >
              <Mail className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110" />
              {links.email}
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 active:scale-95 active:translate-y-0"
            >
              <Linkedin className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110" />
              LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 active:scale-95 active:translate-y-0"
            >
              <Github className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110" />
              GitHub
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="card-hover mt-10 space-y-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                {t(common.yourName)}
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                {t(common.yourEmail)}
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                {t(common.projectTypeLabel)}
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
              >
                <option value="">{t(common.projectTypePlaceholder)}</option>
                {projectTypeOptions.map((opt) => (
                  <option key={opt.en} value={opt[lang]}>
                    {opt[lang]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted">
                {t(common.message)}
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                placeholder="..."
              />
            </div>
            <button
              type="submit"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {t(common.send)}
            </button>
            <p className="text-xs text-muted">{t(common.mailtoFallback)}</p>
          </form>
        </RevealOnScroll>
      </section>
      <Footer />
    </>
  );
}

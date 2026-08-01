"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  FolderGit2,
  Briefcase,
  Wrench,
  User,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { useT, useLanguage } from "@/lib/language-context";
import { nav, navTypewriterWords } from "@/lib/dictionaries";
import { links } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Typewriter } from "./Typewriter";

const items = [
  { href: "/", key: nav.home, icon: Home },
  { href: "/projects", key: nav.projects, icon: FolderGit2 },
  { href: "/experience", key: nav.experience, icon: Briefcase },
  { href: "/skills", key: nav.skills, icon: Wrench },
  { href: "/about", key: nav.about, icon: User },
  { href: "/contact", key: nav.contact, icon: Mail },
];

export function Nav() {
  const pathname = usePathname();
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col justify-between border-r border-border bg-surface/70 backdrop-blur-xl px-4 py-6 lg:flex">
        <div>
          <Link href="/" className="mb-8 flex items-center gap-3 px-2">
            <span className="relative h-9 w-9 shrink-0 transition-transform duration-300 hover:scale-110">
              <Image src="/logo.webp" alt="Nurizkiansyah" fill sizes="36px" className="object-contain" priority />
            </span>
            <span>
              <span className="block text-sm font-semibold">Nurizkiansyah</span>
              <Typewriter
                words={navTypewriterWords[lang]}
                className="block text-xs text-muted font-mono"
              />
            </span>
          </Link>

          <nav className="flex flex-col gap-1">
            {items.map(({ href, key, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-200 ${
                    active ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-xl bg-surface-2"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute inset-0 scale-95 rounded-xl bg-surface-2/0 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:bg-surface-2/70 group-hover:opacity-100" />
                  )}
                  <Icon
                    className={`relative z-10 h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 ${
                      active ? "text-accent" : "group-hover:text-accent"
                    }`}
                  />
                  <span className="relative z-10">{t(key)}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-4 px-2">
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <div className="flex items-center gap-3 text-muted">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-accent"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${links.email}`}
              className="transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <p className="text-[11px] text-muted">&copy; {new Date().getFullYear()} Nurizkiansyah</p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-surface/80 px-4 py-3 backdrop-blur-xl lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <span className="relative h-8 w-8 shrink-0">
            <Image src="/logo.webp" alt="Nurizkiansyah" fill sizes="32px" className="object-contain" priority />
          </span>
          <span className="text-sm font-semibold">Nurizkiansyah</span>
        </Link>
        <div className="flex items-center gap-2.5">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-accent"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-border bg-surface/90 px-2 py-2 backdrop-blur-xl lg:hidden">
        {items.map(({ href, key, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 text-[10px] ${
                active ? "text-accent" : "text-muted"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="nav-active-pill-mobile"
                  className="absolute inset-0 rounded-lg bg-accent/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon
                className={`relative z-10 h-5 w-5 transition-transform duration-300 ${
                  active ? "scale-110" : ""
                }`}
              />
              <span className="relative z-10">{t(key)}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

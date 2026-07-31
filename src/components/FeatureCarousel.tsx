"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon, Maximize2 } from "lucide-react";
import { useT } from "@/lib/language-context";
import { common } from "@/lib/dictionaries";
import type { Bi } from "@/lib/dictionaries";
import { Lightbox } from "./Lightbox";

type Slide = { title: Bi; description: Bi; image?: string };

export function FeatureCarousel({
  slides,
  interval = 4200,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const t = useT();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (paused || lightboxOpen) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [paused, lightboxOpen, interval, slides.length]);

  const go = (next: number) => {
    setDirection(next > index || (index === slides.length - 1 && next === 0) ? 1 : -1);
    setIndex(((next % slides.length) + slides.length) % slides.length);
  };

  const slide = slides[index];

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="mb-3 text-center font-mono text-xs uppercase tracking-widest text-muted sm:text-left">
        {t(common.viraiShowcaseLabel)}
      </p>

      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-border bg-black">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.button
            type="button"
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => slide.image && setLightboxOpen(true)}
            aria-label="Open image detail"
            className={`absolute inset-0 block w-full text-left ${
              slide.image ? "cursor-zoom-in" : ""
            }`}
          >
            {slide.image ? (
              <Image
                src={slide.image}
                alt={t(slide.title)}
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover object-top"
                priority={index === 0}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                <ImageIcon className="h-7 w-7 text-zinc-600" />
              </div>
            )}

            {slide.image && (
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur">
                <Maximize2 className="h-3.5 w-3.5" />
              </span>
            )}

            {/* Desktop/tablet: caption as gradient overlay on the image */}
            <div className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-5 pt-10 sm:block">
              <h3 className="text-lg font-semibold text-white">{t(slide.title)}</h3>
              <p className="mt-1 max-w-lg text-sm text-zinc-300">
                {t(slide.description)}
              </p>
            </div>
          </motion.button>
        </AnimatePresence>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur transition-colors hover:text-accent"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur transition-colors hover:text-accent"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Mobile: caption sits below the image instead of overlapping it */}
      <div className="mt-3 min-h-[3.5rem] sm:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-ink">{t(slide.title)}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              {t(slide.description)}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-accent" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>

      <Lightbox
        src={slide.image ?? null}
        alt={t(slide.title)}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

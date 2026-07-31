"use client";

import { useRef } from "react";

export function FooterWordmark({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - 120;
    const y = e.clientY - rect.top - 120;
    ref.current?.style.setProperty("--wm-x", `${x}px`);
    ref.current?.style.setProperty("--wm-y", `${y}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="wordmark relative inline-block select-none text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl"
    >
      <span className="wordmark-base">{text}</span>
      <span aria-hidden className="wordmark-glow">
        {text}
      </span>
    </div>
  );
}

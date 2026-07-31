"use client";

import { useEffect, useRef } from "react";

export function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", `${x}%`);
      el.style.setProperty("--spot-y", `${y}%`);

      // Drive the shared mouse-parallax tilt (-1..1) read by AuroraMesh/AnimatedGrid
      const tiltX = (x / 100) * 2 - 1;
      const tiltY = (y / 100) * 2 - 1;
      parent.style.setProperty("--tilt-x", tiltX.toFixed(3));
      parent.style.setProperty("--tilt-y", tiltY.toFixed(3));
    };

    const handleLeave = () => {
      parent.style.setProperty("--tilt-x", "0");
      parent.style.setProperty("--tilt-y", "0");
    };

    parent.addEventListener("mousemove", handleMove);
    parent.addEventListener("mouseleave", handleLeave);
    return () => {
      parent.removeEventListener("mousemove", handleMove);
      parent.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="spotlight-cursor pointer-events-none absolute inset-0 hidden lg:block"
    />
  );
}

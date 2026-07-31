"use client";

import { AnimatedGrid } from "./AnimatedGrid";
import { AuroraMesh } from "./AuroraMesh";
import { FloatingParticles } from "./FloatingParticles";
import { SpotlightCursor } from "./SpotlightCursor";
import { NoiseOverlay } from "./NoiseOverlay";

export function HeroBackground() {
  return (
    <>
      <AnimatedGrid />
      <AuroraMesh />
      <FloatingParticles />
      <SpotlightCursor />
      <NoiseOverlay />
    </>
  );
}

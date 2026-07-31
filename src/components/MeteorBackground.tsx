"use client";

import { useEffect, useState } from "react";

type Meteor = {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
};

export function MeteorBackground({ number = 18 }: { number?: number }) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: number }).map((_, i) => ({
        id: i,
        left: Math.floor(Math.random() * 100),
        top: Math.floor(Math.random() * 40),
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 4,
      }))
    );
  }, [number]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor absolute h-0.5 w-0.5 rounded-full bg-accent"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

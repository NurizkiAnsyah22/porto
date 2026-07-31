"use client";

export function AnimatedGrid() {
  return (
    <div
      aria-hidden
      className="parallax-layer pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        transform:
          "translate3d(calc(var(--tilt-x, 0) * 8px), calc(var(--tilt-y, 0) * 8px), 0)",
      }}
    >
      <div className="bg-grid absolute inset-0" />
    </div>
  );
}

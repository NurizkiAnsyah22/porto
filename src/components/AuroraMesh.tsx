"use client";

export function AuroraMesh() {
  return (
    <div
      aria-hidden
      className="parallax-layer pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        transform:
          "translate3d(calc(var(--tilt-x, 0) * 18px), calc(var(--tilt-y, 0) * 18px), 0)",
      }}
    >
      <div className="aurora-mesh-blob aurora-mesh-1 absolute left-[6%] top-[-6rem] h-80 w-80 rounded-full bg-accent/25 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div className="aurora-mesh-blob aurora-mesh-2 absolute right-[4%] top-[1rem] h-72 w-72 rounded-full bg-sky-400/15 blur-3xl sm:h-96 sm:w-96" />
      <div className="aurora-mesh-blob aurora-mesh-3 absolute bottom-[-4rem] left-[26%] h-64 w-64 rounded-full bg-violet-400/12 blur-3xl sm:h-80 sm:w-80" />
      <div className="aurora-mesh-blob aurora-mesh-4 absolute bottom-[8%] right-[20%] h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl sm:h-72 sm:w-72" />
    </div>
  );
}

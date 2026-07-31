"use client";

export function AuroraBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora-blob aurora-blob-1 absolute h-72 w-72 rounded-full bg-accent/25 blur-3xl sm:h-96 sm:w-96" />
      <div className="aurora-blob aurora-blob-2 absolute h-64 w-64 rounded-full bg-sky-400/15 blur-3xl sm:h-80 sm:w-80" />
      <div className="aurora-blob aurora-blob-3 absolute h-56 w-56 rounded-full bg-violet-400/10 blur-3xl sm:h-72 sm:w-72" />
    </div>
  );
}

"use client";

import { ImageIcon } from "lucide-react";
import { useT } from "@/lib/language-context";
import type { Bi } from "@/lib/dictionaries";

export function ImagePlaceholder({
  label,
  className,
}: {
  label?: Bi;
  className?: string;
}) {
  const t = useT();
  return (
    <div
      className={
        "flex items-center justify-center overflow-hidden rounded-xl border border-border bg-black " +
        (className ?? "aspect-video w-full")
      }
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center text-zinc-500">
        <ImageIcon className="h-6 w-6" />
        {label && <span className="text-[11px] font-mono">{t(label)}</span>}
      </div>
    </div>
  );
}

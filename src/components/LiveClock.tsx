"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function LiveClock({ className }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    // Avoid an SSR/client mismatch — the visitor's local time is unknown on the server.
    return <span className={className}>&nbsp;</span>;
  }

  const locale = lang === "id" ? "id-ID" : "en-US";
  const dateStr = now.toLocaleDateString(locale, {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: lang !== "id",
  });

  return (
    <span className={className}>
      {dateStr} · {timeStr}
    </span>
  );
}

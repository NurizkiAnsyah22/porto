"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useT } from "@/lib/language-context";
import { rotatingRoles } from "@/lib/dictionaries";

export function RotatingRole({ className }: { className?: string }) {
  const t = useT();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingRoles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.4em] w-full overflow-hidden align-top">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute left-0 top-0 block ${className ?? ""}`}
        >
          {t(rotatingRoles[index])}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

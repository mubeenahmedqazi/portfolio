"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Loader() {
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[#05070d]"
        >
          <div className="flex flex-col items-center gap-3">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MUBEEN AHMED
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400"
            >
              Full-Stack &amp; AI/ML Engineer
            </motion.span>
          </div>
          <div className="relative h-1 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, #6e5af0, #2dd4bf)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

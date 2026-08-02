"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => scrollTo(0)}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="glass fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white shadow-lg shadow-black/40 transition-colors hover:border-brand-primary/60 hover:text-brand-primary"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

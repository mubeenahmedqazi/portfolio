"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function CursorSpotlight() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const mql = window.matchMedia("(pointer: fine)");
    setEnabled(mql.matches);

    if (!mql.matches) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReducedMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-40 h-105 w-105 rounded-full mix-blend-screen"
      style={{
        left: springX,
        top: springY,
        marginLeft: -210,
        marginTop: -210,
        background:
          "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(255,255,255,0.08) 35%, transparent 70%)",
      }}
    />
  );
}

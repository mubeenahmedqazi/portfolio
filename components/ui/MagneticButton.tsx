"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  download?: boolean;
  target?: string;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  download,
  target,
  className = "",
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const spawnRipple = (e: MouseEvent<HTMLSpanElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 select-none";
  const styles =
    variant === "primary"
      ? "text-slate-900 bg-gradient-to-r from-brand-primary to-brand-accent shadow-lg shadow-brand-primary/20 hover:shadow-2xl hover:shadow-brand-accent/25"
      : "text-white border border-white/20 bg-white/5 hover:border-brand-primary/50 hover:bg-white/10";

  const content = (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={spawnRipple}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.03 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ opacity: 0.5, scale: 0 }}
          animate={{ opacity: 0, scale: 4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute h-4 w-4 rounded-full bg-white/40"
          style={{ left: r.x - 8, top: r.y - 8 }}
        />
      ))}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className="inline-block">
      {content}
    </button>
  );
}

"use client";

import { useReducedMotion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className = "" }: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0d1117] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0d1117] to-transparent" />
      <div className={`flex w-max gap-4 ${prefersReducedMotion ? "" : "animate-marquee"}`}>
        {loop.map((item, i) => (
          <span
            key={i}
            className="glass whitespace-nowrap rounded-full border border-white/10 px-5 py-2 text-sm text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

export default function BackgroundAurora() {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const generated = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 6,
    }));
    setParticles(generated);
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-[0.03]" />
      <div className="noise-overlay absolute inset-0" />

      <div className="absolute -top-40 left-[10%] h-128 w-128 animate-aurora rounded-full bg-brand-primary/25 blur-[120px]" />
      <div className="absolute top-1/3 right-[5%] h-112 w-112 animate-blob rounded-full bg-brand-accent/20 blur-[120px]" />
      <div className="absolute bottom-0 left-[30%] h-104 w-104 animate-aurora rounded-full bg-brand-primary/10 blur-[130px]" />

      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-float rounded-full bg-white/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

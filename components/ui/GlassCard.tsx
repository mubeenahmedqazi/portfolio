"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode, type MouseEvent } from "react";
import { useTilt } from "@/hooks/useTilt";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  spotlight?: boolean;
  gradientBorder?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  tilt = false,
  spotlight = false,
  gradientBorder = true,
  glow = false,
}: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const tiltEnabled = tilt && !prefersReducedMotion;
  const {
    ref,
    rotateX,
    rotateY,
    onMouseMove: onTiltMove,
    onMouseLeave: onTiltLeave,
  } = useTilt({ max: 7, disabled: !tiltEnabled });
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (tiltEnabled) onTiltMove(e);
    if (spotlight && !prefersReducedMotion) {
      const rect = e.currentTarget.getBoundingClientRect();
      setSpot({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
        active: true,
      });
    }
  };

  const handleMouseLeave = () => {
    if (tiltEnabled) onTiltLeave();
    if (spotlight) setSpot((s) => ({ ...s, active: false }));
  };

  return (
    <motion.div
      ref={tiltEnabled ? ref : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        tiltEnabled
          ? { rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }
          : undefined
      }
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] backdrop-blur-xl transition-colors duration-300 hover:border-white/20 ${
        gradientBorder ? "gradient-border" : ""
      } ${glow ? "hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]" : ""} ${className}`}
    >
      {spotlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            opacity: spot.active ? 1 : 0,
            background: `radial-gradient(500px circle at ${spot.x}% ${spot.y}%, rgba(34,211,238,0.12), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

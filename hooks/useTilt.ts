"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";

interface UseTiltOptions {
  max?: number;
  disabled?: boolean;
}

interface UseTiltResult {
  ref: React.RefObject<HTMLDivElement | null>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

export function useTilt({ max = 8, disabled = false }: UseTiltOptions = {}): UseTiltResult {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 250, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

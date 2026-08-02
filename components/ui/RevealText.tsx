"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  stagger?: number;
  once?: boolean;
}

export default function RevealText({ text, className = "", stagger = 0.03, once = true }: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };
  const child = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.6 }}
      aria-label={text}
    >
      {letters.map((char, i) => (
        // Plain inline (not inline-block) so the ancestor's background-clip:text
        // gradient still masks through to each letter span.
        <motion.span key={i} variants={child} aria-hidden="true">
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

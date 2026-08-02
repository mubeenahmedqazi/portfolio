"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({ kicker, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "text-left"}`}
    >
      {kicker && (
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
          {kicker}
        </span>
      )}
      <h2 className="section-title" style={align === "left" ? { textAlign: "left" } : undefined}>
        {title}
      </h2>
      {subtitle && <p className="sub-text mt-4">{subtitle}</p>}
    </motion.div>
  );
}

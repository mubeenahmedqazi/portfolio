"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { visionFocusAreas, visionPillars, visionText } from "@/lib/data";

export default function Vision() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <GlassCard tilt glow className="h-full p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 text-brand-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold text-white md:text-3xl">Vision</h3>
        </div>

        <p className="leading-relaxed text-gray-300">{visionText}</p>

        <div className="mt-6 space-y-4">
          {visionPillars.map((pillar) => (
            <div key={pillar.title} className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
              <div>
                <p className="font-medium text-white">{pillar.title}</p>
                <p className="mt-1 text-sm text-gray-400">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="mb-3 text-sm text-gray-400">FOCUS AREAS</p>
          <div className="flex flex-wrap gap-2">
            {visionFocusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

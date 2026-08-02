"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Vision from "./Vision";
import { aboutKeyPoints, aboutText, coreTech, currentFocus, stats } from "@/lib/data";

const dotColors = ["#22d3ee", "#ffffff", "#22d3ee", "#ffffff"];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading kicker="Get to know me" title="About Me" />

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <GlassCard tilt glow className="h-full p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 text-brand-primary">
                <UserRound className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">Who I Am</h3>
            </div>

            <p className="leading-relaxed text-gray-300">{aboutText}</p>

            <div className="mt-6 space-y-3">
              {aboutKeyPoints.map((point, i) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full" style={{ background: dotColors[i % dotColors.length] }} />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="mb-3 text-sm text-gray-400">CORE TECHNOLOGIES</p>
              <div className="flex flex-wrap gap-2">
                {coreTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="mb-2 text-sm text-gray-400">CURRENT FOCUS</p>
              <p className="text-white">{currentFocus}</p>
            </div>
          </GlassCard>
        </motion.div>

        <Vision />
      </div>

      <div className="mt-10 grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <GlassCard key={stat.label} className="px-4 py-6 text-center" gradientBorder={false}>
            <div className="text-3xl font-extrabold text-gradient md:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm">{stat.label}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

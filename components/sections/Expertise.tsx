"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Database, Server, Terminal, Wrench } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBar from "@/components/ui/SkillBar";
import Marquee from "@/components/ui/Marquee";
import { marqueeTech, skillCategories, type SkillCategory } from "@/lib/data";

const iconMap: Record<SkillCategory["icon"], typeof Code2> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  ai: BrainCircuit,
  code: Terminal,
  tools: Wrench,
};

export default function Expertise() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Skill Dashboard"
        title={
          <>
            Skills &amp; <span className="text-gray-400">Expertise</span>
          </>
        }
        subtitle="Full-stack development, AI/ML, and comprehensive technical capabilities"
      />

      <Marquee items={marqueeTech} className="mb-12" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon];
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            >
              <GlassCard glow className="h-full p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-white">{cat.category}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <SkillBar key={skill.name} skill={skill} index={si} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

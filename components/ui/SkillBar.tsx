"use client";

import { motion } from "framer-motion";
import { tierWidth, type Skill } from "@/lib/data";

export default function SkillBar({ skill, index = 0 }: { skill: Skill; index?: number }) {
  const width = tierWidth[skill.tier];

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-200">{skill.name}</span>
        <span className="text-[10px] uppercase tracking-wide text-gray-500">{skill.tier}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-brand-primary to-brand-accent"
        />
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Recognition"
        title="Certificates"
        subtitle="A growing collection — real credentials coming soon"
      />

      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={`${cert.title}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="w-72 flex-shrink-0 snap-center"
          >
            <GlassCard glow className="flex h-full flex-col items-center gap-4 p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 text-brand-primary">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-white">{cert.title}</h3>
              <p className="text-sm text-gray-400">
                {cert.issuer} • {cert.year}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { educationData } from "@/lib/data";

function EducationLogo({
  logo,
  logoInitial,
  institution,
}: {
  logo: string;
  logoInitial: string;
  institution: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative flex h-16 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white p-2">
      {!errored ? (
        <Image
          src={logo}
          alt={`${institution} logo`}
          fill
          className="object-contain p-1"
          sizes="96px"
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="text-xl font-bold text-gray-700">{logoInitial}</span>
      )}
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading kicker="Academic Journey" title="Education" />

      <div className="relative grid gap-6 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-[4.5rem] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <GlassCard tilt glow className="h-full p-6">
              <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                {edu.level}
              </span>

              <div className="mb-5 flex items-center gap-4">
                <EducationLogo logo={edu.logo} logoInitial={edu.logoInitial} institution={edu.institution} />
                <div>
                  <h3 className="text-base font-bold leading-tight text-white">{edu.institution}</h3>
                  <p className="mt-1 text-sm text-gray-400">{edu.degree}</p>
                </div>
              </div>

              <div className="mb-5 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="h-4 w-4 flex-shrink-0 text-gray-500" />
                  {edu.duration}
                  {edu.status && (
                    <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-gray-300">{edu.status}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-gray-500" />
                  {edu.location}
                </div>
              </div>

              <p className="mb-2 text-xs text-gray-500">KEY POINTS</p>
              <ul className="space-y-2">
                {edu.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

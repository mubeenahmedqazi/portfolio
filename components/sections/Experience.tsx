"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { experienceData } from "@/lib/data";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !lineRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="experience" ref={sectionRef} className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Career Path"
        title="Experience"
        subtitle="Industrial training, professional roles, and self-directed projects"
      />

      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        <div
          ref={lineRef}
          className="absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-brand-primary to-brand-accent md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-10">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <span className="absolute left-6 top-1.5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[#05070d] bg-brand-primary shadow-[0_0_12px_2px_rgba(110,90,240,0.6)] md:left-1/2" />

              <div className={`w-full pl-14 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <GlassCard tilt glow className="p-6">
                  <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <span className="inline-block w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                          {exp.type}
                        </span>
                      </div>
                      <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                        {exp.company && <span className="font-medium">{exp.company}</span>}
                        {exp.company && <span className="text-gray-600">•</span>}
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Calendar className="h-3.5 w-3.5 text-gray-500" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-gray-300">{exp.description}</p>

                  <p className="mb-2 text-xs text-gray-500">KEY RESPONSIBILITIES</p>
                  <ul className="mb-4 space-y-1.5">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-500" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

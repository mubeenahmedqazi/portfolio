"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="block h-full"
    >
      <GlassCard tilt spotlight glow className="flex h-full flex-col overflow-hidden p-0">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{project.desc}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
            View Live Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </div>
      </GlassCard>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Portfolio"
        title={
          <>
            My <span className="text-gray-400">Projects</span>
          </>
        }
        subtitle="Live demos available — click any card to explore"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

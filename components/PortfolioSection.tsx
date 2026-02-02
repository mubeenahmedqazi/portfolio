"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "CAR-BIKE MARKETPLACE",
    desc: "Peer-to-peer learning & skill exchange platform with real-time collaboration.",
    tech: ["Next.js 14", "TypeScript", "Socket.io", "Tailwind"],
    image: "/carbike.png",
    link: "https://car-bike-marketplace.vercel.app/",
  },
  {
    title: "Rimsha Lab",
    desc: "Comprehensive patient management with reports, appointments, and lab workflow automation.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: "/rimshalabfrontend.png",
    link: "https://rimsha-lab-frontend.vercel.app/",
  },
  {
    title: "Prescripto",
    desc: "Advanced analytics dashboard with real-time metrics and admin management tools.",
    tech: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
    image: "/prescriptofrontend.png",
    link: "https://prescripto-xi-eosin.vercel.app/",
  },
  {
    title: "Rimsha Lab Admin",
    desc: "Full-stack e-commerce solution with shopping cart, payments, and admin panel.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/rimshalabadmin.png",
    link: "https://rimsha-lab-admin.vercel.app/login",
  },
  {
    title: "Prescripto Admin",
    desc: "AI-powered content creation tool with templates and export functionality.",
    tech: ["React", "OpenAI API", "Node.js", "Express"],
    image: "/prescriptoadmin.png",
    link: "https://prescripto-vr29.vercel.app/",
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="relative group cursor-pointer"
      onClick={() => window.open(project.link, '_blank')}
    >
      {/* Clickable Card Container */}
      <div className="relative h-full rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-xl">
        {/* Click Overlay for entire card */}
        <div className="absolute inset-0 z-20 cursor-pointer" />

        {/* Project image - FULL IMAGE SHOWING (no gradient overlay) */}
        <div className="h-64 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Light overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-white" />
          
          {/* Click indicator */}
          <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <span className="text-white text-sm">↗</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          
          <p className="text-gray-400 text-sm mb-5 leading-relaxed">
            {project.desc}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 transition-colors group-hover:border-white/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Project Link */}
          <div className="inline-flex items-center gap-2 text-white text-sm">
            <span className="font-medium">View Live Project</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>

        {/* Border glow effect */}
        <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors duration-300 rounded-2xl pointer-events-none" />
      </div>

      {/* Shadow effect */}
      <div className="absolute -bottom-3 left-2 right-2 h-3 bg-gradient-to-t from-black/40 to-transparent opacity-20 blur-sm rounded-full" />
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] bg-[size:50px_50px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MY<span className="text-gray-400"> </span>PROJECTS
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
             Live demo Available
          </p>
        </motion.div>

        {/* Projects grid - 3 PER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* 3-in-a-row visual indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          
          
          
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
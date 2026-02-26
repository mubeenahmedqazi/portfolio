"use client";

import { motion } from "framer-motion";

const ExperienceData = [
  {
    role: "Next.js Developer Intern",
    company: "Developers INN",
    duration: "June 2025 - August 2025",
    type: "Industrial Training",
    location: "Lahore, Pakistan",
    logo: "/logos/developers-inn-logo.png",
    description: "Gained industrial experience on real-time projects using modern web technologies.",
    responsibilities: [
      "Developed and maintained Next.js applications for enterprise clients",
      "Collaborated with senior developers on full-stack solutions",
      "Implemented responsive UI components with Tailwind CSS",
      "Integrated REST APIs and third-party services",
      "Participated in Agile development processes and code reviews"
    ],
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Node.js", "Git"]
  },
  {
    role: "IT Specialist",
    company: "Rimsha Lab",
    duration: "2023 - Present",
    type: "Part-time",
    location: "Lahore, Pakistan",
    logo: "/logos/rimsha-lab-logo.png",
    description: "Managed IT infrastructure support.",
    responsibilities: [
      "Maintained and troubleshooted lab IT systems and networks",
      "Provided technical support to staff and clients",
      "Implemented basic automation scripts for lab processes"
    ],
    technologies: [ "IT Support" ,"Technical Support"]
  },
  {
    role: "ML & Backend Projects",
    duration: "2023 - Present",
    type: "Personal Projects",
    location: "Self-directed",
    description: "Developing beginner to intermediate level machine learning and backend applications.",
    responsibilities: [
      "Building machine learning models for classification tasks",
      "Developing REST APIs with Node.js and Express",
      "Implementing database designs with MongoDB/PostgreSQL",
      "Creating full-stack applications for portfolio",
      "Learning and applying modern development practices"
    ],
    technologies: ["Python", "TensorFlow", "Node.js", "MongoDB", "Express.js", "JavaScript"]
  }
];

// SVG icons as components
const CalendarIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default function ExperienceCard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative py-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Experience
          </h2>
          <p className="text-gray-400">
            Industrial training, professional roles, and self-directed projects
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gray-800 via-white/20 to-gray-800" />
          
          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {ExperienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-gray-900 z-10" />
                
                {/* Experience Card */}
                <div className={`w-full md:w-5/6 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                      {/* Logo/Icon */}
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center flex-shrink-0">
                        <BuildingIcon />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 mt-2 md:mt-0">
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-gray-400 font-medium">{exp.company}</span>
                          {exp.location && (
                            <>
                              <span className="text-gray-600">•</span>
                              <div className="flex items-center gap-1">
                                <LocationIcon />
                                <span className="text-gray-400 text-sm">{exp.location}</span>
                              </div>
                            </>
                          )}
                        </div>
                        
                        {/* Duration */}
                        <div className="flex items-center gap-2">
                          <CalendarIcon />
                          <span className="text-gray-300 text-sm">{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <p className="text-gray-400 text-sm mb-3">KEY RESPONSIBILITIES:</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <p className="text-gray-400 text-sm mb-3">TECHNOLOGIES & SKILLS:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-3 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Industrial Experience Milestone</h4>
              <p className="text-gray-300">
                Successfully completed industrial training at <span className="text-white font-medium">Developers INN</span>, 
                gaining hands-on experience with enterprise-level Next.js applications and modern development workflows.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
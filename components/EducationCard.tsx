"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    level: "University",
    institution: "COMSATS University Islamabad Lahore Campus.",
    degree: "Bachelor of Science in Software Engineering",
    duration: "2023 - 2027 (Expected)",
    status: "6th Semester (Current)",
    location: "Lahore, Pakistan",
    logo: "/comsats-logo.png",
    logoInitial: "CU",
    highlights: [
      "Focus: Software Engineering & Digital Marketing",
      "Active in Programming & Development Clubs",
      "Coursework: Data Structures, Algorithms, Web Development",
      "Database Systems, Software Engineering"
    ]
  },
  {
    level: "College",
    institution: "Defence Degree College For Boys.",
    degree: "Intermediate in Computer Science",
    duration: "2021 - 2023",
    location: "Lahore, Pakistan",
    logo: "/college-logo.png",
    logoInitial: "DD",
    highlights: [
      "Computer Science & Mathematics Focus",
      "Participated in Science & Technology Exhibitions",
      "Developed foundational programming skills"
    ]
  },
  {
    level: "School", 
    institution: "Fauji Foundation Model School Lahore Cantt.",
    degree: "Science",
    duration: "2009 - 2021",
    location: "Lahore, Pakistan",
    logo: "/school-logo.png",
    logoInitial: "FF",
    highlights: [
      "Science Stream with Computer Studies",
      "Active participant in academic competitions",
      "Built strong foundation in sciences"
    ]
  }
];

// Simple SVG icons as components
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

export default function EducationCard() {
  return (
    <section className="relative py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education
          </h2>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Single Card Container */}
              <div className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                {/* Level Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                    {edu.level}
                  </span>
                </div>

                {/* Institution Logo & Name */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Logo Image Container - INCREASED SIZE */}
                  <div className="relative w-60 h-30 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center overflow-hidden">
                    {/* Logo Image - Will show if exists, otherwise shows initial */}
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} Logo`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Hide the broken image
                        e.currentTarget.style.display = 'none';
                        // Create fallback text with null check
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black';
                          fallback.innerHTML = `
                            <span class="text-gray-300 text-xl font-bold">${edu.logoInitial}</span>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                      onLoad={(e) => {
                        // Image loaded successfully
                        console.log('Logo loaded:', edu.logo);
                      }}
                    />
                    
                    {/* Fallback container - pre-rendered */}
                    <div 
                      id={`fallback-${index}`}
                      className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black"
                    >
                      <span className="text-gray-300 text-xl font-bold">{edu.logoInitial}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  {/* Duration */}
                  <div className="flex items-center gap-3">
                    <CalendarIcon />
                    <span className="text-gray-300 text-sm">{edu.duration}</span>
                    {edu.status && (
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <LocationIcon />
                    <span className="text-gray-300 text-sm">{edu.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-gray-400 text-xs mb-3">KEY POINTS:</p>
                  <ul className="space-y-2">
                    {edu.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-2xl pointer-events-none transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-3 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <div>
              <p className="text-white font-medium">Current Academic Focus</p>
              <p className="text-gray-400 text-sm mt-1">
                Advancing in Software Development, Web Technologies, and IT Project Management
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
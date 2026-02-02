"use client";
import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      {/* Card Container */}
      <div className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
        
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          About<span className="text-gray-400">_</span>Me
        </h2>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            I am a passionate Full-Stack Web Developer specializing in Next.js and React.js. 
            I build modern, scalable web applications with clean architecture and optimal performance. 
            My expertise spans from frontend interfaces to backend systems and database design.
          </p>
          
          {/* Key Points */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span className="text-gray-300">Next.js & React.js Development</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-gray-300">Full-Stack Web Applications</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-gray-300">Responsive & Modern UI Design</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-gray-300">API Development & Integration</span>
            </div>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-3">CORE TECHNOLOGIES</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">Next.js</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">React.js</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">TypeScript</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">Node.js</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">MongoDB</span>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-2">CURRENT FOCUS</p>
          <p className="text-white">Advanced Next.js 14 features, scalable architecture, and performance optimization</p>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-2xl pointer-events-none transition-colors duration-300" />
      </div>
    </motion.div>
  );
}
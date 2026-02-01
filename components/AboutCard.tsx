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
        {/* Section Header */}
        
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          About<span className="text-gray-400"> </span>Me
        </h2>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            I am a motivated IT Specialist and Digital Marketer with strong interest
            in modern web technologies, backend systems, and AI-driven solutions. I
            focus on creating clean, scalable, and impactful digital products.
          </p>
          
          {/* Key Points */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-gray-300">IT Specialist at Rimsha Lab</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-gray-300">Digital Marketing & Social Media Strategy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-gray-300">Full-Stack Web Development Focus</span>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-2">CURRENT FOCUS</p>
          <p className="text-white">Building expertise in Next.js, TypeScript, and scalable web architecture</p>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-2xl pointer-events-none transition-colors duration-300" />
      </div>
    </motion.div>
  );
}
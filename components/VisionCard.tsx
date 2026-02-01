"use client";
import { motion } from "framer-motion";

export default function VisionCard() {
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
          Vision<span className="text-gray-400"></span>
        </h2>

        {/* Main Vision */}
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            To grow as a full-stack professional combining marketing strategy,
            software engineering, and automation to build products that create real
            world impact.
          </p>
          
          {/* Vision Points */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Technical Excellence</p>
                <p className="text-gray-400 text-sm mt-1">Master modern web technologies and best practices</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Real-World Impact</p>
                <p className="text-gray-400 text-sm mt-1">Create solutions that solve practical problems</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Continuous Growth</p>
                <p className="text-gray-400 text-sm mt-1">Stay updated with emerging technologies and trends</p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-2">FOCUS AREAS</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">Full-Stack Development</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">AI Integration</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">Digital Strategy</span>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-2xl pointer-events-none transition-colors duration-300" />
      </div>
    </motion.div>
  );
}
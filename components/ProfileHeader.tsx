"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ContactInfo = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function ProfileHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 rounded-3xl blur-xl" />
      
      {/* Main Container */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side: Profile Picture */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            {/* Picture Container */}
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800">
                <Image
                  src="/profile.jpg"
                  alt="Mubeen Ahmed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                
              </div>
            </div>
          </motion.div>
          
          {/* Right Side: Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Title & Role */}
            <div className="mb-6">
              
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Mubeen Ahmed
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Full-Stack Web Developer • Mobile App Developer • Software Engineer
              </p>
              
              <div className="inline-block px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">
                Lahore, Pakistan 
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <ContactInfo />
                <span className="text-gray-300">ahmedqazimubeen@gmail.com</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <PhoneIcon />
                <span className="text-gray-300">+923284161846</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <LocationIcon />
                <span className="text-gray-300">Lahore, Punjab, Pakistan</span>
              </div>
            </div>
            
            {/* Links & Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg border border-gray-700 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
              
              <a
                href="https://www.linkedin.com/in/mubeen-ahmed-79aa742b7/"
                target="_blank"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                LinkedIn Profile
              </a>
              
              <a
                href="https://github.com/mubeenahmedqazi"
                target="_blank"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                GitHub Portfolio
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <p className="text-gray-400 text-sm">Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
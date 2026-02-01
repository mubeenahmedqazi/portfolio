"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

export default function Footer() {
  const yourEmail = "ahmedqazimubeen@gmail.com";

  return (
    <footer className="mt-28 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT — EMAIL ONLY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold tracking-tight">
              Contact Me
            </h3>

            <p className="text-gray-400 max-w-md">
              Send me an email directly:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-900/30 border border-gray-800 rounded-lg">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-white text-lg font-medium">{yourEmail}</p>
                  
                </div>
              </div>

              
            </div>
          </motion.div>

          {/* RIGHT — SOCIALS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 md:text-right"
          >
            <h3 className="text-3xl font-semibold tracking-tight">
              Follow Me
            </h3>

            <p className="text-gray-400">
              Connect on social platforms
            </p>

            <div className="flex md:justify-end gap-6">
              <SocialIcon
                icon={<Facebook />}
                link="https://www.facebook.com/mubeen.ahmed.33671"
              />
              <SocialIcon
                icon={<Instagram />}
                link="https://www.instagram.com/m.mubeenahmedqazi/"
              />
              <SocialIcon
                icon={<Linkedin />}
                link="https://www.linkedin.com/in/mubeen-ahmed-79aa742b7/"
              />
              <SocialIcon
                icon={<Github />}
                link="https://github.com/mubeenahmedqazi"
              />
            </div>

            {/* Location Info */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Based in Lahore, Pakistan
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Available for remote work
              </p>
            </div>
          </motion.div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mubeen Ahmed  -  Full-Stack Web & Mobile Developer
          
        </div>

      </div>
    </footer>
  );
}

/* SOCIAL ICON */
function SocialIcon({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="p-3 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white transition"
    >
      {icon}
    </a>
  );
}
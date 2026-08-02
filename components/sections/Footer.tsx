"use client";

import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/data";
import { useSmoothScroll } from "@/components/layout/SmoothScrollProvider";

const socials = [
  { icon: Facebook, href: socialLinks.facebook, label: "Facebook" },
  { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Github, href: socialLinks.github, label: "GitHub" },
];

export default function Footer() {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.button
            type="button"
            onClick={() => scrollTo(0)}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight text-gradient"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mubeen Ahmed
          </motion.button>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-brand-primary/50 hover:text-brand-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-brand-primary/50 hover:text-brand-primary"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mubeen Ahmed — Full-Stack Developer &amp; AI/ML Engineer. Based in Lahore, Pakistan.
        </div>
      </div>
    </footer>
  );
}

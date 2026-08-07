"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useTilt } from "@/hooks/useTilt";
import { useSmoothScroll } from "@/components/layout/SmoothScrollProvider";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealText from "@/components/ui/RevealText";
import { contactInfo, heroRoles, socialLinks } from "@/lib/data";

const socials = [
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Github, href: socialLinks.github, label: "GitHub" },
];

const codeSnippets: { code: string; top: string; left?: string; right?: string }[] = [
  { code: 'const dev = "Mubeen";', top: "-8%", left: "-280px" },
  { code: "agent.run(task);", top: "45%", right: "-300px" },
  { code: "deploy(project).then(ship);", top: "95%", left: "-260px" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const role = useTypewriter(heroRoles, { disabled: !!prefersReducedMotion });
  const { scrollTo } = useSmoothScroll();
  const tiltEnabled = !prefersReducedMotion;
  const { ref: tiltRef, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt({
    max: 12,
    disabled: !tiltEnabled,
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-20 pt-28 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-lg text-gray-400"
      >
        Hello, I&apos;m
      </motion.p>

      <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
        <RevealText text="Mubeen Ahmed" className="text-gradient" />
      </h1>

      <div className="mt-5 flex h-8 items-center justify-center text-xl font-medium text-gray-300 md:text-2xl">
        <span>{role}</span>
        <span className="ml-1 inline-block h-[1.3em] w-[2px] animate-pulse bg-brand-primary align-middle" />
      </div>

      <p className="mt-6 max-w-xl text-gray-400">
        I build scalable web platforms and intelligent AI systems — currently based in Lahore, Pakistan.
      </p>

      {/* Profile Image */}
      <motion.div
        ref={tiltEnabled ? tiltRef : undefined}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={
          tiltEnabled
            ? { rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }
            : undefined
        }
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative my-10 h-48 w-48 sm:h-56 sm:w-56"
      >
        <div className="absolute inset-0 animate-aurora rounded-full bg-gradient-to-br from-brand-primary/30 to-brand-accent/30 blur-2xl" />
        <div className="relative h-full w-full rounded-full bg-gradient-to-br from-brand-primary to-brand-accent p-0.75">
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#0d1117] bg-[#0d1117]">
            <Image src="/profile.jpg" alt="Mubeen Ahmed" fill priority className="object-cover" sizes="224px" />
          </div>
        </div>

        {codeSnippets.map((s, i) => (
          <motion.span
            key={s.code}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className="glass absolute hidden animate-float whitespace-nowrap rounded-lg border border-white/10 px-3 py-1.5 font-mono text-[11px] text-brand-primary/90 shadow-lg lg:block"
            style={{ top: s.top, left: s.left, right: s.right, animationDelay: `${i * 0.8}s` }}
          >
            {s.code}
          </motion.span>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton href={contactInfo.resume} download variant="primary">
          Download Resume
        </MagneticButton>
        <MagneticButton onClick={() => scrollTo("#projects", -60)} variant="outline">
          View Projects
        </MagneticButton>
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex items-center gap-4"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="glass flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-brand-primary/50 hover:text-brand-primary"
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        aria-label="Scroll to about section"
        onClick={() => scrollTo("#about", -40)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-gray-500 transition-colors hover:text-brand-primary"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}

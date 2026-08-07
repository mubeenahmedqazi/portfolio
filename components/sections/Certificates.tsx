"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i === null ? i : (i - 1 + certificates.length) % certificates.length));
  const next = () => setActiveIndex((i) => (i === null ? i : (i + 1) % certificates.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex]);

  const active = activeIndex !== null ? certificates[activeIndex] : null;

  return (
    <section id="certificates" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Certifications"
        title="Certificates"
        subtitle="Formal training in computer vision, deep learning, and generative AI — backing up what I build"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {certificates.map((cert, i) => (
          <motion.button
            key={cert.title}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group text-left"
          >
            <GlassCard tilt glow className="flex h-full flex-col overflow-hidden p-0">
              <div className="relative h-44 w-full overflow-hidden border-b border-white/10 bg-white">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-medium text-white">
                    <Award className="h-3.5 w-3.5" />
                    View Certificate
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-1.5 p-6">
                <h3 className="font-bold leading-snug text-white">{cert.title}</h3>
                <p className="text-sm text-brand-primary">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </div>
            </GlassCard>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} certificate`}
          >
            <button
              type="button"
              aria-label="Previous certificate"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="fixed left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:border-brand-primary/60 hover:text-brand-primary sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next certificate"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="fixed right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:border-brand-primary/60 hover:text-brand-primary sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={close}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:border-brand-primary/60 hover:text-brand-primary"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center justify-center bg-white p-2 sm:p-4">
                <Image
                  src={active.image}
                  alt={`${active.title} certificate`}
                  width={2200}
                  height={1700}
                  className="max-h-[65vh] w-auto rounded-md object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white">{active.title}</p>
                  <p className="text-sm text-gray-400">
                    {active.issuer} · {active.date}
                  </p>
                  {active.signatory && <p className="mt-0.5 text-xs text-gray-500">{active.signatory}</p>}
                </div>
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-shrink-0 items-center gap-1.5 text-sm font-medium text-brand-primary hover:underline"
                >
                  Verify on Coursera <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

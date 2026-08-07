"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { contactInfo, socialLinks } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

const socials = [
  { icon: Facebook, href: socialLinks.facebook, label: "Facebook" },
  { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Github, href: socialLinks.github, label: "GitHub" },
];

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  textarea?: boolean;
}) {
  const filled = value.length > 0;
  const commonClasses =
    "peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pt-6 pb-2 text-white outline-none transition-colors focus:border-brand-primary/60";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={`${commonClasses} resize-none`}
          placeholder=" "
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={commonClasses}
          placeholder=" "
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          filled
            ? "top-2 text-xs text-brand-primary"
            : "top-4 text-sm text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-primary"
        }`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address";
    if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm(initialState);
      setTimeout(() => setStatus("idle"), 3500);
    }, 1000);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        kicker="Let's Talk"
        title="Get In Touch"
        subtitle="Open to new roles, freelance work, or just a good conversation about AI — drop me a message"
      />

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <GlassCard glow className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <FloatingField
                id="name"
                label="Your Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                error={errors.name}
              />
              <FloatingField
                id="email"
                label="Your Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                error={errors.email}
              />
              <FloatingField
                id="message"
                label="Your Message"
                value={form.message}
                onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                error={errors.message}
                textarea
              />

              <MagneticButton type="submit" variant="primary" className="w-full justify-center">
                {status === "submitting" ? "Sending..." : "Send Message"}
              </MagneticButton>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Thanks! Your message has been received — I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <GlassCard glow className="p-8">
            <h3 className="mb-6 text-xl font-bold text-white">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <Mail className="h-5 w-5 flex-shrink-0 text-brand-primary" />
                <span className="break-all text-gray-200">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-brand-primary" />
                <span className="text-gray-200">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 flex-shrink-0 text-brand-primary" />
                <span className="text-gray-200">{contactInfo.location}</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard glow className="p-8">
            <h3 className="mb-6 text-xl font-bold text-white">Follow Me</h3>
            <div className="flex gap-4">
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
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

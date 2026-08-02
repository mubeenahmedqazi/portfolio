"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollContextValue {
  scrollTo: (target: string | number | HTMLElement, offset?: number) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: (target) => {
    if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  },
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  const scrollTo: SmoothScrollContextValue["scrollTo"] = (target, offset = 0) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset });
    } else if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <SmoothScrollContext.Provider value={{ scrollTo }}>{children}</SmoothScrollContext.Provider>;
}

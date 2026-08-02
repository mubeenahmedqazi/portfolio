import BackgroundAurora from "@/components/ui/BackgroundAurora";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <BackgroundAurora />

      <Hero />
      <About />
      <Education />
      <Expertise />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}

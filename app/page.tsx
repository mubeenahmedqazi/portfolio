import ProfileHeader from "@/components/ProfileHeader";
import AboutCard from "@/components/AboutCard";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import ExpertiseCard from "@/components/ExpertiseCard";
import VisionCard from "@/components/VisionCard";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-[-2]" />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-[0.02] bg-[size:60px_60px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] z-[-1]" />
      
      {/* Glowing orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl z-[-1]" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl z-[-1]" />

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20 relative z-10">
        <ProfileHeader />

        <div className="grid md:grid-cols-2 gap-8">
          <AboutCard />
          <VisionCard />
        </div>
        <div className="pt-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-0.5 bg-white/30" />
            <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">Portfolio</span>
          </div>
          <PortfolioSection />
        </div>

        <EducationCard />
        <ExperienceCard />
        <ExpertiseCard />

        

        <Footer />
      </div>
    </main>
  );
}
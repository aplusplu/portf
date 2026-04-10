import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import ProfessionalSnapshot from "./components/home/ProfessionalSnapshot";
import SkillsStrip from "./components/home/SkillsStrip";
import ProjectsSection from "./components/home/ProjectsSection";
import AboutSection from "./components/home/AboutSection";
import FooterCTA from "./components/home/FooterCTA";


export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      {/* 🔥 DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        {/* base */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* animated gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-400/20 blur-[180px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-500/20 blur-[180px] animate-pulse delay-1000" />
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-lime-400/10 blur-[160px] animate-pulse delay-500" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.07]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:80px_80px]"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <ProfessionalSnapshot />
        <SkillsStrip />
        <ProjectsSection />
        <AboutSection />
        <FooterCTA />
      </main>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import { AnimatedGrid, GlowOrbs } from "@/components/BackgroundEffects";
import { SmoothScrollOptimizer } from "@/components/SmoothScroll";
import { PageVisitTracker } from "@/components/PageVisitTracker";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceEducationSection } from "@/components/sections/ExperienceEducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/lib/types";

const data = portfolioData as PortfolioData;

export default async function Home() {
  const { profile, projects, experience, education, skills, stats } = data;

  // Dynamic Stats
  const projectCount = projects?.length || 0;
  const experienceYears = "1+";
  const certifications = "10+";

  const statsData = {
    projectCount,
    experienceYears: stats?.experienceYears || experienceYears,
    certifications: stats?.certifications || certifications,
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-sky-50 via-blue-50 to-white text-slate-800 selection:bg-blue-200 relative overflow-hidden">
      {/* Page Visit Tracker - Send webhook on visit */}
      <PageVisitTracker />
      
      {/* Smooth Scroll Optimizer */}
      <SmoothScrollOptimizer />
      
      {/* Background Effects - GPU Accelerated */}
      <div className="fixed inset-0 pointer-events-none" style={{ transform: 'translateZ(0)' }}>
        <AnimatedGrid />
        <GlowOrbs />
      </div>

      <Navbar />

      {/* Section Components with CSS Containment */}
      <div style={{ isolation: 'isolate' }}>
        <HeroSection profile={profile} />
        <AboutSection profile={profile} stats={statsData} />
        <SkillsSection skills={skills} />
        <ExperienceEducationSection experience={experience} education={education} />
        <ProjectsSection projects={projects} />
        <FooterSection profile={profile} />
      </div>
    </main>
  );
}

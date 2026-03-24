"use client";

import { FadeIn, ScaleIn } from "@/components/MotionWrapper";
import { SkillIcon } from "@/components/SkillIcon";

interface Skill {
  id: number;
  name: string;
  category: string;
  icon: string;
}

interface SkillsSectionProps {
  skills: Skill[] | null;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="relative py-20 bg-blue-50/60 backdrop-blur-sm border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-center text-slate-500 mb-4 text-sm uppercase tracking-widest font-semibold">
            Tech Stack & Tools
          </p>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 text-slate-900">Technologies I Work With</h2>
        </FadeIn>
        <div className="flex flex-wrap justify-center gap-4">
          {skills?.map((skill: Skill, i) => (
            <ScaleIn key={skill.id} delay={i * 0.02}>
              <div className="group relative flex flex-col items-center justify-center w-28 h-28 bg-white/90 rounded-xl border border-blue-100 transition-all duration-300 ease-out hover:border-blue-400 hover:bg-blue-50 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/15 cursor-pointer backdrop-blur-sm">
                {/* Icon Container */}
                <div className="relative text-slate-500 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 mb-2 z-10">
                  <SkillIcon iconName={skill.icon} className="w-8 h-8" />
                </div>

                <span className="relative max-w-[90%] text-center leading-tight text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors z-10">
                  {skill.name}
                </span>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}

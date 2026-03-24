"use client";

import { FadeIn, SlideIn, ScaleIn, Tilt3D } from "@/components/MotionWrapper";
import { Code, Clock, Award, User } from "lucide-react";

interface AboutSectionProps {
  profile: {
    bio: string;
  } | null;
  stats: {
    projectCount: number;
    experienceYears: string;
    certifications: string;
  };
}

export function AboutSection({ profile, stats }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto border-t border-blue-100">
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <ScaleIn delay={0.1}>
              <h3 className="text-blue-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                <Code size={20} className="animate-pulse" />
                My Story
              </h3>
            </ScaleIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-500">
                A bit about me.
              </h2>
            </FadeIn>
            <SlideIn delay={0.3}>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">{profile?.bio}</p>
            </SlideIn>
            <SlideIn delay={0.4}>
              <p className="text-slate-600 leading-relaxed">
                I specialize in MERN stack development and have a growing passion for AI integrations. When I'm not
                coding, you can find me exploring new ML algorithms or optimizing backend performance.
              </p>
            </SlideIn>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Tilt3D>
              <ScaleIn delay={0.2}>
                <div className="relative group bg-white/80 p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 backdrop-blur-sm shadow-sm">
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <Code className="relative text-blue-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="relative text-3xl font-bold text-slate-900 mb-1">{stats.projectCount}</h4>
                  <p className="relative text-slate-500 text-sm">Projects Completed</p>
                </div>
              </ScaleIn>
            </Tilt3D>

            <Tilt3D>
              <ScaleIn delay={0.3}>
                <div className="relative group bg-white/80 p-6 rounded-xl border border-blue-100 hover:border-purple-300 transition-all duration-300 backdrop-blur-sm shadow-sm">
                  <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <Clock className="relative text-purple-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="relative text-3xl font-bold text-slate-900 mb-1">{stats.experienceYears}</h4>
                  <p className="relative text-slate-500 text-sm">Years Experience</p>
                </div>
              </ScaleIn>
            </Tilt3D>

            <Tilt3D>
              <ScaleIn delay={0.4}>
                <div className="relative group bg-white/80 p-6 rounded-xl border border-blue-100 hover:border-pink-300 transition-all duration-300 backdrop-blur-sm shadow-sm">
                  <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <Award className="relative text-pink-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="relative text-3xl font-bold text-slate-900 mb-1">{stats.certifications}</h4>
                  <p className="relative text-slate-500 text-sm">Certifications</p>
                </div>
              </ScaleIn>
            </Tilt3D>

            <Tilt3D>
              <ScaleIn delay={0.5}>
                <div className="relative group bg-white/80 p-6 rounded-xl border border-blue-100 hover:border-green-300 transition-all duration-300 backdrop-blur-sm shadow-sm">
                  <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <User className="relative text-green-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <h4 className="relative text-3xl font-bold text-slate-900 mb-1">Open</h4>
                  <p className="relative text-slate-500 text-sm">To Work</p>
                </div>
              </ScaleIn>
            </Tilt3D>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Card with Volumetric Silvery Aura (like Image 4) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              
              {/* Volumetric Soft Silvery Aura Glow behind Card */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-white/10 via-slate-400/15 to-white/5 blur-3xl opacity-80 pointer-events-none group-hover:opacity-100 transition-opacity"></div>

              {/* Main Rounded Photo Card */}
              <div className="relative rounded-[2rem] p-3.5 bg-[#0f121a] border border-white/10 shadow-2xl overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden h-96 sm:h-[26rem] bg-slate-900">
                  <img
                    src={personalInfo.profileImage}
                    alt="Premkumar Asode"
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                  
                  {/* Subtle dark bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0f121a] via-[#0f121a]/60 to-transparent"></div>

                  {/* Bottom Open to Opportunities Bar (Exact match to Image 4) */}
                  <div className="absolute bottom-3 left-3 right-3 py-2.5 px-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-white font-bold tracking-wider text-[11px] uppercase">
                        Open to Opportunities
                      </span>
                    </div>
                    <span className="text-slate-400 font-semibold text-[11px]">
                      2025
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: // SYSTEM PROFILE & 3 Metric Cards (like Image 4) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Tag */}
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold">
              // SYSTEM PROFILE
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Hello, I'm Premkumar Asode
            </h2>

            {/* Narrative description matching Image 4 style */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              <p>
                A passionate <strong className="text-white">DevOps Engineer & Java Full Stack Developer</strong> dedicated to crafting clean, functional, and highly scalable web applications. Specializing in high-performance architectures, automated deployment workflows, and robust backend pipelines.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Graduated with a Bachelor of Engineering in Electronics and Communication Engineering from <strong className="text-slate-200">Government Engineering College, Chamarajanagar (VTU, Belagavi, 2025)</strong>. Experienced in bridging software development with automated cloud infrastructure across Docker, Kubernetes, Jenkins, and AWS.
              </p>
            </div>

            {/* 3 Metric / Pill Cards in a Row (Exact match to Image 4) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              
              <div className="p-4 rounded-2xl bg-[#0f121a] border border-white/10 hover:border-white/20 transition-all space-y-1">
                <div className="text-sm font-bold text-white">Full-Stack</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  ARCHITECTURE
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f121a] border border-white/10 hover:border-white/20 transition-all space-y-1">
                <div className="text-sm font-bold text-white">Java & Spring</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  CORE TECH
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0f121a] border border-white/10 hover:border-white/20 transition-all space-y-1">
                <div className="text-sm font-bold text-white">DevOps & K8s</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  SYSTEMS
                </div>
              </div>

            </div>

            {/* Quick Education / Location details */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-cyan-400">Location:</span> Bengaluru, Karnataka, India
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-cyan-400">Degree:</span> B.E. in ECE (2021 – 2025)
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

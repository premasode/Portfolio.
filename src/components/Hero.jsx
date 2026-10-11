import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone,
  Terminal as TerminalIcon, 
  ArrowDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';

export const Hero = ({ onOpenResumeModal }) => {
  const [showTerminal, setShowTerminal] = useState(false);

  // Animated roles: Line 1 and Line 2
  const rolePairs = [
    { line1: "DEVOPS", line2: "ENGINEER" },
    { line1: "JAVA FULL", line2: "STACK DEV" },
    { line1: "SOFTWARE", line2: "DEVELOPER" },
    { line1: "CLOUD &", line2: "CI/CD PRO" }
  ];

  const [pairIndex, setPairIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPairIndex((prev) => (prev + 1) % rolePairs.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [rolePairs.length]);

  const currentRole = rolePairs[pairIndex];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-6 overflow-hidden">
      
      {/* Dynamic Studio Spotlight Glow directly behind Premkumar's Head & Shoulders (Matches Keyframe 2s, 4s, 6s) */}
      <div 
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] sm:w-[50rem] xl:w-[62rem] h-[36rem] sm:h-[50rem] xl:h-[62rem] rounded-full pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.40) 0%, rgba(254, 243, 199, 0.25) 25%, rgba(148, 163, 184, 0.15) 45%, rgba(56, 189, 248, 0.06) 65%, transparent 80%)',
          filter: 'blur(55px)'
        }}
      />

      {/* Main 3-Column Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full py-4">
          
          {/* LEFT COLUMN: Hi, I'm Premkumar + Giant Bold Typography */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left items-center lg:items-start space-y-4 order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-mono text-cyan-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>HI, I'M PREMKUMAR</span>
            </div>

            {/* Typography scaled seamlessly across mobile & desktop */}
            <div className="space-y-0.5 select-none w-full">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] whitespace-nowrap">
                {currentRole.line1}
              </h1>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent leading-[0.95] whitespace-nowrap">
                {currentRole.line2}
              </h2>
            </div>

            {/* Tech badges pill row */}
            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-[#121622] border border-white/10 shadow-sm">Java</span>
              <span className="px-2.5 py-1 rounded-md bg-[#121622] border border-white/10 shadow-sm">Spring Boot</span>
              <span className="px-2.5 py-1 rounded-md bg-[#121622] border border-white/10 shadow-sm">Docker</span>
              <span className="px-2.5 py-1 rounded-md bg-[#121622] border border-white/10 shadow-sm">Jenkins</span>
              <span className="px-2.5 py-1 rounded-md bg-[#121622] border border-white/10 shadow-sm">Kubernetes</span>
              <span className="px-2.5 py-1 rounded-md bg-[#121622] border border-white/10 shadow-sm">AWS</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/10 bg-[#121622] hover:border-cyan-400 text-slate-300 hover:text-white transition-all hover:scale-105 shadow-sm"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/10 bg-[#121622] hover:border-cyan-400 text-slate-300 hover:text-white transition-all hover:scale-105 shadow-sm"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full border border-white/10 bg-[#121622] hover:border-cyan-400 text-slate-300 hover:text-white transition-all hover:scale-105 shadow-sm"
                title={`Send Email: ${personalInfo.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="p-2.5 rounded-full border border-white/10 bg-[#121622] hover:border-emerald-400 text-slate-300 hover:text-white transition-all hover:scale-105 shadow-sm"
                title={`Call ${personalInfo.phone}`}
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Cinematic Portrait Presentation (Seamless Studio Silhouette) */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-2 lg:order-2 my-4 lg:my-0">
            <div className="relative w-full max-w-xs sm:max-w-md flex flex-col items-center">
              
              {/* Studio Rim-Light Halo directly hugging the portrait */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-t from-cyan-500/20 via-amber-100/25 to-white/30 blur-2xl opacity-60 pointer-events-none"></div>

              {/* Portrait Container - Seamless luxury studio presentation matching Keyframe 2s */}
              <div className="relative w-64 xs:w-72 sm:w-80 xl:w-92 h-[22rem] xs:h-[25rem] sm:h-[30rem] xl:h-[35rem] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_rgba(255,255,255,0.12)] border border-white/15 group">
                <img
                  src={personalInfo.profileImage}
                  alt="Premkumar Asode"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Smooth Gradient Vignette Bottom Blend */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07080b] via-[#07080b]/60 to-transparent pointer-events-none"></div>

                {/* Location indicator */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-emerald-400 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Bengaluru, IN</span>
                </div>

                {/* Minimalist Profile Pill */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-2xl">
                  <div className="space-y-0.5">
                    <span className="text-xs font-extrabold text-white block">Premkumar Asode</span>
                    <span className="text-[11px] font-mono text-cyan-300 block">DevOps & Full Stack</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    Open to Hire
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Narrative & Pill Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left items-center lg:items-start space-y-6 order-3 lg:order-3">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 font-bold block">
                // TURNING IDEAS INTO REALITY
              </span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Passionate DevOps Engineer & Java Full Stack Developer dedicated to building fast, responsive applications and automating modern cloud infrastructure.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specializing in CI/CD pipeline automation, container orchestration with Kubernetes, and resilient Spring Boot REST microservices.
              </p>
            </div>

            {/* High-Impact Pill Action Buttons (Image 3) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-white text-slate-950 hover:bg-cyan-300 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/15 cursor-pointer"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 bg-[#121622] hover:bg-[#1a2030] text-white hover:border-white/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Terminal Launcher */}
            <div className="pt-1">
              <button
                onClick={() => setShowTerminal(!showTerminal)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border border-white/10 bg-[#121622] hover:bg-[#181d2c] text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>{showTerminal ? "Hide Live Terminal" : "Launch Live Bash Terminal & K8s"}</span>
              </button>
            </div>

            {showTerminal && (
              <div className="pt-2 animate-fade-in">
                <InteractiveTerminal />
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Bottom Scroll Bar with Exact Text from Image 3: SCROLL TO SCRUB TIMELINE */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-500 uppercase select-none pt-4 border-t border-white/5">
        <a href="#about" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
          <span>SCROLL TO SCRUB TIMELINE</span>
        </a>
        <span className="hidden sm:inline">Premkumar Asode • Bengaluru, India • 2025</span>
      </div>

    </section>
  );
};

export default Hero;

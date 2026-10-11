import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal as TerminalIcon, 
  ArrowDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import InteractiveTerminal from './InteractiveTerminal';

export const Hero = ({ onOpenResumeModal }) => {
  const [showTerminal, setShowTerminal] = useState(false);

  // Animated role cycling: split into 2 lines for giant oversized typography
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
    }, 3400);
    return () => clearInterval(timer);
  }, [rolePairs.length]);

  const currentRole = rolePairs[pairIndex];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#07080b]">
      
      {/* Cinematic Center Volumetric Spotlight directly behind Premkumar (Image 3) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] sm:w-[52rem] h-[38rem] sm:h-[52rem] rounded-full volumetric-warm-glow blur-3xl pointer-events-none -z-0 opacity-80"></div>

      {/* Main 3-Column Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full py-4">
          
          {/* LEFT COLUMN: Hi, I'm Premkumar + Oversized Headline */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-mono text-cyan-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>HI, I'M PREMKUMAR</span>
            </div>

            {/* Giant Oversized Typography matching Image 3 */}
            <div className="space-y-0.5 select-none transition-all duration-500">
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.9]">
                {currentRole.line1}
              </h1>
              <h2 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight bg-gradient-to-r from-slate-100 via-cyan-100 to-slate-400 bg-clip-text text-transparent leading-[0.9]">
                {currentRole.line2}
              </h2>
            </div>

            {/* Tech stack row */}
            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-[#11141e] border border-white/10">Java</span>
              <span className="px-2.5 py-1 rounded-md bg-[#11141e] border border-white/10">Spring Boot</span>
              <span className="px-2.5 py-1 rounded-md bg-[#11141e] border border-white/10">Docker</span>
              <span className="px-2.5 py-1 rounded-md bg-[#11141e] border border-white/10">Jenkins</span>
              <span className="px-2.5 py-1 rounded-md bg-[#11141e] border border-white/10">Kubernetes</span>
              <span className="px-2.5 py-1 rounded-md bg-[#11141e] border border-white/10">AWS</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/10 bg-[#11141e] hover:border-cyan-400 text-slate-300 hover:text-white transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/10 bg-[#11141e] hover:border-cyan-400 text-slate-300 hover:text-white transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full border border-white/10 bg-[#11141e] hover:border-cyan-400 text-slate-300 hover:text-white transition-all hover:scale-105"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Large Cinematic Portrait Reveal (Image 3) */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2 my-2 lg:my-0">
            <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center">
              
              {/* Diffused backlight aura */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-t from-cyan-500/20 via-white/15 to-purple-600/20 blur-2xl opacity-75 pointer-events-none"></div>

              {/* Portrait Container with Bottom Fade */}
              <div className="relative w-72 sm:w-84 xl:w-96 h-[28rem] sm:h-[32rem] xl:h-[36rem] rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl bg-[#0d0f17] group">
                <img
                  src={personalInfo.profileImage}
                  alt="Premkumar Asode"
                  className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-100 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Soft Gradient Fade at Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07080b] via-[#07080b]/70 to-transparent pointer-events-none"></div>

                {/* Top Location Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-emerald-400 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Bengaluru, IN</span>
                </div>

                {/* Bottom Profile Bar */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-extrabold text-white block">Premkumar Asode</span>
                    <span className="text-[11px] font-mono text-cyan-300 block">B.E. in ECE (VTU, 2025)</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Open to Hire
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Turning Ideas into Reality & Pill Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left space-y-6 order-3 lg:order-3">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 font-bold block">
                // TURNING IDEAS INTO REALITY
              </span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Passionate DevOps Engineer & Java Full Stack Developer dedicated to building fast, responsive applications and automating modern cloud infrastructure.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specializing in CI/CD pipeline automation, containerization with Docker, Kubernetes pod orchestration, and resilient Spring Boot REST microservices.
              </p>
            </div>

            {/* High-Impact Pill Action Buttons (Image 3) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-white text-slate-950 hover:bg-cyan-300 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/15"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 bg-[#12151f] hover:bg-[#1a1f2e] text-white hover:border-white/40 hover:scale-105 active:scale-95 transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Interactive Terminal Toggle Button */}
            <div className="pt-1">
              <button
                onClick={() => setShowTerminal(!showTerminal)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border border-white/10 bg-[#11141e] hover:bg-[#161a27] text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
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

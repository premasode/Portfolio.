import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Sparkles, 
  ExternalLink, 
  Terminal as TerminalIcon, 
  ChevronDown, 
  CheckCircle2, 
  ShieldCheck,
  Cpu,
  Layers,
  ArrowDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, heroBadges } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import InteractiveTerminal from './InteractiveTerminal';

export const Hero = ({ onOpenResumeModal }) => {
  const { isDark } = useTheme();
  const [showTerminal, setShowTerminal] = useState(false);

  // Animated role cycling: Title split into 2 lines for giant typography
  const rolePairs = [
    { line1: "DEVOPS", line2: "ENGINEER" },
    { line1: "JAVA FULL", line2: "STACK DEV" },
    { line1: "SOFTWARE", line2: "DEVELOPER" },
    { line1: "CLOUD &", line2: "CI/CD ENTHUSIAST" }
  ];

  const [pairIndex, setPairIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPairIndex((prev) => (prev + 1) % rolePairs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [rolePairs.length]);

  const currentRole = rolePairs[pairIndex];

  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-10 overflow-hidden bg-slate-950">
      
      {/* Cinematic Center Spotlight Behind Premkumar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] sm:w-[48rem] h-[34rem] sm:h-[48rem] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 blur-3xl pointer-events-none -z-0"></div>

      {/* Hero Main Grid (Left Typography, Center Big Portrait, Right Narrative) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full py-8">
          
          {/* LEFT COLUMN: Hi, I'm Premkumar & Giant Big Bold Titles */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-mono text-cyan-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Hi, I'm Premkumar</span>
            </div>

            {/* Giant Title matching Sushmita reference */}
            <div className="space-y-1 select-none">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-none">
                {currentRole.line1}
              </h1>
              <h2 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight bg-gradient-to-r from-slate-200 via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-none">
                {currentRole.line2}
              </h2>
            </div>

            {/* Quick tech tags */}
            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Java</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Spring Boot</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Docker</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Jenkins</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Kubernetes</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">AWS</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:border-purple-500/50 text-slate-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Prominent Big Portrait Photo of Premkumar */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2 my-4 lg:my-0">
            <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center">
              
              {/* Outer soft ambient glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-t from-cyan-500/25 via-blue-500/20 to-purple-600/25 blur-2xl opacity-70 pointer-events-none"></div>

              {/* Big Photo Container with Vignette / Gradient Mask */}
              <div className="relative w-72 sm:w-84 xl:w-96 h-[26rem] sm:h-[30rem] xl:h-[34rem] rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-gradient-to-b from-slate-900 to-slate-950 group">
                <img
                  src={personalInfo.profileImage}
                  alt="Premkumar Asode"
                  className="w-full h-full object-cover object-top filter contrast-105 brightness-100 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Soft gradient bottom blend so it fades into background cleanly */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none"></div>

                {/* Status Indicator Badge on Portrait */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-mono text-emerald-400 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Bengaluru, IN</span>
                </div>

                {/* Graduation Tag on Portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-white block">Premkumar Asode</span>
                    <span className="text-[11px] font-mono text-cyan-300 block">B.E. in ECE (VTU, 2025)</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    Open to Hire
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Narrative, CTAs & Quick Controls */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left space-y-5 order-3 lg:order-3">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold block">
                // AUTOMATING MODERN INFRASTRUCTURE
              </span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Passionate about Java development, cloud computing, DevOps automation, CI/CD pipelines, and building reliable software solutions.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                I enjoy developing applications and automating deployment workflows using modern cloud technologies.
              </p>
            </div>

            {/* High-Impact Pill Action Buttons like Image 2 reference */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-white text-slate-950 hover:bg-cyan-300 hover:text-slate-950 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-white hover:border-slate-500 hover:scale-105 active:scale-95 transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Terminal Launcher Pill */}
            <div className="pt-2">
              <button
                onClick={() => setShowTerminal(!showTerminal)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border border-slate-800 bg-slate-900/60 hover:bg-slate-900 text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>{showTerminal ? "Hide Live Terminal" : "Launch Live Bash Terminal & K8s"}</span>
              </button>
            </div>

            {/* If terminal is toggled */}
            {showTerminal && (
              <div className="pt-2 animate-fade-in">
                <InteractiveTerminal />
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator matching Image 2 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-500 uppercase select-none pt-4 border-t border-slate-900">
        <a href="#about" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
          <span>Scroll to explore timeline</span>
        </a>
        <span className="hidden sm:inline">Premkumar Asode • 2025 Portfolio</span>
      </div>

    </section>
  );
};

export default Hero;

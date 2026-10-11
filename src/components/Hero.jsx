import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Sparkles, 
  ExternalLink, 
  Terminal, 
  ChevronDown, 
  CheckCircle2, 
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, heroBadges } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import InteractiveTerminal from './InteractiveTerminal';

export const Hero = ({ onOpenResumeModal }) => {
  const { isDark } = useTheme();
  
  // Animated typing effect
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const roles = personalInfo.roles;
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Roles, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6 w-fit animate-fade-in shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide">
                Actively Seeking Entry-Level DevOps & Software Developer Roles
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2 mb-4">
              <h2 className="text-slate-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="text-cyan-400">01.</span> Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 dark:from-white dark:via-slate-100 dark:to-slate-300 light:from-slate-900 light:to-slate-700 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Dynamic Typing Role */}
            <div className="h-10 sm:h-12 flex items-center mb-5">
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="w-0.5 h-6 sm:h-7 bg-cyan-400 ml-1 animate-pulse"></span>
            </div>

            {/* Headline */}
            <h3 className="text-lg sm:text-xl font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 mb-4 leading-snug">
              "{personalInfo.headline}"
            </h3>

            {/* Professional Description */}
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.description}
            </p>

            {/* Interactive Call-To-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download / View Resume */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-slate-700 hover:border-cyan-500/60 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-slate-700 hover:border-purple-500/60 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>

              {/* GitHub Profile */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border border-slate-800 hover:border-slate-700 bg-slate-950/80 text-slate-300 hover:text-white transition-colors"
                title="View GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              {/* LinkedIn Profile */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm border border-slate-800 hover:border-slate-700 bg-slate-950/80 text-slate-300 hover:text-blue-400 transition-colors"
                title="View LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Animated Technology Badges */}
            <div className="pt-2 border-t border-slate-800/60">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                  Core Technology Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {heroBadges.map((badge, idx) => (
                  <span
                    key={badge.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-slate-800 bg-slate-900/70 hover:border-cyan-500/40 hover:bg-slate-800/80 hover:scale-105 transition-all cursor-default text-slate-200 shadow-sm"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${badge.color}`}></span>
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Profile Card + Terminal System */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Profile Card */}
            <div className="relative group mx-auto w-full max-w-md">
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-5 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center gap-5">
                {/* Photo container */}
                <div className="relative shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-lg relative bg-slate-800">
                    <img
                      src={personalInfo.profileImage}
                      alt="Premkumar Asode"
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback avatar if local image fails
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  {/* Status dot */}
                  <div className="absolute -bottom-1 -right-1 bg-slate-950 p-1 rounded-full border border-slate-800">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-cyan-400 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{personalInfo.location}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white">
                    {personalInfo.name}
                  </h4>

                  <p className="text-xs text-slate-300 font-medium">
                    ECE Graduate (VTU 2025)
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-1 pt-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      DevOps
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Java Full Stack
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      CI/CD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Showcase */}
            <div className="w-full">
              <InteractiveTerminal />
            </div>

          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-500 text-xs font-mono">
        <span>scroll down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400 mt-1" />
      </div>
    </section>
  );
};

export default Hero;

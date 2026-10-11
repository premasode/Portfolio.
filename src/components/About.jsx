import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Zap, 
  Users, 
  RefreshCw, 
  ShieldCheck, 
  Cpu, 
  HeartHandshake,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Bridging Software Development & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">DevOps Automation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Passionate about writing clean, maintainable backend code in Java and seamlessly deploying it through resilient CI/CD pipelines and cloud infrastructure.
          </p>
        </div>

        {/* Main Grid: Story & Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between shadow-xl">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-cyan-500"></span>
                Who I Am & My Technical Vision
              </h3>

              <p>
                Hello! I am <strong className="text-white">Premkumar Asode</strong>, an Electronics and Communication Engineering graduate with a focused passion for software engineering and modern DevOps automation.
              </p>

              <p>
                During my engineering journey, I realized that writing quality code is only half the mission—ensuring that software can be built automatically, tested rigorously, packaged into containers, and deployed with high reliability to cloud infrastructure is equally vital.
              </p>

              <p>
                I thrive at this intersection: architecting backend APIs with <strong className="text-cyan-300">Java and Spring Boot</strong>, designing clean frontend interfaces, and establishing automated <strong className="text-purple-300">CI/CD pipelines with Jenkins, Docker, and AWS</strong> to deliver stable, scalable systems.
              </p>

              <p className="text-slate-400 text-sm">
                Based in <strong className="text-slate-200">Bengaluru</strong>, I am actively seeking an entry-level position as a DevOps Engineer, Java Full Stack Developer, or Software Developer where I can contribute to mission-critical systems and continue accelerating my growth.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-slate-800">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">2025</div>
                <div className="text-[11px] text-slate-400">Graduation Year</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-400 font-mono">6+</div>
                <div className="text-[11px] text-slate-400">Practical Projects</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-400 font-mono">15+</div>
                <div className="text-[11px] text-slate-400">Tools Practiced</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">BLR</div>
                <div className="text-[11px] text-slate-400">Bengaluru, IN</div>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Education & Degree Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                    Formal Education
                  </span>
                  <h3 className="text-lg font-bold text-white">Academic Qualifications</h3>
                </div>
              </div>

              {/* Education block */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-100 text-sm sm:text-base">
                      {personalInfo.degree}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0 ml-2">
                      2021 – 2025
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 font-medium mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{personalInfo.college}</span>
                  </div>

                  <div className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{personalInfo.university}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                    <div>• Rigorous coursework in microprocessors, digital electronics, and computer networks.</div>
                    <div>• Developed strong analytical aptitude for complex system debugging and software logic.</div>
                  </div>
                </div>

                {/* Location indicator */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-medium text-white">Current Base:</span> Bengaluru, Karnataka, India
                    <span className="block text-[11px] text-slate-400">Available for on-site, hybrid, or remote technical opportunities.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification note */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Degree credentials and project documentations verified.</span>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Core Strength */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Problem-Solving Aptitude</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Analytical engineering background with a disciplined approach to diagnosing software exceptions and system bottlenecks.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 transition-all hover:-translate-y-1 group">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Continuous Learning</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quick to assimilate new frameworks, cloud APIs, container tools, and evolving DevOps automation paradigms.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-all hover:-translate-y-1 group">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Infrastructure Automation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Passionate about eliminating manual deployments through repeatable Dockerfiles, Jenkinsfiles, and Terraform scripts.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all hover:-translate-y-1 group">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Teamwork & Collaboration</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Experience communicating technical concepts clearly, participating in code reviews, and resolving customer support tickets.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

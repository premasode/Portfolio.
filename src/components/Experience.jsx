import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  ShieldCheck,
  BadgeAlert
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Experience & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Continuous Learning</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A chronological timeline of intensive engineering training, professional support experience, and foundational university education. Strictly truthful without fabricated roles or titles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Rule */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Dot */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/30 z-20">
                    {item.type === 'work' ? (
                      <Briefcase className="w-3.5 h-3.5" />
                    ) : item.type === 'education' ? (
                      <GraduationCap className="w-3.5 h-3.5" />
                    ) : (
                      <Code2 className="w-3.5 h-3.5" />
                    )}
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden sm:block w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2">
                    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 backdrop-blur-xl shadow-xl hover:border-slate-700 transition-all hover:-translate-y-1 group">
                      
                      {/* Header Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-cyan-400 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Organization & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
                        <span className="flex items-center gap-1 text-slate-300 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-purple-400" />
                          {item.organization}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-blue-400" />
                          {item.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2 pt-3 border-t border-slate-800/80">
                        {item.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                            <span className="text-cyan-400 text-xs shrink-0 mt-0.5">✓</span>
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;

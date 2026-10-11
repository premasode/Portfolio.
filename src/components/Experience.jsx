import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Calendar, 
  MapPin, 
  Building2 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            <span>// CHRONOLOGICAL MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Experience & Education Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-normal">
            Hands-on technical training, six months professional technical support, and formal Bachelor of Engineering credentials.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Rule */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-cyan-500/40 via-purple-500/40 to-white/10 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-10">
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
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#07080b] border border-white/20 items-center justify-center text-cyan-400 shadow-xl z-20">
                    {item.type === 'work' ? (
                      <Briefcase className="w-4 h-4" />
                    ) : item.type === 'education' ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : (
                      <Code2 className="w-4 h-4" />
                    )}
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden sm:block w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2">
                    <div className="rounded-3xl bg-[#0d1018] border border-white/10 p-7 shadow-xl hover:border-white/25 transition-all duration-300 group">
                      
                      {/* Header Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-cyan-300">
                          {item.badge}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {/* Organization & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
                        <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                          <Building2 className="w-3.5 h-3.5 text-purple-400" />
                          {item.organization}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {item.location}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs text-slate-400 leading-relaxed mb-4 font-normal">
                        {item.summary}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-1.5 pt-3 border-t border-white/5">
                        {item.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                            <span className="text-cyan-400 text-xs shrink-0 mt-0.5">▸</span>
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

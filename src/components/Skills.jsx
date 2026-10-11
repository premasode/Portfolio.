import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Layers, 
  Cloud, 
  Activity, 
  Search, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  languages: Code2,
  'java-stack': Layers,
  'devops-cloud': Cloud,
  'monitoring-deployment': Activity
};

export const Skills = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => (selectedCategory === 'all' ? true : cat.id === selectedCategory))
      .map((cat) => {
        const matchingSkills = cat.skills.filter((skill) => {
          const matchName = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
          const matchTags = skill.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
          const matchLevel = skill.level.toLowerCase().includes(searchQuery.toLowerCase());
          return matchName || matchTags || matchLevel;
        });

        return {
          ...cat,
          skills: matchingSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [searchQuery, selectedCategory]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            <span>// TECHNICAL MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Core Technical Skills
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-normal">
            Technologies practiced and verified across hands-on lab environments, university coursework, and continuous deployment workflows.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-3 rounded-3xl bg-[#0d1018] border border-white/10 shadow-xl">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools (Docker, Java, AWS, Jenkins)..."
              className="w-full pl-11 pr-4 py-2.5 bg-black/50 border border-white/10 rounded-2xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white bg-black/40 border border-white/5'
              }`}
            >
              All Tools
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white bg-black/40 border border-white/5'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>

        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.id] || Code2;

            return (
              <div
                key={category.id}
                className="rounded-3xl bg-[#0d1018] border border-white/10 p-7 shadow-xl flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      <p className="text-xs text-slate-400 font-normal">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl border border-white/5 bg-black/40 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-xs text-white">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#161a25] text-slate-300 border border-white/10">
                            {skill.level}
                          </span>
                        </div>

                        {skill.tags && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] font-mono text-slate-500 bg-black/60 px-1.5 py-0.5 rounded border border-white/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-cyan-400">Verified in Labs</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;

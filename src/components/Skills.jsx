import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Layers, 
  Cloud, 
  Activity, 
  Search, 
  Filter, 
  CheckCircle2, 
  Sparkles, 
  Tag, 
  HelpCircle,
  ExternalLink
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

  const totalMatchingSkills = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Practical Tools & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Engineering Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Technologies learned and practiced across hands-on lab environments, academic projects, and continuous training. No fabricated percentages—only verified hands-on capability.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Docker, Java, AWS, Jenkins)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>

        </div>

        {/* Search Results Summary */}
        {searchQuery && (
          <div className="text-xs text-slate-400 mb-6 flex items-center justify-between">
            <span>
              Found <strong className="text-cyan-400">{totalMatchingSkills}</strong> skills matching "{searchQuery}"
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-cyan-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.id] || Code2;

            return (
              <div
                key={category.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      <p className="text-xs text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Grid within Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                          skill.highlight
                            ? 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/90'
                            : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-xs sm:text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                            {skill.level}
                          </span>
                        </div>

                        {/* Skill Subtags */}
                        {skill.tags && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.2 rounded border border-slate-800/60"
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

                {/* Footer Count */}
                <div className="mt-5 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{category.skills.length} tools practiced</span>
                  <span className="text-cyan-400/80 font-mono">Hands-on Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <HelpCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No matching tools found</h3>
            <p className="text-xs text-slate-400 mb-4">
              Try searching with another keyword like "Docker", "Java", "AWS", or "Kubernetes".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-white"
            >
              Clear Search Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;

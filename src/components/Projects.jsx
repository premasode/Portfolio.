import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Info,
  Layers,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const [placeholderNotice, setPlaceholderNotice] = useState(null);

  const categories = ['All', 'DevOps', 'Java Full Stack'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  const handleGithubClick = (e, project) => {
    if (project.isPlaceholderLink) {
      e.preventDefault();
      setPlaceholderNotice({
        title: project.title,
        url: project.githubUrl
      });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            <span>// SELECTED WORKS & SYSTEMS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Featured Engineering Projects
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-normal">
            Real software architectures built with Java, Spring Boot, Docker, Jenkins, Kubernetes, and AWS. Each project features automated pipelines, database persistence, or cloud containerization.
          </p>

          {/* Clean Pill Filters */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-white text-slate-950 shadow-lg shadow-white/10'
                    : 'bg-[#11141e] text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat === 'All' ? 'All Works (6)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sophisticated Dark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0d1018] border border-white/10 hover:border-white/25 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden shadow-xl"
            >
              {/* Subtle top edge gradient sheen */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Project Index & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-cyan-400">
                    // 0{idx + 1} • {project.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-extrabold text-white mb-2.5 group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5 font-normal">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5 text-xs text-slate-300">
                  {project.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 text-xs shrink-0 mt-0.5">▸</span>
                      <span className="line-clamp-2 text-slate-400 text-[11px] leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-black/50 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-2 pt-2">
                  <button
                    onClick={() => setSelectedModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleGithubClick(e, project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/10 hover:bg-white text-white hover:text-slate-950 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Modal */}
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="max-w-2xl w-full bg-[#0d1018] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-6 right-6 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                <span>{selectedModalProject.category} System Architecture</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3">
                {selectedModalProject.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                {selectedModalProject.description}
              </p>

              {/* Architecture Blueprint */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                  System Architecture Blueprint:
                </span>
                <p className="text-xs font-mono text-emerald-300 leading-relaxed bg-[#11141e] p-3 rounded-xl border border-white/5">
                  {selectedModalProject.architectureOverview}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Detailed Implementation Checklist:
                </span>
                {selectedModalProject.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {selectedModalProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-[10px] font-mono bg-black text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleGithubClick(e, selectedModalProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-white text-slate-950 hover:bg-cyan-300 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Open GitHub Project</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder Repository Modal */}
        {placeholderNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="max-w-md w-full bg-[#0d1018] border border-amber-500/30 rounded-3xl p-6 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-3 text-amber-400">
                <Info className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-white text-base">GitHub Repository Notice</h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                This link for <strong className="text-white">"{placeholderNotice.title}"</strong> is a template placeholder:
              </p>

              <div className="bg-black/60 p-3 rounded-xl border border-white/10 font-mono text-[11px] text-cyan-300 break-all mb-4">
                {placeholderNotice.url}
              </div>

              <p className="text-[11px] text-slate-400 mb-5">
                You can connect your live repository anytime by updating <code className="text-cyan-400">src/data/portfolioData.js</code>.
              </p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setPlaceholderNotice(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20"
                >
                  Close
                </button>
                <a
                  href={placeholderNotice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setPlaceholderNotice(null)}
                  className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950"
                >
                  Visit Link
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;

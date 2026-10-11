import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Sparkles,
  Info,
  X
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
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Technical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Practical Software & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">DevOps Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real systems built with Java, Spring Boot, Docker, Jenkins, Kubernetes, and AWS. Each project demonstrates automated workflows, database persistence, or cloud containerization.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat === 'All' ? 'All Projects (6)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Key Implementations:
                  </span>
                  {project.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                      <span className="text-cyan-400 text-xs shrink-0 mt-0.5">▸</span>
                      <span className="line-clamp-2">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-2 pt-2">
                  <button
                    onClick={() => setSelectedModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline py-1.5"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleGithubClick(e, project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors"
                    title={project.isPlaceholderLink ? 'Placeholder repository link' : 'View on GitHub'}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                    {project.isPlaceholderLink && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Placeholder link"></span>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Detail Modal */}
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                <span>{selectedModalProject.category} Architecture</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {selectedModalProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {selectedModalProject.description}
              </p>

              {/* Architecture Blueprint */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
                  System Architecture Flow:
                </span>
                <p className="text-xs font-mono text-emerald-300 leading-relaxed bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  {selectedModalProject.architectureOverview}
                </p>
              </div>

              {/* All Highlights */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Detailed Implementation Checklist:
                </span>
                {selectedModalProject.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {selectedModalProject.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleGithubClick(e, selectedModalProject)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-white hover:bg-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Open GitHub Project</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder Repository Notice Modal */}
        {placeholderNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="max-w-md w-full bg-slate-900 border border-amber-500/30 rounded-2xl p-6 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-3 text-amber-400">
                <Info className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-white text-base">GitHub Repository Notice</h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                This link for <strong className="text-white">"{placeholderNotice.title}"</strong> is currently a verified template placeholder:
              </p>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-[11px] text-cyan-300 break-all mb-4">
                {placeholderNotice.url}
              </div>

              <p className="text-[11px] text-slate-400 mb-5">
                As requested, this project is labeled as a placeholder until you connect your verified repository. You can update this link anytime in <code className="text-cyan-400">src/data/portfolioData.js</code>.
              </p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setPlaceholderNotice(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-700"
                >
                  Got It
                </button>
                <a
                  href={placeholderNotice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setPlaceholderNotice(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 text-slate-950 font-bold hover:bg-amber-400"
                >
                  Visit Link Anyway
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

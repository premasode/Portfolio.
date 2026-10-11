import React from 'react';

const roadmapRoots = [
  {
    root: "// ROOT 01",
    title: "Frontend Development",
    desc: "Architecting responsive, high-performance UI components.",
    pill: "React & Tailwind",
    tools: ["Vite", "ES6+", "State Management"]
  },
  {
    root: "// ROOT 02",
    title: "Backend Development",
    desc: "Building secure REST APIs and robust relational data pipelines.",
    pill: "Java & Spring Boot",
    tools: ["Hibernate", "MySQL", "RESTful Architecture"]
  },
  {
    root: "// ROOT 03",
    title: "DevOps & Automation",
    desc: "Automating build lifecycles, testing, and continuous integration.",
    pill: "Jenkins & Docker",
    tools: ["Maven", "Dockerfiles", "Webhooks"]
  },
  {
    root: "// ROOT 04",
    title: "Cloud & Deployment",
    desc: "Containerizing systems and orchestrating zero-downtime execution in production.",
    pill: "Kubernetes & AWS",
    tools: ["AWS EC2", "YAML Manifests", "Prometheus"]
  }
];

export const ExecutionRoadmap = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            <span>C // ENGINEERING ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Core Execution Root Map
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Disciplined software engineering pathways from frontend interfaces to automated cloud container orchestration.
          </p>
        </div>

        {/* 4 Cards with Top Spotlight Beams (Exactly like Image 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {roadmapRoots.map((item, idx) => (
            <div key={idx} className="relative group pt-6">
              
              {/* Volumetric Spotlight Cone from above */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-36 h-28 spotlight-beam opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Spotlight Card */}
              <div className="spotlight-card rounded-2xl p-6 h-full flex flex-col justify-between relative z-10 group-hover:-translate-y-1 transition-all duration-300">
                
                <div>
                  {/* Root Tag & Dot */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {item.root}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-cyan-400 transition-colors"></span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Pill Tag */}
                <div className="pt-4 border-t border-white/5">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-[#161a25] border border-white/10 text-[11px] font-mono font-semibold text-slate-200 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
                    {item.pill}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExecutionRoadmap;

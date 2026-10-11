import React from 'react';

const technologies = [
  "JAVA",
  "SPRING BOOT",
  "DOCKER",
  "KUBERNETES",
  "JENKINS",
  "AWS CLOUD",
  "TERRAFORM",
  "CI/CD PIPELINES",
  "MAVEN",
  "PROMETHEUS",
  "GRAFANA",
  "REST APIS",
  "MYSQL",
  "LINUX",
  "REACT.JS",
  "MICROSERVICES",
  "CONTAINERIZATION",
  "INFRASTRUCTURE AS CODE"
];

export const TechTicker = () => {
  return (
    <div className="w-full overflow-hidden border-y border-white/5 bg-[#090b10] py-3 select-none">
      <div className="animate-marquee flex items-center gap-3">
        {/* Double array for seamless loop */}
        {[...technologies, ...technologies].map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151e] border border-white/10 text-[11px] font-mono tracking-wider font-semibold text-slate-300 hover:text-white hover:border-white/30 transition-all shrink-0 cursor-default shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTicker;

import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#07080b] text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand */}
          <div className="flex items-center gap-1 group">
            <span className="font-black text-xl tracking-tight text-white">Premkumar</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 -mt-1 inline-block"></span>
            <span className="text-[11px] text-slate-500 font-mono ml-3 hidden sm:inline">
              DevOps & Java Full Stack Engineer
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white text-slate-300 hover:text-slate-950 transition-all shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white text-slate-300 hover:text-slate-950 transition-all shadow-sm"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white text-slate-300 hover:text-slate-950 transition-all shadow-sm"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors group cursor-pointer"
          >
            <span className="font-mono text-xs uppercase tracking-wider">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>

        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Premkumar Asode. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-cyan-400" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

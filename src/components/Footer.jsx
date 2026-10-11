import React from 'react';
import { ArrowUp, Terminal, Heart, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px]">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                Premkumar Asode
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Aspiring DevOps Engineer | Java Full Stack Developer
              </span>
            </div>
          </div>

          {/* Socials & Location */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors group cursor-pointer"
          >
            <span className="font-mono text-xs">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Premkumar Asode. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span>Built with React, Vite, Tailwind CSS & Framer Motion</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-cyan-500" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

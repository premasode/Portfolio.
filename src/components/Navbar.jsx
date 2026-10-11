import React, { useState, useEffect } from 'react';
import { Terminal, Moon, Sun, Menu, X, ArrowUpRight, Code, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'CI/CD Pipeline', href: '#pipeline' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = ({ onOpenResumeModal }) => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['about', 'pipeline', 'skills', 'projects', 'experience', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Terminal Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Premkumar Asode Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] transition-transform group-hover:scale-105">
              <div
                className={`w-full h-full rounded-[10px] flex items-center justify-center transition-colors ${
                  isDark ? 'bg-slate-950' : 'bg-white'
                }`}
              >
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base sm:text-lg flex items-center gap-1">
                <span className="text-cyan-400">&lt;</span>
                <span className={isDark ? 'text-white' : 'text-slate-900'}>Premkumar</span>
                <span className="text-purple-400">/&gt;</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 -mt-1 hidden sm:block">
                DevOps & FullStack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/60 light:bg-slate-100/70 p-1.5 rounded-full border border-slate-800/60 dark:border-slate-800 light:border-slate-200 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30 shadow-sm'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className={`p-2 rounded-xl transition-all duration-200 border ${
                isDark
                  ? 'bg-slate-900 text-amber-300 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
                  : 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200 hover:border-slate-300'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Resume Link */}
            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`lg:hidden p-2 rounded-xl border ${
                isDark
                  ? 'bg-slate-900 text-slate-200 border-slate-800'
                  : 'bg-slate-100 text-slate-800 border-slate-200'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 transition-all ${
            isDark
              ? 'bg-slate-950/95 border-slate-800 backdrop-blur-xl'
              : 'bg-white/95 border-slate-200 backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800/50">
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Available for Hire (Bengaluru)
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800/60'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
            >
              View & Download Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 px-4 rounded-xl text-center text-xs font-semibold border ${
                isDark
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-900'
                  : 'border-slate-300 text-slate-800 hover:bg-slate-100'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection = ({ onOpenResumeModal }) => {
  const [downloadNotice, setDownloadNotice] = useState(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            <span>// CREDENTIALS & RESUME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Verified Curriculum Vitae
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto font-normal">
            Download the official resume PDF or review the print-friendly evaluation layout directly in your browser.
          </p>
        </div>

        {/* Main Resume Card */}
        <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-[#0d1018] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Summary */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified 2025 Engineering Graduate</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {personalInfo.name} — Technical Resume
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Targeting <strong className="text-white">DevOps Engineer</strong>, <strong className="text-white">Java Full Stack Developer</strong>, and <strong className="text-white">Software Developer</strong> roles. Features verified coursework, 6+ practical projects, and 6 months technical support experience at EOS Globe.
              </p>

              <div className="space-y-1.5 pt-2 text-xs text-slate-400 font-mono">
                <div>• B.E. in Electronics & Communication (VTU Belagavi, 2025)</div>
                <div>• End-to-End CI/CD Pipeline & Kubernetes Deployment Projects</div>
                <div>• Java, Spring Boot, MySQL, REST API Architecture</div>
                <div>• Based in Bengaluru • Available for immediate start</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={onOpenResumeModal}
                  className="px-7 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-white text-slate-950 hover:bg-cyan-300 transition-all shadow-xl shadow-white/10 cursor-pointer"
                >
                  View Formatted Resume
                </button>

                <a
                  href={personalInfo.resumePath}
                  download="Premkumar_Asode_Resume.pdf"
                  onClick={() => setDownloadNotice(true)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 bg-[#12151f] hover:bg-[#1a1f2e] text-white transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download PDF</span>
                </a>
              </div>

            </div>

            {/* Right Column: PDF File info & instructions */}
            <div className="lg:col-span-5 rounded-3xl bg-black/60 border border-white/10 p-6 flex flex-col justify-between space-y-4 text-left">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-widest block mb-2">
                  RESUME FILE LOCATION
                </span>
                <div className="p-3.5 rounded-2xl bg-[#11141e] border border-white/10 font-mono text-xs text-cyan-300 flex items-center justify-between">
                  <span className="truncate">Premkumar_Asode_Resume.pdf</span>
                  <FileText className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#11141e]/60 border border-white/5 text-xs text-slate-400 space-y-1">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ATS Screening Ready</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Clean single-page ATS-formatted resume optimized for technical recruiters and hiring managers.
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Active document verified in public folder</span>
              </div>
            </div>

          </div>

          {/* Conditional notification */}
          {downloadNotice && (
            <div className="mt-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 flex items-center justify-between">
              <span>
                Download dispatched for <code>{personalInfo.resumePath}</code>.
              </span>
              <button
                onClick={() => setDownloadNotice(false)}
                className="text-cyan-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;

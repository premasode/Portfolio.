import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Printer, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle,
  ExternalLink,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection = ({ onOpenResumeModal }) => {
  const [downloadNotice, setDownloadNotice] = useState(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Resume & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Professional Credentials</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Download my verified technical resume or review the print-friendly summary covering my B.E. in ECE, Java Full Stack skills, and DevOps pipeline experience.
          </p>
        </div>

        {/* Main Resume Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Summary of Resume contents */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified 2025 Graduate Profile</span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {personalInfo.name} — Technical Resume
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Targeting <strong>DevOps Engineer</strong>, <strong>Java Full Stack Developer</strong>, and <strong>Software Developer</strong> opportunities. Highlighted with hands-on projects across Jenkins, Docker, Kubernetes, AWS, Spring Boot, and MySQL.
              </p>

              {/* Highlights checklist */}
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Bachelor of Engineering in ECE (VTU Belagavi, 2025)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>6+ End-to-End Projects with CI/CD, Containerization & REST APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>6 Months Technical Support Experience at EOS Globe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Available in Bengaluru for immediate joining</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume in Browser</span>
                </button>

                <a
                  href={personalInfo.resumePath}
                  download="Premkumar_Asode_Resume.pdf"
                  onClick={() => setDownloadNotice(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs tracking-wide border border-slate-700 hover:border-cyan-500/60 bg-slate-800 hover:bg-slate-700 text-white transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume PDF</span>
                </a>
              </div>

            </div>

            {/* Right Column: PDF File info & instructions banner */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950/90 border border-slate-800 p-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider block mb-2">
                  Local PDF Configuration
                </span>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between">
                  <span>/public/Premkumar_Asode_Resume.pdf</span>
                  <FileText className="w-4 h-4 text-slate-500" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 space-y-1.5">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>How to add your latest PDF:</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Simply save your PDF file as <code className="text-cyan-300 bg-slate-950 px-1 py-0.5 rounded">Premkumar_Asode_Resume.pdf</code> directly into the <code className="text-cyan-300 bg-slate-950 px-1 py-0.5 rounded">public/</code> directory.
                </p>
                <p className="text-[11px] leading-relaxed text-slate-400">
                  You can also click <strong>View Resume</strong> to print or export to PDF anytime!
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ready for ATS screening & recruiter evaluation</span>
              </div>
            </div>

          </div>

          {/* Conditional Download Note */}
          {downloadNotice && (
            <div className="mt-6 p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 flex items-center justify-between animate-fade-in">
              <span>
                Download trigger dispatched for <code>{personalInfo.resumePath}</code>. If your custom PDF is not yet saved, save it to <code>public/Premkumar_Asode_Resume.pdf</code> or use the in-browser <strong>View Resume &gt; Print / Save as PDF</strong> feature!
              </span>
              <button
                onClick={() => setDownloadNotice(false)}
                className="text-cyan-400 hover:text-white ml-2 text-xs font-bold"
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

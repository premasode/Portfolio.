import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen,
  Briefcase,
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, experienceData, projects, skillCategories } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [downloadNote, setDownloadNote] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    // Attempt download
    setDownloadNote(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl my-8 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-white text-base sm:text-lg">
              Resume Preview — Premkumar Asode
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Print / Save as PDF button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title="Print formatted resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            {/* Download PDF button */}
            <a
              href={personalInfo.resumePath}
              download="Premkumar_Asode_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informative notification if download clicked or instructions needed */}
        {downloadNote && (
          <div className="bg-amber-500/10 border-b border-amber-500/30 px-5 py-3 text-xs text-amber-300 flex items-center justify-between no-print">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Attempted download from <code>{personalInfo.resumePath}</code>. If your custom PDF is not in the <code>public/</code> folder yet, simply copy your resume to <code>public/Premkumar_Asode_Resume.pdf</code> or use the <strong>Print / Save as PDF</strong> button above!
              </span>
            </div>
            <button onClick={() => setDownloadNote(false)} className="text-amber-400 hover:text-white ml-2">
              ✕
            </button>
          </div>
        )}

        {/* Printable Resume Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950/70 text-slate-200 print:bg-white print:text-black print:p-0 print:max-h-none print:overflow-visible">
          
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Header / Contact Info */}
            <div className="border-b border-slate-800 print:border-black pb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                  {personalInfo.name}
                </h1>
                <p className="text-cyan-400 print:text-blue-700 font-semibold text-sm mt-0.5">
                  Aspiring DevOps Engineer | Java Full Stack Developer
                </p>
                <p className="text-slate-400 print:text-gray-600 text-xs mt-1">
                  Bengaluru, Karnataka, India
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-300 print:text-black font-mono">
                <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                  <span>linkedin.com/in/premkumarasode</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                  <GithubIcon className="w-3.5 h-3.5 text-purple-400 print:text-black" />
                  <span>github.com/premasode</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
                Electronics and Communication Engineering graduate (2025) with practical expertise in Java Full Stack development and DevOps automation. Experienced in architecting Spring Boot REST APIs, containerizing services with Docker, constructing automated CI/CD pipelines in Jenkins, deploying on AWS EC2, and orchestrating containers with Kubernetes. Dedicated to reliability, zero-downtime workflows, and scalable architectures.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <strong className="text-white print:text-black">Programming:</strong> Java, Python, JavaScript (ES6+), SQL, C++
                </div>
                <div>
                  <strong className="text-white print:text-black">Java Stack:</strong> Spring Boot, REST APIs, Hibernate, JDBC, Servlets, MySQL
                </div>
                <div>
                  <strong className="text-white print:text-black">DevOps & Cloud:</strong> Docker, Kubernetes, Jenkins, Maven, AWS (EC2, S3, IAM, VPC), Terraform, Linux
                </div>
                <div>
                  <strong className="text-white print:text-black">Monitoring & Tools:</strong> Prometheus, Grafana, Nginx, Git & GitHub, Docker Compose
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                Key Engineering Projects
              </h2>

              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline font-bold text-white print:text-black">
                    <span>{proj.title}</span>
                    <span className="font-mono text-[10px] text-cyan-400 print:text-gray-600">
                      [{proj.technologies.slice(0, 4).join(', ')}]
                    </span>
                  </div>
                  <p className="text-slate-300 print:text-gray-700 leading-relaxed text-[11px] sm:text-xs">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-slate-400 print:text-gray-700 space-y-0.5 text-[11px]">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Experience & Training */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                Experience & Training
              </h2>

              <div className="text-xs space-y-1">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Java Full Stack & DevOps Hands-on Labs</span>
                  <span className="font-mono text-cyan-400 print:text-gray-600 text-[11px]">2024 - Present</span>
                </div>
                <div className="text-slate-400 print:text-gray-600">Specialized Technical Training • Bengaluru</div>
                <p className="text-slate-300 print:text-gray-700 text-[11px]">
                  Built production-style microservices in Spring Boot, configured automated CI/CD pipelines in Jenkins, containerized workflows with Docker, and provisioned cloud instances on AWS.
                </p>
              </div>

              <div className="text-xs space-y-1">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Technical Support Executive</span>
                  <span className="font-mono text-cyan-400 print:text-gray-600 text-[11px]">6 Months</span>
                </div>
                <div className="text-slate-400 print:text-gray-600">EOS Globe • Bengaluru</div>
                <p className="text-slate-300 print:text-gray-700 text-[11px]">
                  Diagnosed technical system and software issues, managed incident escalation within SLA deadlines, and ensured client resolution satisfaction.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black pb-1">
                Education
              </h2>

              <div className="text-xs flex justify-between items-start">
                <div>
                  <div className="font-bold text-white print:text-black">
                    Bachelor of Engineering (B.E.) — Electronics & Communication Engineering
                  </div>
                  <div className="text-slate-400 print:text-gray-600 text-[11px]">
                    Government Engineering College, Chamarajanagar (VTU, Belagavi)
                  </div>
                </div>
                <div className="font-mono text-cyan-400 print:text-gray-600 text-[11px] font-bold">
                  2021 – 2025
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ResumeModal;

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [permission, setPermission] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setIsSubmitted(true);

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hello Premkumar,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold block">
            // INITIATE HANDSHAKE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Connect & Collaborate
          </h2>
        </div>

        {/* Top Interactive Card matching Image 2 reference */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0e111a] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Live JSON Payload Preview (like Image 2) */}
            <div className="lg:col-span-5 rounded-2xl bg-black/60 border border-white/10 p-5 font-mono text-xs text-slate-300 space-y-2 select-text">
              <div className="text-slate-500 pb-2 border-b border-white/5 flex items-center justify-between">
                <span>// payload_preview.json</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              <div className="pt-2 text-cyan-400">
                &lt;to: <span className="text-white font-semibold">"{personalInfo.email}"</span>&gt;
              </div>
              <div className="text-emerald-400">
                contact_no: <span className="text-white font-semibold">"{personalInfo.phone}"</span>
              </div>
              <div className="text-purple-300">
                sender: <span className="text-white font-semibold">{formData.name ? `"${formData.name}"` : '[Awaiting Name]'}</span>
              </div>
              <div className="text-blue-300">
                email: <span className="text-white font-semibold">{formData.email ? `"${formData.email}"` : '[Awaiting Email]'}</span>
              </div>
              <div className="text-slate-300">
                message: <span className="text-slate-300 font-normal">{formData.message ? `"${formData.message}"` : '"[Awaiting Message]"'}</span>
              </div>
              <div className="text-slate-500 pt-2 text-[10px]">
                permission_granted: {permission ? "true" : "false"}
              </div>
            </div>

            {/* Right Column: Form Inputs & Submit Pill Button */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-white">Payload Formatted & Dispatched!</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Message forwarded to your mail client for <strong className="text-cyan-400">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs text-cyan-400 hover:underline pt-2 font-mono"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
                    />
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-sans resize-none"
                  />

                  {/* Permission Checkbox (matching Image 2) */}
                  <label className="flex items-center gap-2 text-[11px] text-slate-400 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={permission}
                      onChange={(e) => setPermission(e.target.checked)}
                      className="rounded border-white/20 bg-black/40 text-cyan-500 focus:ring-0"
                    />
                    <span>I give permission to contact me at this email address</span>
                  </label>

                  {/* Pill Submit Button (like Image 2) */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-white text-slate-950 hover:bg-cyan-300 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 cursor-pointer"
                    >
                      Submit Message
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Direct Contact Cards Strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-4 rounded-2xl bg-[#0f121a] border border-white/10 hover:border-cyan-400/50 hover:bg-[#141824] transition-all group flex items-center gap-3.5"
          >
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-left overflow-hidden">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Email Me</div>
              <div className="text-xs font-semibold text-white truncate group-hover:text-cyan-300">{personalInfo.email}</div>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phoneRaw}`}
            className="p-4 rounded-2xl bg-[#0f121a] border border-white/10 hover:border-emerald-400/50 hover:bg-[#141824] transition-all group flex items-center gap-3.5"
          >
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left overflow-hidden">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Contact No</div>
              <div className="text-xs font-semibold text-white truncate group-hover:text-emerald-300">{personalInfo.phone}</div>
            </div>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#0f121a] border border-white/10 hover:border-blue-400/50 hover:bg-[#141824] transition-all group flex items-center gap-3.5"
          >
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div className="text-left overflow-hidden">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">LinkedIn</div>
              <div className="text-xs font-semibold text-white truncate group-hover:text-blue-300">premkumarasode</div>
            </div>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#0f121a] border border-white/10 hover:border-purple-400/50 hover:bg-[#141824] transition-all group flex items-center gap-3.5"
          >
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
              <GithubIcon className="w-4 h-4" />
            </div>
            <div className="text-left overflow-hidden">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">GitHub</div>
              <div className="text-xs font-semibold text-white truncate group-hover:text-purple-300">premasode</div>
            </div>
          </a>
        </div>

        {/* Middle Metadata Strip (Exact match to Image 2) */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left py-8 border-t border-white/5 font-mono text-xs">
          
          <div className="space-y-1">
            <div className="text-slate-500 text-[10px] tracking-widest uppercase">// System Architecture</div>
            <div className="text-slate-300 font-semibold">Full-Stack Web Engineering</div>
            <div className="text-slate-400 text-[11px]">DevOps & Cloud Automation</div>
          </div>

          <div className="space-y-1 text-left md:text-center">
            <div className="text-slate-500 text-[10px] tracking-widest uppercase">// Status</div>
            <div className="text-emerald-400 font-bold flex items-center md:justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open to Opportunities</span>
            </div>
            <div className="text-slate-400 text-[11px]">Immediate Availability</div>
          </div>

          <div className="space-y-1 text-left md:text-right">
            <div className="text-slate-500 text-[10px] tracking-widest uppercase">// Region</div>
            <div className="text-slate-300 font-semibold">Bengaluru, Karnataka</div>
            <div className="text-slate-400 text-[11px]">India / Worldwide • 2025</div>
          </div>

        </div>

      </div>

      {/* GIANT 3D WATERMARK TYPOGRAPHY FILLING THE SCREEN (Exact match to SUSHMITA in Image 2) */}
      <div className="w-full text-center overflow-hidden pt-8 select-none pointer-events-none">
        <div className="giant-3d-text">
          PREMKUMAR
        </div>
      </div>

    </section>
  );
};

export default Contact;

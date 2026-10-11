import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  Sparkles, 
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mailtoTriggered, setMailtoTriggered] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // ignore
    }

    setIsSubmitted(true);

    // Prepare mailto link with pre-filled content
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hello Premkumar,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    )}`;

    // Open mail client safely
    window.location.href = mailtoUrl;
    setMailtoTriggered(true);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
    setMailtoTriggered(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Let’s Build & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Collaborate Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in hiring an entry-level DevOps Engineer or Java Full Stack Developer? Let’s connect on LinkedIn, exchange emails, or initiate a conversation directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Status Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Ready to Interview & Join</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Premkumar Asode
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open to full-time technical opportunities in <strong>Bengaluru, Karnataka</strong>, or remote/hybrid positions. Looking forward to contributing to engineering teams.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3">
              
              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                </div>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-cyan-400 hover:underline truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      linkedin.com/in/premkumarasode
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/50 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                      github.com/premasode
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </a>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-7 sm:p-8 backdrop-blur-xl shadow-2xl relative">
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Fill in the details below to initiate direct communication with Premkumar.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Message Prepared Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your message was pre-formatted and forwarded to your default mail application to deliver directly to <strong className="text-cyan-400">{personalInfo.email}</strong>.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>Communication Note:</span>
                  </div>
                  <span>
                    No external backend service is mock-claiming delivery. To guarantee you receive a swift reply, message Premkumar on LinkedIn or verify your email client opened.
                  </span>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white"
                  >
                    Connect on LinkedIn
                  </a>
                  <button
                    onClick={resetForm}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Tech Recruiter"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Opportunity for DevOps Engineer / Interview Request"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the opportunity, technical team, project scope, or inquiry..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-xs tracking-wide bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Premkumar</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center pt-1">
                  Submissions validate formatted inputs and launch a pre-populated email dispatch.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DevOpsPipeline from './components/DevOpsPipeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 relative font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
        {/* Animated Cyber / Ambient Background */}
        <BackgroundEffects />

        {/* Global Navigation */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <About />
          <DevOpsPipeline />
          <Skills />
          <Projects />
          <Experience />
          <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;

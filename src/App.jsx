import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import TechTicker from './components/TechTicker';
import Hero from './components/Hero';
import About from './components/About';
import ExecutionRoadmap from './components/ExecutionRoadmap';
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
      <div className="min-h-screen bg-[#07080b] text-slate-100 relative font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
        
        {/* Subtle Ambient Background Lighting */}
        <BackgroundEffects />

        {/* Global Navigation matching Sushmita reference */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Infinite Horizontal Tech Marquee (matching Image 1) */}
        <TechTicker />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <About />
          <ExecutionRoadmap />
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

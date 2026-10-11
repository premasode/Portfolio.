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
        
        {/* Cinematic Studio Spotlight & Background Lighting */}
        <BackgroundEffects />

        {/* Global Navigation Bar */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          {/* Hero Section with Large Cinematic Portrait & Oversized Typography */}
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          
          {/* Tech Marquee Ticker as Seamless Transition Bridge */}
          <TechTicker />

          {/* System Profile matching Image 4 */}
          <About />

          {/* Core Execution Root Map with Spotlight Beams matching Image 1 */}
          <ExecutionRoadmap />

          {/* DevOps Pipeline Simulator */}
          <DevOpsPipeline />

          {/* Skills Matrix */}
          <Skills />

          {/* Featured Works Portfolio */}
          <Projects />

          {/* Experience & Education */}
          <Experience />

          {/* Resume Download & Evaluation */}
          <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Interactive Contact & 3D Typography Footer matching Image 2 */}
          <Contact />
        </main>

        {/* Minimal Footer */}
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

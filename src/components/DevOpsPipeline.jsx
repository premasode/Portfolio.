import React, { useState, useEffect } from 'react';
import { 
  FileCode, 
  GitBranch, 
  Cpu, 
  Package, 
  CheckCircle2, 
  Boxes, 
  UploadCloud, 
  Server, 
  Activity, 
  Play, 
  RotateCcw, 
  Check, 
  Terminal, 
  ChevronRight, 
  Sparkles,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { pipelineStages } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const iconMap = {
  FileCode,
  GitBranch,
  Cpu,
  Package,
  CheckCircle2,
  Boxes,
  UploadCloud,
  Server,
  Activity
};

export const DevOpsPipeline = () => {
  const { isDark } = useTheme();
  const [selectedStageId, setSelectedStageId] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeSimulationIndex, setActiveSimulationIndex] = useState(null);
  const [simulationLogs, setSimulationLogs] = useState([]);
  const [completedStages, setCompletedStages] = useState([1]);

  const selectedStage = pipelineStages.find((s) => s.id === selectedStageId) || pipelineStages[0];

  const runSimulation = () => {
    if (isSimulating) return;

    setIsSimulating(true);
    setSimulationLogs(['🚀 [CI/CD Simulator] Starting end-to-end automated pipeline trigger...']);
    setCompletedStages([]);
    setActiveSimulationIndex(0);
    setSelectedStageId(1);

    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < pipelineStages.length) {
        setActiveSimulationIndex(currentIndex);
        setSelectedStageId(pipelineStages[currentIndex].id);
        setCompletedStages((prev) => [...prev, pipelineStages[currentIndex - 1].id]);
        setSimulationLogs((prev) => [
          ...prev,
          `✓ Stage [${pipelineStages[currentIndex - 1].shortName}] completed successfully.`,
          `⏳ Triggering [${pipelineStages[currentIndex].title}] -> Executing ${pipelineStages[currentIndex].tool}...`
        ]);
      } else {
        clearInterval(interval);
        setCompletedStages(pipelineStages.map((s) => s.id));
        setActiveSimulationIndex(null);
        setIsSimulating(false);
        setSimulationLogs((prev) => [
          ...prev,
          '🎉 [SUCCESS] Pipeline execution finished! Application running on AWS EC2 & metrics monitored in Grafana.'
        ]);
        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // ignore if confetti fails
        }
      }
    }, 1400);
  };

  const resetPipeline = () => {
    setIsSimulating(false);
    setActiveSimulationIndex(null);
    setSelectedStageId(1);
    setCompletedStages([1]);
    setSimulationLogs([]);
  };

  return (
    <section id="pipeline" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Engineering Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            End-to-End <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">CI/CD Pipeline Workflow</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Click any stage along the workflow to inspect its configuration, automation commands, and architectural purpose. Or launch the live simulation to watch the automated deployment process!
          </p>

          {/* Simulation Controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide shadow-lg transition-all ${
                isSimulating
                  ? 'bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700'
                  : 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02]'
              }`}
            >
              {isSimulating ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                  <span>Simulating Workflow...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Full CI/CD Simulation</span>
                </>
              )}
            </button>

            <button
              onClick={resetPipeline}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Visual Pipeline Stages Timeline */}
        <div className="relative mb-12">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-rose-500/30 -translate-y-1/2 z-0"></div>

          {/* Stages Grid / Scrollable Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 relative z-10">
            {pipelineStages.map((stage, idx) => {
              const IconComponent = iconMap[stage.icon] || Cpu;
              const isSelected = selectedStageId === stage.id;
              const isCompleted = completedStages.includes(stage.id);
              const isCurrentlyRunning = activeSimulationIndex === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    setSelectedStageId(stage.id);
                  }}
                  className={`relative flex flex-col items-center text-center p-3 rounded-xl border transition-all duration-300 group ${
                    isSelected
                      ? 'bg-slate-900/95 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105 z-20'
                      : isCurrentlyRunning
                      ? 'bg-cyan-950/60 border-cyan-400 animate-pulse scale-105 z-20'
                      : isCompleted
                      ? 'bg-slate-900/80 border-slate-700/80 hover:border-cyan-500/50'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 opacity-80'
                  }`}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-1 text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                    0{stage.id}
                  </div>

                  {/* Stage Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-transform duration-200 group-hover:scale-110 ${
                      isSelected || isCurrentlyRunning
                        ? `bg-gradient-to-tr ${stage.color} text-white shadow-md`
                        : isCompleted
                        ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {isCompleted && !isCurrentlyRunning && !isSelected ? (
                      <Check className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <IconComponent className="w-5 h-5" />
                    )}
                  </div>

                  {/* Stage Name */}
                  <span className="text-[11px] font-bold text-slate-200 leading-tight mb-1">
                    {stage.shortName}
                  </span>

                  {/* Tool */}
                  <span className="text-[10px] font-mono text-slate-400 line-clamp-1">
                    {stage.tool}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage Inspection & Console Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Stage Details Card */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    STAGE #{selectedStage.id}
                  </span>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {selectedStage.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {selectedStage.tool}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {selectedStage.description}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4">
                <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Pipeline Rationale:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {selectedStage.details}
                </p>
              </div>
            </div>

            {/* Quick command preview */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Executed Command / Directive:
              </span>
              <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-lg font-mono text-xs text-emerald-400 select-all overflow-x-auto">
                $ {selectedStage.commandSample}
              </div>
            </div>
          </div>

          {/* Terminal / Simulation Output Console */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 font-medium">Pipeline Console Output</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  STREAMING LOGS
                </span>
              </div>

              {/* Console log text */}
              <div className="h-56 overflow-y-auto space-y-2 text-slate-300 pr-1 scrollbar-thin">
                {isSimulating || simulationLogs.length > 0 ? (
                  simulationLogs.map((log, i) => (
                    <div
                      key={i}
                      className={
                        log.startsWith('✓')
                          ? 'text-emerald-400 font-medium'
                          : log.startsWith('🎉')
                          ? 'text-cyan-300 font-bold bg-cyan-950/40 p-2 rounded'
                          : log.startsWith('🚀')
                          ? 'text-purple-300'
                          : 'text-slate-400'
                      }
                    >
                      {log}
                    </div>
                  ))
                ) : (
                  <>
                    <div className="text-slate-500 italic">
                      // Stage output for: {selectedStage.title} ({selectedStage.tool})
                    </div>
                    <pre className="text-slate-300 whitespace-pre-wrap font-mono leading-relaxed text-[11px]">
                      {selectedStage.outputSample}
                    </pre>
                  </>
                )}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span>Status: Stage verified in production standard</span>
              <button
                onClick={() => {
                  setSelectedStageId((prev) => (prev % pipelineStages.length) + 1);
                }}
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DevOpsPipeline;

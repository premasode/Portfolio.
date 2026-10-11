import React, { useState, useEffect } from 'react';

export const IntroLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 400);
  };

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080b] text-white transition-opacity duration-700 select-none cursor-pointer ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      title="Click anywhere to enter immediately"
    >
      <div className="w-full max-w-md px-8 text-center space-y-6">
        {/* Name Header matching Keyframe 0s */}
        <div className="space-y-1">
          <div className="text-[11px] font-mono tracking-[0.3em] uppercase text-slate-400">
            SYSTEM INITIALIZATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            PREMKUMAR ASODE
          </h2>
          <div className="text-xs font-mono text-cyan-400">
            DevOps & Java Full Stack Engineer
          </div>
        </div>

        {/* Big Percentage Counter matching Keyframe 0s */}
        <div className="py-2">
          <div className="text-6xl sm:text-7xl font-black tracking-tight font-mono text-white">
            {progress}%
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="space-y-2">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-white to-purple-400 transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>LOADING MODULES</span>
            <span>{progress === 100 ? 'READY' : 'CALIBRATING...'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;

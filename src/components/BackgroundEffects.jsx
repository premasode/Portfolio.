import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const BackgroundEffects = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient glowing spheres */}
      <div
        className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl transition-opacity duration-1000 ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/15'
        }`}
      />
      <div
        className={`absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full blur-3xl transition-opacity duration-1000 ${
          isDark ? 'bg-purple-600/10' : 'bg-purple-400/15'
        }`}
      />
      <div
        className={`absolute bottom-10 left-1/4 w-96 h-96 rounded-full blur-3xl transition-opacity duration-1000 ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-400/15'
        }`}
      />

      {/* Cyber Grid Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark
            ? 'opacity-30 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
            : 'opacity-15 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
        }`}
      />

      {/* Subtle scanline aesthetic for terminal/dev feel */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? 'bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_50%,rgba(0,0,0,0.2)_51%)] bg-[length:100%_4px]'
            : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default BackgroundEffects;

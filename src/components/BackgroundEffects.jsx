import React from 'react';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Studio Lighting Backdrop (Matches Keyframe 2s, 4s, 6s) */}
      <div 
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] sm:w-[90rem] xl:w-[105rem] h-[48rem] sm:h-[62rem] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.40) 0%, rgba(254, 243, 199, 0.28) 22%, rgba(148, 163, 184, 0.16) 45%, rgba(15, 23, 42, 0.5) 70%, transparent 85%)',
          filter: 'blur(65px)'
        }}
      />

      {/* Cyan & Violet Ambient Accents on the corners */}
      <div 
        className="absolute top-10 left-5 w-[25rem] h-[25rem] rounded-full opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      
      <div 
        className="absolute top-1/4 right-5 w-[30rem] h-[30rem] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, transparent 70%)',
          filter: 'blur(90px)'
        }}
      />

      {/* Subtle Bottom Ambient Floor Reflection */}
      <div 
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[55rem] h-[25rem] rounded-full opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(148, 163, 184, 0.18) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
    </div>
  );
};

export default BackgroundEffects;

import React from 'react';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Studio Radial Spotlight behind the Hero (matches Reference Image 3 & 4) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[50rem] sm:w-[70rem] h-[40rem] sm:h-[55rem] rounded-full blur-[100px] opacity-75"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 237, 213, 0.18) 0%, rgba(148, 163, 184, 0.12) 35%, rgba(56, 189, 248, 0.06) 60%, transparent 75%)'
        }}
      />

      {/* Secondary Ambient Soft Diffusion on Left & Right */}
      <div 
        className="absolute -top-32 left-10 w-[30rem] h-[30rem] rounded-full blur-[120px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)'
        }}
      />
      
      <div 
        className="absolute top-1/3 -right-20 w-[35rem] h-[35rem] rounded-full blur-[140px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)'
        }}
      />

      {/* Subtle Bottom Ambient Floor Glow */}
      <div 
        className="absolute -bottom-40 left-1/3 w-[45rem] h-[30rem] rounded-full blur-[130px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
        }}
      />

      {/* Subtle Film Grain / Atmospheric Depth */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};

export default BackgroundEffects;

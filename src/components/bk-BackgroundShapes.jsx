import React from 'react';

/**
 * BackgroundShapes - Clean absolute background overlay
 * Placed behind fixed slide header/footer with scrollable middle content area.
 */
export default function BackgroundShapes({ variant = 'light' }) {
  if (variant === 'dark') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dark Mode Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#031945] via-[#0A3D91] to-[#010C27]" />
        
        {/* Subtle Tech Hex/Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Glow Spheres */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl" />

        {/* Dynamic Curved Tech Lines */}
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-20 text-cyan-400" viewBox="0 0 500 500" fill="none">
          <path d="M 100,0 Q 250,250 500,100 T 500,500" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6"/>
          <path d="M 200,0 Q 300,300 500,200" stroke="currentColor" strokeWidth="1" />
          <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Clean Corporate Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9]" />

      {/* Modern Dot Matrix Overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0A3D91_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Decorative Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-[#0A3D91]/10 to-[#0EA5E9]/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#1E40AF]/10 to-[#38BDF8]/10 blur-3xl" />

      {/* Structural Modern Curves */}
      <svg className="absolute right-0 bottom-0 h-full w-1/3 opacity-10 text-[#0A3D91]" viewBox="0 0 400 400" fill="none">
        <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="2" />
        <circle cx="300" cy="300" r="140" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
        <path d="M0 400 L400 0" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

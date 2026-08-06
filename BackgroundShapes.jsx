import React from 'react';

/**
 * BackgroundShapes — Dynamic tech mesh background with subtle glowing accents,
 * watermark slide numbers, dot grid pattern, and geometric corner accents.
 */
export default function BackgroundShapes({ 
  variant = 'light', 
  slideNumber = '', 
  showDotGrid = true, 
  isCover = false 
}) {
  const isDark = variant === 'dark';

  /* ── Color tokens ── */
  const gridColor   = isDark ? 'rgba(56, 189, 248, 0.07)' : 'rgba(37, 99, 235, 0.06)';
  const glowPrimary = isDark ? 'rgba(6, 182, 212, 0.15)'  : 'rgba(37, 99, 235, 0.10)';
  const glowCyan    = isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(8, 145, 178, 0.08)';
  const barCyan     = isDark ? '#0E7490' : '#38BDF8';
  const barBlue     = isDark ? '#1E40AF' : '#60A5FA';
  const barPalest   = isDark ? '#0F172A' : '#E0F2FE';
  const watermark   = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.04)';
  const dotColor    = isDark ? '#38BDF8' : '#2563EB';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none" aria-hidden="true">
      {/* ═══════════════════════════════════════════════
          DYNAMIC TECH MESH GRID PATTERN
          ═══════════════════════════════════════════════ */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ═══════════════════════════════════════════════
          SUBTLE ANIMATED BLUE GLOW ORBS
          ═══════════════════════════════════════════════ */}
      <div 
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: glowPrimary, animationDuration: '6s' }}
      />
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: glowCyan, animationDuration: '8s' }}
      />

      {/* ═══════════════════════════════════════════════
          GEOMETRIC CORNER ACCENTS (TOP-RIGHT & BOTTOM-LEFT)
          ═══════════════════════════════════════════════ */}
      <div className="absolute top-0 right-0 w-[35%] h-[25%] opacity-80">
        <div
          className="absolute -top-4 -right-8 w-[110%] h-[50%] origin-top-right opacity-40"
          style={{
            backgroundColor: barPalest,
            transform: 'rotate(-25deg) translateX(10%)',
          }}
        />
        <div
          className="absolute -top-2 -right-6 w-[100%] h-[35%] origin-top-right opacity-70"
          style={{
            backgroundColor: barBlue,
            transform: 'rotate(-25deg) translateX(15%)',
          }}
        />
        <div
          className="absolute top-0 -right-4 w-[90%] h-[25%] origin-top-right"
          style={{
            backgroundColor: barCyan,
            transform: 'rotate(-25deg) translateX(20%)',
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-[30%] h-[20%] opacity-80">
        <div
          className="absolute -bottom-4 -left-8 w-[110%] h-[50%] origin-bottom-left opacity-40"
          style={{
            backgroundColor: barPalest,
            transform: 'rotate(-25deg) translateX(-10%)',
          }}
        />
        <div
          className="absolute -bottom-2 -left-6 w-[100%] h-[35%] origin-bottom-left opacity-70"
          style={{
            backgroundColor: barBlue,
            transform: 'rotate(-25deg) translateX(-15%)',
          }}
        />
        <div
          className="absolute bottom-0 -left-4 w-[90%] h-[25%] origin-bottom-left"
          style={{
            backgroundColor: barCyan,
            transform: 'rotate(-25deg) translateX(-20%)',
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════
          GIANT WATERMARK SLIDE NUMBER
          ═══════════════════════════════════════════════ */}
      {slideNumber && !isCover && (
        <div
          className="absolute top-[8%] right-[6%] font-black italic tracking-tighter"
          style={{
            fontSize: 'clamp(7rem, 16vw, 14rem)',
            color: watermark,
            lineHeight: 0.9,
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
          }}
        >
          {slideNumber}
        </div>
      )}

      {/* ═══════════════════════════════════════════════
          DECORATIVE 6×6 DOT GRID
          ═══════════════════════════════════════════════ */}
      {showDotGrid && !isCover && (
        <div className="absolute top-[8%] right-[4%] grid grid-cols-6 gap-2 opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: dotColor }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

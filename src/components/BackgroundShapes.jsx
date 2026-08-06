import React from "react";

/**
 * BackgroundShapes — Dynamic tech mesh background with subtle glowing accents
 * and watermark slide numbers.
 */
export default function BackgroundShapes({
  variant = "light",
  slideNumber = "",
  isCover = false,
}) {
  const isDark = variant === "dark";

  /* ── Color tokens ── */
  const gridColor = isDark
    ? "rgba(56, 189, 248, 0.07)"
    : "rgba(37, 99, 235, 0.06)";
  const glowPrimary = isDark
    ? "rgba(6, 182, 212, 0.15)"
    : "rgba(37, 99, 235, 0.10)";
  const glowCyan = isDark
    ? "rgba(56, 189, 248, 0.12)"
    : "rgba(8, 145, 178, 0.08)";
  const watermark = isDark
    ? "rgba(255, 255, 255, 0.03)"
    : "rgba(15, 23, 42, 0.04)";

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none"
      aria-hidden="true"
    >
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
          backgroundSize: "40px 40px",
        }}
      />

      {/* ═══════════════════════════════════════════════
          SUBTLE ANIMATED BLUE GLOW ORBS
          ═══════════════════════════════════════════════ */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: glowPrimary, animationDuration: "6s" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: glowCyan, animationDuration: "8s" }}
      />

      {/* ═══════════════════════════════════════════════
          GIANT WATERMARK SLIDE NUMBER
          ═══════════════════════════════════════════════ */}
      {slideNumber && (
        <div
          className="absolute top-[3%] right-[10%] font-black italic tracking-tighter"
          style={{
            fontSize: "clamp(2rem, 10vw, 8rem)",
            color: watermark,
            lineHeight: 0.9,
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
          }}
        >
          {slideNumber}
        </div>
      )}
    </div>
  );
}

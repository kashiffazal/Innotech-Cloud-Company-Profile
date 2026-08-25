import React from "react";

/**
 * BackgroundShapes — Dynamic tech mesh background with subtle glowing accents
 * and watermark slide numbers, strictly adhering to agent-data color variables.
 */
export default function BackgroundShapes({
  variant = "light",
  slideNumber = "",
  isCover = false,
}) {
  const isDark = variant === "dark";

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none"
      aria-hidden="true"
    >
      {/* DYNAMIC TECH MESH GRID PATTERN */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* SUBTLE GLOW ORBS */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ backgroundColor: isDark ? "rgba(56, 189, 248, 0.15)" : "rgba(0, 153, 216, 0.08)", animationDuration: "6s" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ backgroundColor: isDark ? "rgba(15, 50, 118, 0.2)" : "rgba(15, 50, 118, 0.05)", animationDuration: "8s" }}
      />

      {/* GIANT WATERMARK SLIDE NUMBER FROM AGENT-DATA */}
      {slideNumber && (
        <div
          className="absolute top-[2%] right-[10%] font-black italic tracking-tighter"
          style={{
            fontSize: "clamp(4rem, 12vw, 9.5rem)",
            color: "var(--watermark-num)",
            lineHeight: 0.85,
            fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
          }}
        >
          {slideNumber}
        </div>
      )}
    </div>
  );
}

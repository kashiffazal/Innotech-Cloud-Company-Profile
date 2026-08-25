import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import { Sparkles, Shield, Cpu } from "lucide-react";

export default function Slide01Cover({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-8 md:p-12 lg:p-14 transition-colors duration-300 ${
        isDark
          ? "bg-[var(--bg-app)] text-white"
          : "bg-[var(--bg-app)] text-slate-800"
      }`}
    >
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="01" />

      {/* Top Header / Branding */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <img
            src={
              isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"
            }
            alt="Innotech Cloud Logo"
            className="h-10 sm:h-12 object-contain"
          />
        </div>

        <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)]">
          <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--badge-text)]">
            COMPANY PROFILE 2026
          </span>
        </div>
      </div>

      {/* Center Hero Section with Vertical Scroll Support */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-4 space-y-4 sm:space-y-5 max-w-4xl pr-1">
        <div className="inline-flex items-center space-x-2 text-[var(--badge-text)] text-xs font-extrabold uppercase tracking-widest bg-[var(--badge-bg)] px-3.5 py-1.5 rounded-full border border-[var(--badge-border)]">
          <Sparkles className="w-4 h-4 text-[var(--color-cyan)]" />
          <span>INNOTECH CLOUD • NEXT-GENERATION DIGITAL TRANSFORMATION</span>
        </div>

        <h1 className="font-black italic uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl text-[var(--color-navy)]">
          INNOTECH <span className="text-[var(--color-cyan)]">CLOUD</span>
        </h1>

        <h2 className="font-black italic uppercase tracking-tight text-xl sm:text-2xl mt-1 text-[var(--color-cyan)]">
          WHERE INNOVATION MEETS IMPLEMENTATION
        </h2>

        <p className="text-base sm:text-lg font-normal leading-relaxed max-w-2xl text-[var(--text-body)]">
          <strong className="font-bold text-[var(--color-navy)]">
            Innotech Cloud
          </strong>{" "}
          designs, develops, and scales enterprise web applications, mobile
          solutions, AI agents, and custom software systems for global industry
          leaders.
        </p>

        {/* Action Highlights */}
        <div className="flex flex-wrap gap-4 pt-2">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[var(--badge-secondary-text)] bg-[var(--badge-secondary-bg)] px-3.5 py-2 rounded-xl border border-[var(--bg-card-border)]">
            <Cpu className="w-4 h-4 text-[var(--color-cyan)]" />
            <span>AI & Automation Leaders</span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-[var(--badge-secondary-text)] bg-[var(--badge-secondary-bg)] px-3.5 py-2 rounded-xl border border-[var(--bg-card-border)]">
            <Shield className="w-4 h-4 text-[var(--color-cyan)]" />
            <span>Enterprise-Grade Security</span>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="relative z-10 flex items-center justify-between border-t border-[var(--footer-border)] pt-4 text-xs font-medium text-[var(--footer-text)]">
        <span className="font-bold text-[var(--color-navy)]">
          INNOTECH CLOUD
        </span>
        <span>http://innotechcloud.com/</span>
        <span>Slide 01 of 16</span>
      </div>
    </div>
  );
}

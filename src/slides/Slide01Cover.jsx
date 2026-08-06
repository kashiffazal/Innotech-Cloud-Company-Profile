import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import { Sparkles, Shield, Cpu } from "lucide-react";

export default function Slide01Cover({ theme = "light" }) {
  const isDark = theme === "dark";
  const titleColor = isDark ? "#E0F2FE" : "#1E3A8A";
  const accentColor = isDark ? "#38BDF8" : "#0891B2";
  const bodyColor = isDark ? "#CBD5E1" : "#334155";

  return (
    <div
      className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-8 md:p-12 lg:p-14 transition-colors duration-300 ${
        isDark ? "bg-[#0F172A] text-white" : "bg-white text-slate-800"
      }`}
    >
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="01" />

      {/* Top Header / Branding */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <img
            src={
              isDark
                ? "/assets/2-Company-Logo/Final-b2.png"
                : "/assets/2-Company-Logo/Final.png"
            }
            alt="Innotech Cloud Logo"
            className="h-10 sm:h-12 object-contain"
          />
        </div>

        <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0A3D91]/10 dark:bg-cyan-500/10 border border-[#0A3D91]/20 dark:border-cyan-500/30">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A3D91] dark:text-cyan-300">
            Company Profile 2026
          </span>
        </div>
      </div>

      {/* Center Hero Section with Vertical Scroll Support */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-4 space-y-4 sm:space-y-5 max-w-4xl pr-1">
        <div className="inline-flex items-center space-x-2 text-cyan-600 dark:text-cyan-300 text-xs font-extrabold uppercase tracking-widest bg-cyan-50 dark:bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800">
          <Sparkles className="w-4 h-4 text-cyan-500" />
          <span>Official Company Profile</span>
        </div>

        <h1
          className="font-black italic uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl"
          style={{ color: titleColor }}
        >
          INNOTECH <span style={{ color: accentColor }}>CLOUD</span>
        </h1>

        <h2
          className="font-black italic uppercase tracking-tight text-xl sm:text-2xl mt-1"
          style={{ color: isDark ? "#38BDF8" : "#0891B2" }}
        >
          Where Innovation Meets Implementation
        </h2>

        <p
          className="text-base sm:text-lg font-normal leading-relaxed max-w-2xl"
          style={{ color: bodyColor }}
        >
          Transforming ideas into scalable digital solutions. Partnering with global enterprises, SMEs, and ambitious startups to accelerate digital transformation.
        </p>

        {/* Action Highlights */}
        <div className="flex flex-wrap gap-4 pt-2">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
            <Cpu className="w-4 h-4 text-cyan-500" />
            <span>AI & Automation Leaders</span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
            <Shield className="w-4 h-4 text-blue-500" />
            <span>Enterprise-Grade Security</span>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div
        className={`relative z-10 flex items-center justify-between border-t pt-4 text-xs font-medium ${
          isDark
            ? "border-slate-800 text-slate-400"
            : "border-slate-300 text-slate-600"
        }`}
      >
        <span className="font-bold text-[#0A3D91] dark:text-cyan-300">
          INNOTECH CLOUD
        </span>
        <span>http://innotechcloud.com/</span>
        <span>Slide 01 of 16</span>
      </div>
    </div>
  );
}

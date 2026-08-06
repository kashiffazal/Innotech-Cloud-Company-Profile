import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import {
  Target,
  Compass,
  Sparkles,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
  Trophy,
} from "lucide-react";

export default function Slide03MissionVision({ theme = "light" }) {
  const isDark = theme === "dark";

  const coreValues = [
    {
      title: "Innovation",
      desc: "Adopting cutting-edge tech to solve complex business problems.",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Quality",
      desc: "Delivering bug-free, optimized, and scalable software.",
      icon: ShieldCheck,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Integrity",
      desc: "Complete transparency, ethical engineering, and privacy.",
      icon: CheckCircle2,
      color: "from-cyan-600 to-teal-600",
    },
    {
      title: "Collaboration",
      desc: "Working seamlessly alongside client teams as partners.",
      icon: HeartHandshake,
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Customer Success",
      desc: "Measuring performance by the tangible growth of our clients.",
      icon: Trophy,
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <div
      className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-white" : "bg-white text-slate-800"
      }`}
    >
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="03" />

      {/* Slide Header */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-between border-b pb-3 ${
          isDark ? "border-slate-800" : "border-slate-200"
        }`}
      >
        <div>
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">
            Strategic Direction
          </span>
          <h2
            className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5"
            style={{ color: isDark ? "#E0F2FE" : "#1E3A8A" }}
          >
            Mission, Vision &{" "}
            <span style={{ color: isDark ? "#38BDF8" : "#0891B2" }}>
              Core Values
            </span>
          </h2>
        </div>
        <img
          src={
            isDark
              ? "/assets/2-Company-Logo/Final-b2.png"
              : "/assets/2-Company-Logo/Final.png"
          }
          alt="Innotech Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 space-y-4">
        {/* Mission & Vision Twin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mission Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#031945] to-[#0A3D91] text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-wide">Our Mission</h3>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                To deliver innovative, scalable, and reliable technology
                solutions that help businesses grow, automate complex processes,
                and create exceptional digital experiences worldwide.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-white/10 text-[11px] font-semibold text-cyan-300">
              Driving Measurable Business ROI
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-lg relative overflow-hidden border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-wide">Our Vision</h3>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                To become a trusted global technology partner recognized for
                relentless innovation, unyielding product quality, and
                transformative client success across industries.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-white/10 text-[11px] font-semibold text-blue-300">
              Recognized Global Tech Partner
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0A3D91] dark:text-cyan-400">
              Our Guiding Principles
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all flex flex-col justify-between group ${
                    isDark
                      ? "bg-slate-900/90 border-slate-800 hover:border-cyan-500/50"
                      : "bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A3D91]/40 shadow-2xs"
                  }`}
                >
                  <div>
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${val.color} text-white flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4
                      className={`text-xs font-bold mb-0.5 ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {val.title}
                    </h4>
                    <p
                      className={`text-[11px] leading-snug ${isDark ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-between border-t pt-3 text-xs ${
          isDark
            ? "border-slate-800 text-slate-400"
            : "border-slate-200 text-slate-400"
        }`}
      >
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 03 of 16</span>
      </div>
    </div>
  );
}

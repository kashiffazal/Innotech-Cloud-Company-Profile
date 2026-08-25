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
      bgColor: "bg-amber-500",
    },
    {
      title: "Quality",
      desc: "Delivering bug-free, optimized, and scalable software.",
      icon: ShieldCheck,
      bgColor: "bg-blue-600",
    },
    {
      title: "Integrity",
      desc: "Complete transparency, ethical engineering, and privacy.",
      icon: CheckCircle2,
      bgColor: "bg-teal-600",
    },
    {
      title: "Collaboration",
      desc: "Working seamlessly alongside client teams as partners.",
      icon: HeartHandshake,
      bgColor: "bg-pink-600",
    },
    {
      title: "Customer Success",
      desc: "Measuring performance by the tangible growth of our clients.",
      icon: Trophy,
      bgColor: "bg-emerald-600",
    },
  ];

  return (
    <div
      className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
        isDark
          ? "bg-[var(--bg-app)] text-white"
          : "bg-[var(--bg-app)] text-slate-800"
      }`}
    >
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="03" />

      {/* Slide Header */}
      <div className="relative z-10 shrink-0 flex items-center justify-between border-b border-[var(--header-border)] pb-3">
        <div>
          <span className="text-xs font-extrabold tracking-widest text-[var(--color-cyan)] uppercase">
            Strategic Direction
          </span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5 text-[var(--color-navy)]">
            Mission, Vision &{" "}
            <span className="text-[var(--color-cyan)]">Core Values</span>
          </h2>
        </div>
        <img
          src={isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"}
          alt="Innotech Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 space-y-4">
        {/* Mission & Vision Twin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mission Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-dark-card)] text-white shadow-lg relative overflow-hidden flex flex-col justify-between border border-[var(--bg-dark-card-border)]">
            <div>
              <div className="flex items-center space-x-2.5 mb-2.5">
                <div className="p-2 rounded-xl bg-[var(--color-cyan)]/20 text-[var(--color-cyan)] border border-[var(--color-cyan)]/30">
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
            <div className="mt-3 pt-2.5 border-t border-white/10 text-[11px] font-semibold text-[var(--color-cyan)]">
              Driving Measurable Business ROI
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-dark-card-alt)] text-white shadow-lg relative overflow-hidden border border-[var(--bg-dark-card-border)] flex flex-col justify-between">
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
            <Sparkles className="w-4 h-4 text-[var(--color-cyan)]" />
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-navy)]">
              Our Guiding Principles
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] transition-all flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <div
                      className={`w-8 h-8 rounded-lg ${val.bgColor} text-white flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold mb-0.5 text-[var(--text-primary)]">
                      {val.title}
                    </h4>
                    <p className="text-[11px] leading-snug text-[var(--text-muted)]">
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
      <div className="relative z-10 shrink-0 flex items-center justify-between border-t border-[var(--footer-border)] pt-3 text-xs text-[var(--footer-text)]">
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 03 of 16</span>
      </div>
    </div>
  );
}

import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import {
  Search,
  Map,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Headset,
  TrendingUp,
} from "lucide-react";

export default function Slide15DevProcess({ theme = "light" }) {
  const isDark = theme === "dark";

  const steps = [
    {
      num: "01",
      title: "Discovery & Analysis",
      desc: "Requirements gathering, technical feasibility, and business goals alignment.",
      icon: Search,
    },
    {
      num: "02",
      title: "Architecture & Planning",
      desc: "System design, tech stack selection, database modeling, and sprint roadmaps.",
      icon: Map,
    },
    {
      num: "03",
      title: "UI/UX & Prototyping",
      desc: "Wireframing, interactive prototypes, design system creation, and user testing.",
      icon: Palette,
    },
    {
      num: "04",
      title: "Agile Development",
      desc: "Clean code engineering, two-week sprint cycles, REST/GraphQL APIs, and microservices.",
      icon: Code2,
    },
    {
      num: "05",
      title: "QA & Security Audits",
      desc: "Automated unit/integration tests, performance tuning, and penetration audits.",
      icon: CheckCircle2,
    },
    {
      num: "06",
      title: "CI/CD Deployment",
      desc: "Automated build pipelines, cloud infrastructure provisioning, and production launch.",
      icon: Rocket,
    },
    {
      num: "07",
      title: "24/7 Support & SLA",
      desc: "Active system monitoring, patch management, infrastructure scaling, and technical support.",
      icon: Headset,
    },
    {
      num: "08",
      title: "Continuous Growth",
      desc: "Data analytics review, iterative feature upgrades, and long-term tech evolution.",
      icon: TrendingUp,
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
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="15" />

      {/* Slide Header */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-between border-b pb-3 ${
          isDark ? "border-slate-800" : "border-slate-200"
        }`}
      >
        <div>
          <span className="text-xs font-bold tracking-widest text-[var(--color-cyan)] uppercase">
            Methodology & Workflow
          </span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5 text-[var(--color-navy)]">
            AGILE{" "}
            <span className="text-[var(--color-cyan)]">
              DEVELOPMENT PROCESS
            </span>
          </h2>
        </div>
        <img
          src={isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"}
          alt="Innotech Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area: 2 Rows x 4 Cols = 8 Step Cards */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between group ${
                  isDark
                    ? "bg-slate-900/90 border-slate-800 hover:border-cyan-500/50"
                    : "bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A3D91]/40 shadow-2xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-lg bg-[#0A3D91] text-white text-[11px] font-black font-mono flex items-center justify-center shadow-xs">
                      {item.num}
                    </span>
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h4
                    className={`text-xs font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-[11px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
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
        <span>Slide 15 of 16</span>
      </div>
    </div>
  );
}

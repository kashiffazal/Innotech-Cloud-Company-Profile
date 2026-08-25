import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import { Globe, Shield, Cpu, Sparkles } from "lucide-react";

export default function Slide02AboutUs({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
        isDark ? "bg-[var(--bg-app)] text-white" : "bg-[var(--bg-app)] text-slate-800"
      }`}
    >
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="02" />

      {/* Slide Header */}
      <div className="relative z-10 shrink-0 flex items-center justify-between border-b border-[var(--header-border)] pb-3">
        <div>
          <div className="flex items-center space-x-2 text-[var(--color-cyan)] mb-0.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold tracking-widest uppercase">
              Company Overview
            </span>
          </div>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl text-[var(--color-navy)]">
            About{" "}
            <span className="text-[var(--color-cyan)]">
              Innotech Cloud
            </span>
          </h2>
        </div>
        <img
          src={isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"}
          alt="Innotech Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Narrative Content & Stat Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <p className="text-base sm:text-lg font-semibold leading-relaxed text-[var(--text-body)]">
              At{" "}
              <strong className="text-[var(--color-navy)] font-extrabold">
                Innotech Cloud
              </strong>
              , we help businesses accelerate their digital transformation
              through innovative technology solutions.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
              We specialize in designing and developing scalable web
              applications, mobile apps, AI-powered solutions, and custom
              software tailored to each client's unique business goals.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
              With a focus on quality, innovation, and long-term technical
              partnerships, we empower startups, SMEs, and enterprise leaders to
              construct future-ready digital products.
            </p>
          </div>

          {/* Prominent Stat Cards */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3 sm:p-4 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] text-center shadow-xs">
              <div className="text-xl sm:text-3xl font-black text-[var(--color-navy)]">
                100+
              </div>
              <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                Projects Delivered
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] text-center shadow-xs">
              <div className="text-xl sm:text-3xl font-black text-[var(--color-cyan)]">
                99%
              </div>
              <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                Client Satisfaction
              </div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] text-center shadow-xs">
              <div className="text-xl sm:text-3xl font-black text-[var(--color-navy)]">
                24/7
              </div>
              <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                Global Support
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Feature Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          <div className="p-4 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] flex items-start space-x-3 transition-all">
            <div className="p-2.5 rounded-lg bg-[var(--color-navy-box)] text-white shrink-0 shadow-xs">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold mb-0.5 text-[var(--text-primary)]">
                Digital Transformation
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                Modernizing legacy systems into agile, cloud-native
                microservices engineered for global speed and reliability.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] flex items-start space-x-3 transition-all">
            <div className="p-2.5 rounded-lg bg-[var(--color-cyan)] text-white shrink-0 shadow-xs">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold mb-0.5 text-[var(--text-primary)]">
                AI & Automation Focus
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                Integrating custom fine-tuned LLMs, intelligent conversational
                agents, and automated decision engines.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] flex items-start space-x-3 transition-all">
            <div className="p-2.5 rounded-lg bg-[var(--color-navy-box)] text-white shrink-0 shadow-xs">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold mb-0.5 text-[var(--text-primary)]">
                Enterprise Security
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                Building bulletproof end-to-end data encryption, ISO-compliant
                protocols, and multi-region cloud disaster resiliency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 shrink-0 flex items-center justify-between border-t border-[var(--footer-border)] pt-3 text-xs text-[var(--footer-text)]">
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 02 of 16</span>
      </div>
    </div>
  );
}

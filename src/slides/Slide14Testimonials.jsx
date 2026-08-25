import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import { Quote, Star } from "lucide-react";

export default function Slide14Testimonials({ theme = "light" }) {
  const isDark = theme === "dark";

  const testimonials = [
    {
      quote:
        "Innotech Cloud transformed our candidate recruitment process with custom AI screening features. Engineering quality, delivery speed, and communication were world-class.",
      author: "David Miller",
      role: "VP of Talent Acquisition",
      company: "A Plus Hire Portal",
      rating: 5,
    },
    {
      quote:
        "Our transition to Block IMS ERP was completely seamless. They handled legacy data migration effortlessly and engineered a system that handles 14 enterprise warehouse locations.",
      author: "Sarah Jenkins",
      role: "Director of Operations",
      company: "Global Logistics Inc.",
      rating: 5,
    },
    {
      quote:
        "The payment processing architecture built by Innotech Cloud reduced checkout failure rates by 99.4%. Outstanding technical partnership and ongoing SLA support.",
      author: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Unified Money Mino",
      rating: 5,
    },
    {
      quote:
        "Webo 360 has grown 3x faster since partnering with Innotech Cloud. Their team built a scalable multi-tenant architecture that handles millions of automated marketing tasks daily.",
      author: "Elena Rostova",
      role: "Head of Product Strategy",
      company: "Webo 360 Platform",
      rating: 5,
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
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="14" />

      {/* Slide Header */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-between border-b border-[var(--header-border)] pb-3`}
      >
        <div>
          <span className="text-xs font-bold tracking-widest text-[var(--color-cyan)] uppercase">
            Client Endorsements
          </span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5 text-[var(--color-navy)]">
            CLIENT{" "}
            <span className="text-[var(--color-cyan)]">TESTIMONIALS</span>
          </h2>
        </div>
        <img
          src={isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"}
          alt="Innotech Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area: Total 4 Testimonials (2 rows x 2 cols) */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between group ${"bg-[var(--bg-card)] border border-[var(--bg-card-border)] shadow-2xs"}`}
          >
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-[#0A3D91] dark:text-cyan-400">
                  <Quote className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Quote Body */}
              <p
                className={`text-xs sm:text-sm leading-relaxed italic mb-3 ${
                  isDark ? "text-slate-200" : "text-slate-700"
                }`}
              >
                "{t.quote}"
              </p>
            </div>

            {/* Author Meta */}
            <div className="pt-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0A3D91] to-cyan-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                {t.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="min-w-0 flex-1">
                <h4
                  className={`text-xs font-extrabold truncate ${"text-[var(--text-primary)]"}`}
                >
                  {t.author}
                </h4>
                <p
                  className={`text-[10px] truncate ${isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  {t.role} &bull;{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    {t.company}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Footer */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-between border-t border-[var(--footer-border)] pt-3 text-xs text-[var(--footer-text)]`}
      >
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 14 of 16</span>
      </div>
    </div>
  );
}

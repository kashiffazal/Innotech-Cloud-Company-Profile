import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import { Globe2 } from "lucide-react";

export default function Slide13OurClients({ theme = "light" }) {
  const isDark = theme === "dark";

  const clientLogos = [
    { id: 1, path: "/assets/clients-logo/c1.png" },
    { id: 2, path: "/assets/clients-logo/c2.png" },
    { id: 3, path: "/assets/clients-logo/c3.png" },
    { id: 4, path: "/assets/clients-logo/c4.png" },
    { id: 5, path: "/assets/clients-logo/c5.png" },
    { id: 6, path: "/assets/clients-logo/c6.png" },
    { id: 7, path: "/assets/clients-logo/c7.png" },
    { id: 8, path: "/assets/clients-logo/c8.png" },
    { id: 9, path: "/assets/clients-logo/c9.png" },
    { id: 10, path: "/assets/clients-logo/c10.png" },
    { id: 11, path: "/assets/clients-logo/c11.png" },
    { id: 12, path: "/assets/clients-logo/c12.png" },
    { id: 13, path: "/assets/clients-logo/c13.png" },
    { id: 14, path: "/assets/clients-logo/c14.png" },
    { id: 15, path: "/assets/clients-logo/c15.png" },
    { id: 16, path: "/assets/clients-logo/c16.png" },
    { id: 17, path: "/assets/clients-logo/c17.png" },
    { id: 18, path: "/assets/clients-logo/c18.png" },
    { id: 19, path: "/assets/clients-logo/c1.png" },
    { id: 20, path: "/assets/clients-logo/c2.png" },
  ];

  return (
    <div
      className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
        isDark
          ? "bg-[var(--bg-app)] text-white"
          : "bg-[var(--bg-app)] text-slate-800"
      }`}
    >
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="13" />

      {/* Slide Header */}
      <div className="relative z-10 shrink-0 flex items-center justify-between border-b border-[var(--header-border)] pb-3">
        <div>
          <span className="text-xs font-extrabold tracking-widest text-[var(--color-cyan)] uppercase">
            Global Partnerships
          </span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5 text-[var(--color-navy)]">
            OUR TRUSTED{" "}
            <span className="text-[var(--color-cyan)]">CLIENTS & PARTNERS</span>
          </h2>
        </div>
        <img
          src={isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"}
          alt="Innotech Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area: 4 Rows x 5 Cols = 20 Slots Grid */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 space-y-3">
        {/* Banner */}
        <div className="p-3 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] flex items-center justify-between shadow-2xs">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-[var(--color-navy-box)] text-white">
              <Globe2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[var(--text-primary)]">
                Empowering Startups, SMEs & Enterprise Leaders
              </h3>
              <p className="text-[11px] text-[var(--text-muted)]">
                Providing reliable software engineering across North America,
                Europe, and Asia Pacific.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Rows x 5 Cols Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] flex items-center justify-center transition-all h-14 group shadow-2xs hover:border-[var(--color-cyan)]"
            >
              <img
                src={client.path}
                alt={`Client Logo ${idx + 1}`}
                className="max-h-9 max-w-full object-contain grayscale dark:grayscale-0 dark:brightness-0 dark:invert opacity-80 dark:opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 shrink-0 flex items-center justify-between border-t border-[var(--footer-border)] pt-3 text-xs text-[var(--footer-text)]">
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 13 of 16</span>
      </div>
    </div>
  );
}

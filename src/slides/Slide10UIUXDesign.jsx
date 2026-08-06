import React from 'react';
import BackgroundShapes from '../components/BackgroundShapes';
import { Palette, Search, Layers, Layout, SlidersHorizontal, Sparkles, CheckCircle2, Eye } from 'lucide-react';

export default function Slide10UIUXDesign({ theme = 'light' }) {
  const isDark = theme === 'dark';

  const uxBoxes = [
    { title: "User Research & Personas", desc: "Understanding persona needs, user journeys, and structuring information architecture.", icon: Search },
    { title: "Information Architecture", desc: "Mapping intuitive user flows and sitemaps for seamless digital navigation.", icon: Layers },
    { title: "Wireframing & Usability", desc: "Low-fidelity structural layouts to quickly validate core product functionality.", icon: Layout },
    { title: "High-Fidelity UI Design", desc: "Crafting modern pixel-perfect interfaces with rich visuals and micro-interactions.", icon: Palette },
    { title: "Interactive Prototyping", desc: "Clickable prototypes simulating actual app interactions for user testing.", icon: SlidersHorizontal },
    { title: "Design Systems & Tokens", desc: "Building comprehensive reusable component libraries for brand consistency.", icon: Eye }
  ];

  return (
    <div className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-800'
    }`}>
      <BackgroundShapes variant={isDark ? 'dark' : 'light'} slideNumber="10" />

      {/* Slide Header */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-b pb-3 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Experience Engineering</span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5" style={{ color: isDark ? "#E0F2FE" : "#1E3A8A" }}>
            UI/UX DESIGN <span style={{ color: isDark ? "#38BDF8" : "#0891B2" }}>EXCELLENCE</span>
          </h2>
        </div>
        <img src={isDark ? "/assets/2-Company-Logo/Final-b2.png" : "/assets/2-Company-Logo/Final.png"} alt="Innotech Logo" className="h-8 object-contain" />
      </div>

      {/* Scrollable Middle Content Area (Matches Slide 8 & 9 Hero + 6 Boxes Grid) */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Hero Card */}
        <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#031945] to-[#0A3D91] text-white shadow-xl flex flex-col justify-between border border-cyan-500/30">
          <div>
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300 w-fit mb-3 border border-cyan-400/30">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold leading-snug mb-2 text-white">Human-Centered Product Design</h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              We turn complex enterprise business logic into intuitive, accessible, and high-converting digital interfaces engineered for user delight and retention.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center space-x-2 text-xs text-cyan-300 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Figma &bull; Design Systems &bull; Prototyping</span>
          </div>
        </div>

        {/* Right 6 UX Solution Boxes (2 cols x 3 rows) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {uxBoxes.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className={`p-3.5 rounded-xl border flex items-start space-x-3 transition-all ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A3D91]/40 shadow-2xs'
                }`}
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`text-xs font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-t pt-3 text-xs ${
        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-400'
      }`}>
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 10 of 16</span>
      </div>
    </div>
  );
}

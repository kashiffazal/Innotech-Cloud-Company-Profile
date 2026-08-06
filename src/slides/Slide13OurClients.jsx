import React from 'react';
import BackgroundShapes from '../components/BackgroundShapes';
import { Globe2 } from 'lucide-react';

export default function Slide13OurClients({ theme = 'light' }) {
  const isDark = theme === 'dark';

  const clientLogos = [
    { id: 1, path: "/assets/3-clients-logos/c1.png" },
    { id: 2, path: "/assets/3-clients-logos/c2.png" },
    { id: 3, path: "/assets/3-clients-logos/c3.png" },
    { id: 4, path: "/assets/3-clients-logos/c4.png" },
    { id: 5, path: "/assets/3-clients-logos/c5.png" },
    { id: 6, path: "/assets/3-clients-logos/c6.png" },
    { id: 7, path: "/assets/3-clients-logos/c7.png" },
    { id: 8, path: "/assets/3-clients-logos/c8.png" },
    { id: 9, path: "/assets/3-clients-logos/c9.png" },
    { id: 10, path: "/assets/3-clients-logos/c10.png" },
    { id: 11, path: "/assets/3-clients-logos/c11.png" },
    { id: 12, path: "/assets/3-clients-logos/c12.png" },
    { id: 13, path: "/assets/3-clients-logos/c13.png" },
    { id: 14, path: "/assets/3-clients-logos/c14.png" },
    { id: 15, path: "/assets/3-clients-logos/c15.png" },
    { id: 16, path: "/assets/3-clients-logos/c16.png" },
    { id: 17, path: "/assets/3-clients-logos/c17.png" },
    { id: 18, path: "/assets/3-clients-logos/c18.png" },
    { id: 19, path: "/assets/3-clients-logos/c1.png" },
    { id: 20, path: "/assets/3-clients-logos/c2.png" }
  ];

  return (
    <div className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-800'
    }`}>
      <BackgroundShapes variant={isDark ? 'dark' : 'light'} slideNumber="13" />

      {/* Slide Header */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-b pb-3 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Global Partnerships</span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5" style={{ color: isDark ? "#E0F2FE" : "#1E3A8A" }}>
            OUR TRUSTED <span style={{ color: isDark ? "#38BDF8" : "#0891B2" }}>CLIENTS & PARTNERS</span>
          </h2>
        </div>
        <img src={isDark ? "/assets/2-Company-Logo/Final-b2.png" : "/assets/2-Company-Logo/Final.png"} alt="Innotech Logo" className="h-8 object-contain" />
      </div>

      {/* Scrollable Middle Content Area: 4 Rows x 5 Cols = 20 Slots Grid */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 space-y-3">
        {/* Banner */}
        <div className={`p-3 rounded-xl border flex items-center justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-gradient-to-r from-blue-50 to-indigo-50/60 border-blue-100'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-[#0A3D91] text-white">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Empowering Startups, SMEs & Enterprise Leaders</h3>
              <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Providing reliable software engineering across North America, Europe, and Asia Pacific.</p>
            </div>
          </div>
        </div>

        {/* 4 Rows x 5 Cols Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
          {clientLogos.map((client, idx) => (
            <div 
              key={idx}
              className={`p-2.5 rounded-xl border flex items-center justify-center transition-all h-14 group ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900' 
                  : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A3D91]/40 shadow-2xs'
              }`}
            >
              <img 
                src={client.path} 
                alt={`Client Logo ${idx + 1}`}
                className="max-h-9 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slide Footer */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-t pt-3 text-xs ${
        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-400'
      }`}>
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 13 of 16</span>
      </div>
    </div>
  );
}

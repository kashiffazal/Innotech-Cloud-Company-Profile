import React from 'react';
import { X, Check } from 'lucide-react';

export default function ThumbnailDrawer({
  isOpen,
  onClose,
  currentSlide,
  goToSlide,
  slideTitles = []
}) {
  if (!isOpen) return null;

  return (
    <div className="no-print fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col p-6 animate-fadeIn">
      {/* Drawer Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Slide Navigator</h2>
          <p className="text-xs text-slate-400">Select any slide to jump directly</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Grid of Slides */}
      <div className="flex-1 overflow-y-auto pt-6 pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {slideTitles.map((title, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              onClick={() => {
                goToSlide(idx);
                onClose();
              }}
              className={`group cursor-pointer rounded-xl p-3 border text-left transition-all relative overflow-hidden flex flex-col justify-between h-36 ${
                isActive 
                  ? 'bg-gradient-to-br from-blue-900/60 to-cyan-900/60 border-cyan-400 ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-950/50' 
                  : 'bg-slate-900/80 hover:bg-slate-800/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                  isActive ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                }`}>
                  Slide {String(idx + 1).padStart(2, '0')}
                </span>
                {isActive && (
                  <span className="p-1 rounded-full bg-cyan-400 text-slate-950">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                )}
              </div>

              {/* Title & Preview Graphic */}
              <div className="mt-2">
                <h3 className={`text-sm font-semibold line-clamp-2 ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-cyan-300'}`}>
                  {title}
                </h3>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="w-full h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
                <div className={`h-full ${isActive ? 'bg-cyan-400' : 'bg-transparent group-hover:bg-slate-600'}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

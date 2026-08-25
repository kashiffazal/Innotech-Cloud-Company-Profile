import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SlideNavigationControls({
  currentSlide,
  totalSlides,
  nextSlide,
  prevSlide,
  goToSlide,
  slideTitles = [],
  theme = 'light'
}) {
  const isDark = theme === 'dark';

  return (
    <footer className={`no-print h-12 sm:h-14 border-t transition-colors duration-300 px-2 sm:px-6 flex items-center justify-between z-50 shrink-0 select-none ${
      isDark 
        ? 'bg-slate-900/95 border-slate-800 text-white' 
        : 'bg-white/95 border-slate-200 text-slate-800 shadow-sm'
    }`}>
      {/* Left Action: Prev Button */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
          currentSlide === 0
            ? 'opacity-30 cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
            : isDark
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-300'
        }`}
      >
        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span>Prev</span>
      </button>

      {/* Center: Slide Progress & Indicators */}
      <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 max-w-[180px] xs:max-w-[240px] sm:max-w-md w-full px-1 sm:px-4">
        <div className="flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-semibold truncate max-w-full">
          <span className="text-[#0A3D91] dark:text-cyan-400 font-mono font-bold shrink-0">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">&bull;</span>
          <span className="truncate max-w-[100px] xs:max-w-[150px] sm:max-w-[280px] text-slate-700 dark:text-slate-300">
            {slideTitles[currentSlide] || `Slide ${currentSlide + 1}`}
          </span>
        </div>

        {/* Dots & Progress Line (Hidden on tiny screens to prevent clutter) */}
        <div className="w-full max-w-xs hidden sm:flex items-center space-x-1 justify-center">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              title={`Jump to Slide ${idx + 1}: ${slideTitles[idx] || ''}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-6 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-sm'
                  : 'w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Action: Next Button */}
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className={`flex items-center space-x-1 sm:space-x-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm shrink-0 ${
          currentSlide === totalSlides - 1
            ? 'opacity-30 cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-400'
            : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white'
        }`}
      >
        <span>Next</span>
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </button>
    </footer>
  );
}

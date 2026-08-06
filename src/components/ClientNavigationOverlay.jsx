import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Maximize2,
  Minimize2,
  Monitor,
  Tv,
  ZoomIn,
  ZoomOut,
  ChevronDown,
} from "lucide-react";

/**
 * Dedicated Client View & Fullscreen Mode Controls (Floating overlay)
 * Controls auto-hide after 2 seconds of mouse inactivity.
 */
export default function ClientNavigationOverlay({
  currentSlide,
  totalSlides,
  nextSlide,
  prevSlide,
  theme,
  setTheme,
  isFullscreen,
  toggleFullscreen,
  slideTitles = [],
  aspectRatioMode,
  setAspectRatioMode,
  zoomLevel = 100,
  setZoomLevel,
}) {
  const isDark = theme === "dark";
  const is4x3 = aspectRatioMode === "4:3";
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  const [isVisible, setIsVisible] = useState(true);

  // Internal input state so user can type zoom level freely (e.g. 130% or 240%)
  const [inputValue, setInputValue] = useState(`${zoomLevel}%`);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setInputValue(`${zoomLevel}%`);
  }, [zoomLevel]);

  const handleInputCommit = (valStr) => {
    const numeric = parseInt(valStr.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(numeric) && numeric >= 25 && numeric <= 500) {
      setZoomLevel(numeric);
      setInputValue(`${numeric}%`);
    } else {
      setInputValue(`${zoomLevel}%`);
    }
  };

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initial 2s timeout
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Top Right Floating Utility Bar (Ratio, Zoom, Dark/Light & Fullscreen) */}
      <div className="no-print absolute top-6 right-6 z-50 flex items-center space-x-2 bg-slate-900/85 backdrop-blur-md border border-slate-700/60 p-1.5 rounded-full shadow-2xl">
        {/* Zoom Control Pill (Fullscreen & Client View) */}
        {setZoomLevel && (
          <div className="relative flex items-center space-x-0.5 px-2 py-1 rounded-full bg-slate-800/80 border border-slate-700/50">
            <button
              onClick={() => setZoomLevel((prev) => Math.max(25, prev - 25))}
              title="Zoom Slide Out (-25%)"
              className="p-1 rounded-full hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <ZoomOut className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={(e) => e.target.select()}
              onBlur={(e) => handleInputCommit(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleInputCommit(inputValue);
                  e.target.blur();
                }
              }}
              className="w-14 text-center bg-transparent text-xs font-extrabold font-mono text-cyan-300 focus:outline-none focus:bg-slate-900 rounded py-0.5"
              title="Type custom zoom percentage e.g. 130% or 240% and press Enter"
            />

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                title="Presets Menu"
                className="p-1 rounded-full hover:bg-slate-700 text-slate-400 transition-colors"
              >
                <ChevronDown className="w-3 h-3 text-cyan-400" />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-28 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1.5 z-50 text-white"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {[50, 75, 100, 125, 150, 175, 200].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => {
                        setZoomLevel(preset);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1 text-xs hover:bg-cyan-500/20 hover:text-cyan-400 font-semibold flex items-center justify-between"
                    >
                      <span>{preset}%</span>
                      {preset === 100 && (
                        <span className="text-[10px] text-slate-400 font-normal">
                          (Normal)
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setZoomLevel((prev) => Math.min(500, prev + 25))}
              title="Zoom Slide In (+25%)"
              className="p-1 rounded-full hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        )}

        {/* Aspect Ratio Mode Toggle (16:9 vs 4:3) */}
        <button
          onClick={() => setAspectRatioMode(is4x3 ? "16:9" : "4:3")}
          title={is4x3 ? "Switch to 16:9 Widescreen" : "Switch to 4:3 Standard"}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-cyan-300 transition-all border border-slate-700/50"
        >
          {is4x3 ? (
            <Tv className="w-3.5 h-3.5 text-cyan-400" />
          ) : (
            <Monitor className="w-3.5 h-3.5 text-cyan-400" />
          )}
          <span>{is4x3 ? "4:3" : "16:9"}</span>
        </button>

        {/* Light / Dark Mode Toggle */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className="p-2 rounded-full text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-all border border-slate-700/50"
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-cyan-400" />
          )}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          title="Toggle Fullscreen"
          className="p-2 rounded-full text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-all border border-slate-700/50"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4" />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Top Left Branding Pill */}
      <div className="no-print absolute top-6 left-6 z-50 flex items-center space-x-2 bg-slate-900/85 backdrop-blur-md border border-slate-700/60 px-3.5 py-1.5 rounded-full shadow-2xl">
        <img
          src="/assets/2-Company-Logo/Final-b2.png"
          alt="Innotech Cloud"
          className="h-5 object-contain"
        />
        <div className="h-3 w-px bg-slate-700" />
        <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
          Presentation
        </span>
      </div>

      {/* Floating Left Side Prev Arrow */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        title="Previous Slide"
        className="no-print absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-slate-900/85 hover:bg-cyan-500 hover:text-slate-950 disabled:opacity-20 disabled:hover:bg-slate-900/85 disabled:hover:text-slate-400 text-slate-200 border border-slate-700/60 shadow-2xl backdrop-blur-md transition-all transform hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Floating Right Side Next Arrow */}
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        title="Next Slide"
        className="no-print absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:opacity-20 text-white shadow-2xl backdrop-blur-md transition-all transform hover:scale-110 active:scale-95 border border-cyan-400/30"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Bottom Center Floating Progress & Counter Pill */}
      <div className="no-print absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center space-y-1">
        <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/60 px-4 py-2 rounded-full shadow-2xl flex items-center space-x-3 text-xs text-slate-300">
          <span className="text-cyan-400 font-bold font-mono">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(totalSlides).padStart(2, "0")}
          </span>
          {slideTitles[currentSlide] && (
            <>
              <span className="text-slate-600">&bull;</span>
              <span className="font-semibold text-white max-w-xs truncate">
                {slideTitles[currentSlide]}
              </span>
            </>
          )}
        </div>

        {/* Subtle Progress Bar Pill */}
        <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

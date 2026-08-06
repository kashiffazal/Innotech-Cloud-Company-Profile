import React, { useState, useEffect } from "react";
import {
  Grid,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Share2,
  Sun,
  Moon,
  Eye,
  Monitor,
  Tv,
  ZoomIn,
  ZoomOut,
  ChevronDown,
} from "lucide-react";

export default function PresentationHeader({
  currentSlide,
  totalSlides,
  isPlaying,
  setIsPlaying,
  toggleDrawer,
  toggleFullscreen,
  isFullscreen,
  openShareModal,
  theme,
  setTheme,
  isClientView = false,
  aspectRatioMode,
  setAspectRatioMode,
  zoomLevel = 100,
  setZoomLevel,
}) {
  const isDark = theme === "dark";
  const is4x3 = aspectRatioMode === "4:3";

  // Internal input state so the user can type freely (e.g. 130% or 240%)
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

  return (
    <header
      className={`no-print h-16 border-b transition-colors duration-300 px-4 sm:px-6 flex items-center justify-between z-50 shrink-0 shadow-sm ${
        isDark
          ? "bg-slate-900/95 border-slate-800 text-white"
          : "bg-white/95 border-slate-200 text-slate-800 shadow-md"
      }`}
    >
      {/* Brand Logo & Presentation Title */}
      <div className="flex items-center space-x-3">
        <img
          src={
            isDark
              ? "/assets/2-Company-Logo/Final-b2.png"
              : "/assets/2-Company-Logo/Final.png"
          }
          alt="Innotech Cloud"
          className="h-7 sm:h-8 object-contain cursor-pointer"
          onClick={() => window.open("http://innotechcloud.com/", "_blank")}
        />
        <div
          className={`h-5 w-px hidden md:block ${
            isDark ? "bg-slate-700" : "bg-slate-300"
          }`}
        />
        <span
          className={`text-xs font-semibold tracking-wider uppercase hidden lg:inline-block ${
            isDark ? "text-cyan-400" : "text-[#0A3D91]"
          }`}
        >
          Company Profile Presentation
        </span>
        {isClientView && (
          <span className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-[10px] font-bold uppercase tracking-widest">
            <Eye className="w-3 h-3 text-cyan-500" />
            <span>Client Viewing Mode</span>
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-1.5 sm:space-x-2">
        {/* Slide Content Zoom Level Control (Type custom % e.g. 130% or 240%) */}
        <div
          className={`relative flex items-center space-x-0.5 p-0.5 rounded-lg border transition-all ${
            isDark
              ? "bg-slate-800 border-slate-700 text-white"
              : "bg-slate-100 border-slate-300 text-slate-800"
          }`}
        >
          <button
            onClick={() => setZoomLevel((prev) => Math.max(25, prev - 25))}
            title="Zoom Out (-25%)"
            className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <ZoomOut className="w-3.5 h-3.5 text-cyan-500" />
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
            className={`w-14 text-center bg-transparent text-xs font-extrabold font-mono focus:outline-none focus:bg-white dark:focus:bg-slate-900 rounded py-0.5 border border-transparent focus:border-cyan-500 transition-colors ${
              isDark ? "text-cyan-300" : "text-[#0A3D91]"
            }`}
            title="Type custom zoom percentage e.g. 130% or 240% and press Enter"
          />

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              title="Presets Menu"
              className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-400"
            >
              <ChevronDown className="w-3 h-3 text-cyan-500" />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 top-full mt-1.5 w-28 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl py-1.5 z-50"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {[50, 75, 100, 125, 150, 175, 200].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => {
                      setZoomLevel(preset);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-1 text-xs hover:bg-cyan-500/10 hover:text-cyan-500 dark:text-slate-200 font-semibold flex items-center justify-between"
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
            title="Zoom In (+25%)"
            className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <ZoomIn className="w-3.5 h-3.5 text-cyan-500" />
          </button>
        </div>

        {/* Aspect Ratio Mode Toggle */}
        <button
          onClick={() => setAspectRatioMode(is4x3 ? "16:9" : "4:3")}
          title={
            is4x3
              ? "Switch to 16:9 Widescreen (1920x1080)"
              : "Switch to 4:3 Standard (1024x768)"
          }
          className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isDark
              ? "bg-slate-800 hover:bg-slate-700 text-cyan-300 border-slate-700"
              : "bg-slate-100 hover:bg-slate-200 text-[#0A3D91] border-slate-300"
          }`}
        >
          {is4x3 ? (
            <Tv className="w-3.5 h-3.5" />
          ) : (
            <Monitor className="w-3.5 h-3.5" />
          )}
          <span>{is4x3 ? "4:3 Standard" : "16:9 Wide"}</span>
        </button>

        {/* Share Button (Owner Mode Only) */}
        {!isClientView && (
          <button
            onClick={openShareModal}
            title="Share presentation link with clients"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        )}

        {/* Light / Dark Mode Toggle */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isDark
              ? "bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700"
              : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
          }`}
        >
          {isDark ? (
            <Sun className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-cyan-600" />
          )}
          <span className="hidden md:inline">{isDark ? "Light" : "Dark"}</span>
        </button>

        {/* Slideshow Auto-play */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? "Pause Slideshow" : "Start Auto Slideshow"}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            isPlaying
              ? "bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/40 animate-pulse"
              : isDark
                ? "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5" />
          )}
          <span className="hidden md:inline">
            {isPlaying ? "Playing" : "Autoplay"}
          </span>
        </button>

        {/* Thumbnail Drawer */}
        <button
          onClick={toggleDrawer}
          title="Grid View / All Slides"
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isDark
              ? "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
              : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
          }`}
        >
          <Grid className="w-3.5 h-3.5 text-cyan-500" />
          <span className="hidden md:inline">Slides Index</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          title="Toggle Fullscreen Mode"
          className={`p-1.5 rounded-lg border transition-all ${
            isDark
              ? "text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border-slate-700"
              : "text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-300"
          }`}
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4" />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </header>
  );
}

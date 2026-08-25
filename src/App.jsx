import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PresentationHeader from "./components/PresentationHeader";
import SlideNavigationControls from "./components/SlideNavigationControls";
import ClientNavigationOverlay from "./components/ClientNavigationOverlay";
import ThumbnailDrawer from "./components/ThumbnailDrawer";
import ShareModal from "./components/ShareModal";

// 16 Slide Modules
import Slide01Cover from "./slides/Slide01Cover";
import Slide02AboutUs from "./slides/Slide02AboutUs";
import Slide03MissionVision from "./slides/Slide03MissionVision";
import Slide04WhyChooseUs from "./slides/Slide04WhyChooseUs";
import Slide05ServicesOverview from "./slides/Slide05ServicesOverview";
import Slide06WebDevelopment from "./slides/Slide06WebDevelopment";
import Slide07MobileAppDev from "./slides/Slide07MobileAppDev";
import Slide08CustomSoftware from "./slides/Slide08CustomSoftware";
import Slide09AISolutions from "./slides/Slide09AISolutions";
import Slide10UIUXDesign from "./slides/Slide10UIUXDesign";
import Slide11TechStack from "./slides/Slide11TechStack";
import Slide12FeaturedProjects from "./slides/Slide12FeaturedProjects";
import Slide13OurClients from "./slides/Slide13OurClients";
import Slide14Testimonials from "./slides/Slide14Testimonials";
import Slide15DevProcess from "./slides/Slide15DevProcess";
import Slide16ContactUs from "./slides/Slide16ContactUs";

export default function App() {
  const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const slideParam = parseInt(params.get("slide"), 10);
    const viewParam =
      params.get("view") === "true" || params.get("mode") === "view";
    const ratioParam = params.get("ratio");
    return {
      slide:
        !isNaN(slideParam) && slideParam >= 1 && slideParam <= 16
          ? slideParam - 1
          : 0,
      isClientView: viewParam,
      ratio: ratioParam === "4:3" || ratioParam === "16:9" ? ratioParam : null,
    };
  };

  const initialParams = getQueryParams();

  // Helper to auto-detect aspect ratio from window dimensions
  const detectAspectRatio = () => {
    if (initialParams.ratio) return initialParams.ratio;
    const windowRatio = window.innerWidth / window.innerHeight;
    return windowRatio < 1.5 ? "4:3" : "16:9";
  };

  const detectAutoZoom = (fsMode) => {
    const width = window.screen?.width || window.innerWidth;
    const height = window.screen?.height || window.innerHeight;
    // 1366 x 768 detection (<= 1440 width or <= 800 height)
    if (width <= 1440 || height <= 800) {
      return fsMode ? 125 : 75;
    }
    // 1920 x 1080 & higher resolution
    return fsMode ? 175 : 125;
  };

  const [currentSlide, setCurrentSlide] = useState(initialParams.slide);
  const [isClientView] = useState(initialParams.isClientView);
  const [aspectRatioMode, setAspectRatioMode] = useState(detectAspectRatio);
  const [zoomLevel, setZoomLevel] = useState(() => detectAutoZoom(false));
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [theme, setTheme] = useState("light");

  const isDark = theme === "dark";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // Auto toggle 'dark' class on documentElement for CSS variables & Tailwind dark mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Auto detect aspect ratio, mobile view, and zoom level on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (!initialParams.ratio) {
        const windowRatio = window.innerWidth / window.innerHeight;
        setAspectRatioMode(windowRatio < 1.5 ? "4:3" : "16:9");
      }
      setZoomLevel(detectAutoZoom(isFullscreen));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialParams.ratio, isFullscreen]);

  // Auto update zoom level whenever fullscreen mode toggles
  useEffect(() => {
    setZoomLevel(detectAutoZoom(isFullscreen));
  }, [isFullscreen]);

  const slideTitles = [
    "Cover Page",
    "About Innotech Cloud",
    "Mission, Vision & Core Values",
    "Why Choose Us",
    "Our Core Services",
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "AI & Automation Solutions",
    "UI/UX Design Excellence",
    "Technology Stack & Frameworks",
    "Featured Projects & Case Studies",
    "Our Global Clients",
    "Client Testimonials",
    "Agile Development Process",
    "Contact Us & Global HQ",
  ];

  const totalSlides = 16;

  const updateUrlSlide = (slideIndex) => {
    const url = new URL(window.location);
    url.searchParams.set("slide", slideIndex + 1);
    if (isClientView) {
      url.searchParams.set("view", "true");
    }
    window.history.replaceState({}, "", url);
  };

  const goToSlide = (idx) => {
    if (idx >= 0 && idx < totalSlides) {
      setDirection(idx > currentSlide ? 1 : -1);
      setCurrentSlide(idx);
      updateUrlSlide(idx);
    }
  };

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => {
        const next = prev + 1;
        updateUrlSlide(next);
        return next;
      });
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => {
        const next = prev - 1;
        updateUrlSlide(next);
        return next;
      });
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isDrawerOpen || isShareOpen) return;
      if (e.key === "ArrowRight" || e.key === "Space") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isDrawerOpen, isShareOpen]);

  // Slideshow Auto-advance timer (5 seconds)
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev >= totalSlides - 1) {
            setIsPlaying(false);
            return prev;
          }
          const next = prev + 1;
          updateUrlSlide(next);
          return next;
        });
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, totalSlides]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error entering fullscreen:", err);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Slide Animation Variants
  const slideVariants = {
    initial: (dir) => ({
      x: dir > 0 ? 250 : -250,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -250 : 250,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.15 },
      },
    }),
  };

  const slides = [
    <Slide01Cover key={0} theme={theme} />,
    <Slide02AboutUs key={1} theme={theme} />,
    <Slide03MissionVision key={2} theme={theme} />,
    <Slide04WhyChooseUs key={3} theme={theme} />,
    <Slide05ServicesOverview key={4} goToSlide={goToSlide} theme={theme} />,
    <Slide06WebDevelopment key={5} theme={theme} />,
    <Slide07MobileAppDev key={6} theme={theme} />,
    <Slide08CustomSoftware key={7} theme={theme} />,
    <Slide09AISolutions key={8} theme={theme} />,
    <Slide10UIUXDesign key={9} theme={theme} />,
    <Slide11TechStack key={10} theme={theme} />,
    <Slide12FeaturedProjects key={11} theme={theme} />,
    <Slide13OurClients key={12} theme={theme} />,
    <Slide14Testimonials key={13} theme={theme} />,
    <Slide15DevProcess key={14} theme={theme} />,
    <Slide16ContactUs key={15} theme={theme} />,
  ];

  // Ratio calculations (16:9 vs 4:3)
  const is4x3 = aspectRatioMode === "4:3";
  const ratioWidthMultiplier = is4x3 ? 4 / 3 : 16 / 9;
  const ratioHeightMultiplier = is4x3 ? 3 / 4 : 9 / 16;

  return (
    <div
      className={`flex flex-col h-screen w-screen overflow-hidden font-sans select-none relative transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-200 text-slate-800"
      }`}
    >
      {/* Top Header (Shown in Normal Owner Mode Only) */}
      {!isClientView && !isFullscreen && (
        <PresentationHeader
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
          toggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
          openShareModal={() => setIsShareOpen(true)}
          theme={theme}
          setTheme={setTheme}
          isClientView={isClientView}
          aspectRatioMode={aspectRatioMode}
          setAspectRatioMode={setAspectRatioMode}
          zoomLevel={zoomLevel}
          setZoomLevel={setZoomLevel}
        />
      )}

      {/* Main Slide Presentation Stage */}
      <main
        className={`flex-1 relative flex items-center justify-center overflow-hidden transition-colors duration-300 ${
          isDark ? "bg-slate-950" : "bg-slate-200/90"
        } ${isFullscreen || isMobile ? "p-0 bg-white dark:bg-slate-950" : isClientView ? "p-2 sm:p-4" : "p-3 sm:p-4"}`}
      >
        <div
          className={`overflow-hidden relative transition-all duration-300 flex flex-col bg-[var(--bg-app)] ${
            isFullscreen || isMobile
              ? "w-full h-full rounded-none border-0 shadow-none bg-[var(--bg-app)]"
              : `rounded-xl sm:rounded-2xl shadow-2xl border ${isDark ? "border-slate-800" : "border-slate-300"} ${is4x3 ? "aspect-[4/3]" : "aspect-[16/9]"}`
          }`}
          style={
            isFullscreen || isMobile
              ? { width: "100%", height: "100%" }
              : isClientView
                ? {
                    width: `min(calc(100vw - 2rem), calc((100vh - 2rem) * ${ratioWidthMultiplier}))`,
                    height: `min(calc((100vw - 2rem) * ${ratioHeightMultiplier}), calc(100vh - 2rem))`,
                  }
                : {
                    width: `min(100%, calc((100vh - 7.5rem) * ${ratioWidthMultiplier}))`,
                    height: `min(calc(100vw * ${ratioHeightMultiplier}), calc(100vh - 7.5rem))`,
                  }
          }
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full absolute inset-0 overflow-auto"
              style={{
                zoom: zoomLevel !== 100 ? `${zoomLevel}%` : undefined,
              }}
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Floating Overlay Controls (Client View OR Fullscreen Mode) */}
      {(isClientView || isFullscreen) && (
        <ClientNavigationOverlay
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          theme={theme}
          setTheme={setTheme}
          isFullscreen={isFullscreen}
          toggleFullscreen={toggleFullscreen}
          slideTitles={slideTitles}
          aspectRatioMode={aspectRatioMode}
          setAspectRatioMode={setAspectRatioMode}
          zoomLevel={zoomLevel}
          setZoomLevel={setZoomLevel}
        />
      )}

      {/* Bottom Navigation Controls (Normal Owner View Mode Only) */}
      {!isClientView && !isFullscreen && (
        <SlideNavigationControls
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          goToSlide={goToSlide}
          slideTitles={slideTitles}
          theme={theme}
        />
      )}

      {/* Grid Drawer */}
      <ThumbnailDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        slideTitles={slideTitles}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        currentSlide={currentSlide}
      />
    </div>
  );
}

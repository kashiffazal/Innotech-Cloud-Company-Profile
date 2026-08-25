import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import {
  Smartphone,
  Layers,
  Cpu,
  Database,
  Bell,
  Rocket,
  ShieldCheck,
  MapPin,
} from "lucide-react";

export default function Slide07MobileAppDev({ theme = "light" }) {
  const isDark = theme === "dark";

  const capabilities = [
    {
      title: "Cross-Platform Efficiency",
      desc: "Flutter and React Native for unified iOS & Android development with 60FPS native speed.",
      icon: Layers,
    },
    {
      title: "Native Hardware Access",
      desc: "Biometrics (FaceID/TouchID), Bluetooth BLE, camera, accelerometer, and sensor APIs.",
      icon: Cpu,
    },
    {
      title: "Offline-First Data Sync",
      desc: "Local Encrypted DB (SQLite/Realm) with automatic background cloud synchronization.",
      icon: Database,
    },
    {
      title: "Push Notification Engines",
      desc: "Targeted push messaging via Firebase Cloud Messaging (FCM) & Apple APNs.",
      icon: Bell,
    },
    {
      title: "App Store Publishing & ASO",
      desc: "End-to-end Apple App Store & Google Play publishing, guidelines compliance, and ASO.",
      icon: Rocket,
    },
    {
      title: "Real-Time Geo-Tracking",
      desc: "Background location tracking, interactive maps integration, and socket streams.",
      icon: MapPin,
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
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="07" />

      {/* Slide Header */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-between border-b border-[var(--header-border)] pb-3`}
      >
        <div>
          <span className="text-xs font-bold tracking-widest text-[var(--color-cyan)] uppercase">
            Service Breakdown
          </span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5 text-[var(--color-navy)]">
            MOBILE APP{" "}
            <span className="text-[var(--color-cyan)]">DEVELOPMENT</span>
          </h2>
        </div>
        <img
          src={isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"}
          alt="Innotech Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area (Matches Slide 6 Hero + 6 Boxes Grid) */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Hero Box (5 cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[var(--bg-dark-card)] text-white shadow-xl border border-[var(--bg-dark-card-border)] flex flex-col justify-between border border-cyan-500/30">
          <div>
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300 w-fit mb-3 border border-cyan-400/30">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold leading-snug mb-2 text-white">
              iOS & Android Mobile Solutions
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              We turn mobile app ideas into elegant, high-performing, and secure
              iOS & Android applications tailored to modern user expectations.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center space-x-2 text-xs text-cyan-300 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Flutter &bull; React Native &bull; Swift &bull; Kotlin</span>
          </div>
        </div>

        {/* Right Capability Cards (6 Boxes - 2 cols x 3 rows) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {capabilities.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border flex items-start space-x-3 transition-all ${"bg-[var(--bg-card)] border border-[var(--bg-card-border)] shadow-2xs"}`}
              >
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4
                    className={`text-xs font-bold mb-0.5 ${"text-[var(--text-primary)]"}`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-[11px] leading-relaxed ${"text-[var(--text-muted)]"}`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-between border-t border-[var(--footer-border)] pt-3 text-xs text-[var(--footer-text)]`}
      >
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 07 of 16</span>
      </div>
    </div>
  );
}

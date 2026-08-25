import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import {
  Phone,
  Mail,
  MapPin,
  QrCode,
  ExternalLink,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Slide16ContactUs({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
        isDark
          ? "bg-[var(--bg-app)] text-white"
          : "bg-[var(--bg-app)] text-slate-800"
      }`}
    >
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="16" />

      {/* Slide Header */}
      <div className="relative z-10 shrink-0 flex items-center justify-between border-b border-[var(--header-border)] pb-3">
        <div>
          <span className="text-xs font-extrabold tracking-widest text-[var(--color-cyan)] uppercase">
            Global Headquarters & Contact
          </span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5 text-[var(--color-navy)]">
            Get in Touch with{" "}
            <span className="text-[var(--color-cyan)]">Innotech Cloud</span>
          </h2>
        </div>
        <img
          src={isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"}
          alt="Innotech Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-2 pr-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-extrabold text-[var(--text-primary)]">
              Ready to Accelerate Your Digital Transformation?
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
              Contact our engineering team today to discuss your software
              project requirements, request a technical proposal, or schedule a
              free consultation.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="tel:+18439329092"
              className="p-3 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] flex items-center space-x-3 transition-all shadow-2xs hover:border-[var(--color-cyan)]"
            >
              <div className="p-2 rounded-lg bg-[var(--color-navy-box)] text-white shrink-0 shadow-xs">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  Call Us
                </span>
                <span className="text-xs font-extrabold truncate block text-[var(--text-primary)]">
                  +1 (843) 932-9092
                </span>
              </div>
            </a>

            <a
              href="mailto:info@innotechcloud.com"
              className="p-3 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] flex items-center space-x-3 transition-all shadow-2xs hover:border-[var(--color-cyan)]"
            >
              <div className="p-2 rounded-lg bg-[var(--color-navy-box)] text-white shrink-0 shadow-xs">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  Email Us
                </span>
                <span className="text-xs font-extrabold truncate block text-[var(--text-primary)]">
                  info@innotechcloud.com
                </span>
              </div>
            </a>

            <a
              href="http://innotechcloud.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] flex items-center space-x-3 transition-all sm:col-span-2 shadow-2xs hover:border-[var(--color-cyan)]"
            >
              <div className="p-2 rounded-lg bg-[var(--color-navy-box)] text-white shrink-0 shadow-xs">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                  Global Headquarters
                </span>
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  10430 TOPANGA CANYON BLVD, CHATSWORTH, 91311, CA
                </span>
              </div>
            </a>
          </div>

          {/* Connect With Us Styled Card */}
          <div className="p-3.5 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] flex flex-col justify-between transition-all shadow-2xs">
            <span className="text-[10px] font-extrabold text-[var(--color-cyan)] uppercase tracking-wider block mb-2">
              CONNECT WITH US:
            </span>
            <div className="space-y-2">
              <div className="flex items-center space-x-2.5 text-xs">
                <div className="p-1.5 rounded-lg bg-[var(--badge-bg)] text-[var(--color-navy)] dark:text-white shrink-0">
                  <Linkedin className="w-3.5 h-3.5 text-[var(--color-navy)] dark:text-white" />
                </div>
                <a
                  href="https://www.linkedin.com/company/innotechcloudofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-medium text-[var(--text-body)] hover:underline hover:text-[var(--color-cyan)] transition-colors"
                >
                  linkedin.com/company/innotechcloudofficial
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-xs">
                <div className="p-1.5 rounded-lg bg-[var(--badge-bg)] text-[var(--color-navy)] dark:text-white shrink-0">
                  <Facebook className="w-3.5 h-3.5 text-[var(--color-navy)] dark:text-white" />
                </div>
                <a
                  href="https://www.facebook.com/innotechcloudofficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-medium text-[var(--text-body)] hover:underline hover:text-[var(--color-cyan)] transition-colors"
                >
                  facebook.com/innotechcloudofficial
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-xs">
                <div className="p-1.5 rounded-lg bg-[var(--badge-bg)] text-[var(--color-navy)] dark:text-white shrink-0">
                  <Instagram className="w-3.5 h-3.5 text-[var(--color-navy)] dark:text-white" />
                </div>
                <a
                  href="https://www.instagram.com/innotechcloudofficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-medium text-[var(--text-body)] hover:underline hover:text-[var(--color-cyan)] transition-colors"
                >
                  instagram.com/innotechcloudofficial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Branded QR Code Highlight Card */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-[var(--bg-dark-card)] text-white shadow-xl flex flex-col items-center justify-between text-center relative overflow-hidden border border-[var(--bg-dark-card-border)]">
          <div className="flex items-center space-x-2 text-[var(--color-cyan)] text-xs font-bold uppercase tracking-widest mb-1">
            <QrCode className="w-4 h-4 text-[var(--color-cyan)]" />
            <span>Digital Access</span>
          </div>

          <h4 className="text-base font-black text-white">
            Scan to Visit Innotech Cloud
          </h4>
          <p className="text-[11px] text-slate-300 mb-2">
            Scan with your smartphone camera to access our live site
          </p>

          {/* Clean QR Code Container (No Hover Effect) */}
          <div className="p-2.5 bg-white rounded-2xl shadow-2xl border-4 border-[var(--color-cyan)]/40 my-auto">
            <img
              src="/assets/QR-Code.png"
              alt="Innotech Cloud Website QR Code"
              className="w-32 h-32 sm:w-36 sm:h-36 object-contain rounded-lg"
            />
          </div>

          {/* Action Button with High-Contrast Hover State */}
          <a
            href="http://innotechcloud.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-4 py-2 rounded-xl bg-[var(--color-cyan)] hover:bg-[#0080B8] dark:hover:bg-[#0284C7] text-white font-extrabold text-xs flex items-center space-x-2 shadow-lg transition-all transform hover:scale-105"
          >
            <span>innotechcloud.com</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 shrink-0 flex items-center justify-between border-t border-[var(--footer-border)] pt-3 text-xs text-[var(--footer-text)]">
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 16 of 16</span>
      </div>
    </div>
  );
}

import React from 'react';
import BackgroundShapes from '../components/BackgroundShapes';
import { Phone, Mail, MapPin, Globe, QrCode, ExternalLink, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Slide16ContactUs({ theme = 'light' }) {
  const isDark = theme === 'dark';
  const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=http://innotechcloud.com/";

  return (
    <div className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-800'
    }`}>
      <BackgroundShapes variant={isDark ? 'dark' : 'light'} slideNumber="16" />

      {/* Slide Header */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-b pb-3 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Global Headquarters & Contact</span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5" style={{ color: isDark ? "#E0F2FE" : "#1E3A8A" }}>
            Get in Touch with <span style={{ color: isDark ? "#38BDF8" : "#0891B2" }}>Innotech Cloud</span>
          </h2>
        </div>
        <img src={isDark ? "/assets/2-Company-Logo/Final-b2.png" : "/assets/2-Company-Logo/Final.png"} alt="Innotech Logo" className="h-8 object-contain" />
      </div>

      {/* Scrollable Middle Content Area */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-2 pr-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
          <div className="space-y-2">
            <h3 className={`text-base sm:text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Ready to Accelerate Your Digital Transformation?
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Contact our engineering team today to discuss your software project requirements, request a technical proposal, or schedule a free consultation.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a 
              href="tel:+18439329092"
              className={`p-3 rounded-xl border flex items-center space-x-3 transition-all ${
                isDark ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500' : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A3D91]/40 shadow-2xs'
              }`}
            >
              <div className="p-2 rounded-lg bg-[#0A3D91] text-white shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Call Us</span>
                <span className={`text-xs font-extrabold truncate block ${isDark ? 'text-white' : 'text-slate-900'}`}>+1 (843) 932-9092</span>
              </div>
            </a>

            <a 
              href="mailto:info@innotechcloud.com"
              className={`p-3 rounded-xl border flex items-center space-x-3 transition-all ${
                isDark ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500' : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A3D91]/40 shadow-2xs'
              }`}
            >
              <div className="p-2 rounded-lg bg-cyan-600 text-white shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Us</span>
                <span className={`text-xs font-extrabold truncate block ${isDark ? 'text-white' : 'text-slate-900'}`}>info@innotechcloud.com</span>
              </div>
            </a>

            <a 
              href="http://innotechcloud.com/" 
              target="_blank" 
              rel="noreferrer"
              className={`p-3 rounded-xl border flex items-center space-x-3 transition-all sm:col-span-2 ${
                isDark ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500' : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A3D91]/40 shadow-2xs'
              }`}
            >
              <div className="p-2 rounded-lg bg-slate-800 text-white shrink-0">
                <MapPin className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Global Headquarters</span>
                <span className={`text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  10430 TOPANGA CANYON BLVD, CHATSWORTH, 91311, CA
                </span>
              </div>
            </a>
          </div>

          {/* Connect With Us Styled Card */}
          <div 
            className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
              isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-2xs'
            }`}
          >
            <span className="text-[10px] font-extrabold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-2">
              CONNECT WITH US:
            </span>
            <div className="space-y-2">
              <div className="flex items-center space-x-2.5 text-xs">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-[#0A3D91] dark:text-cyan-400 shrink-0">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <a 
                  href="https://www.linkedin.com/company/innotechcloudofficial" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-mono text-xs font-medium text-slate-700 dark:text-slate-200 hover:underline hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  linkedin.com/company/innotechcloudofficial
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-xs">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-[#0A3D91] dark:text-cyan-400 shrink-0">
                  <Facebook className="w-3.5 h-3.5" />
                </div>
                <a 
                  href="https://www.facebook.com/innotechcloudofficial/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-mono text-xs font-medium text-slate-700 dark:text-slate-200 hover:underline hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  facebook.com/innotechcloudofficial
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-xs">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-[#0A3D91] dark:text-cyan-400 shrink-0">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <a 
                  href="https://www.instagram.com/innotechcloudofficial/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-mono text-xs font-medium text-slate-700 dark:text-slate-200 hover:underline hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  instagram.com/innotechcloudofficial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Branded QR Code Highlight Card */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-[#031945] via-[#0A3D91] to-slate-900 text-white shadow-xl flex flex-col items-center justify-between text-center relative overflow-hidden border border-cyan-500/30">
          <div className="flex items-center space-x-2 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-1">
            <QrCode className="w-4 h-4 text-cyan-400" />
            <span>Digital Access</span>
          </div>

          <h4 className="text-base font-black text-white">Scan to Visit Innotech Cloud</h4>
          <p className="text-[11px] text-slate-300 mb-2">Scan with your smartphone camera to access our live site</p>

          {/* QR Code Container with Frame */}
          <div className="p-2.5 bg-white rounded-2xl shadow-2xl border-4 border-cyan-400/40 relative group my-auto">
            <img 
              src={qrUrl} 
              alt="Innotech Cloud Website QR Code" 
              className="w-32 h-32 sm:w-36 sm:h-36 object-contain rounded-lg"
            />
            <div className="absolute inset-0 bg-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-[#0A3D91]" />
            </div>
          </div>

          {/* Action Button */}
          <a
            href="http://innotechcloud.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-extrabold text-xs flex items-center space-x-2 shadow-lg transition-all transform hover:scale-105"
          >
            <span>innotechcloud.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Slide Footer */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-t pt-3 text-xs ${
        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-400'
      }`}>
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 16 of 16</span>
      </div>
    </div>
  );
}

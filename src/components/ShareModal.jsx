import React, { useState } from 'react';
import { X, Copy, Check, Share2, Mail, MessageCircle, Linkedin } from 'lucide-react';

export default function ShareModal({ isOpen, onClose, currentSlide }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Build client viewing share link with view=true
  const baseUrl = window.location.origin + window.location.pathname;
  const shareUrl = `${baseUrl}?slide=${currentSlide + 1}&view=true`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:?subject=${encodeURIComponent("Innotech Cloud - Company Profile Presentation")}&body=${encodeURIComponent(`Check out the Innotech Cloud Company Profile presentation:\n\n${shareUrl}`)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Innotech Cloud Company Profile Presentation: ${shareUrl}`)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="no-print fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full text-white shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Share Client Link</h3>
              <p className="text-xs text-slate-400">Generates view-only presentation link for clients</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input & Copy Button */}
        <div className="mt-5 space-y-3">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
            Client Presentation Link (Slide {currentSlide + 1})
          </label>
          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              readOnly 
              value={shareUrl} 
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-cyan-300 font-mono select-all focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={copyToClipboard}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 shrink-0 ${
                copied 
                  ? 'bg-emerald-500 text-slate-950 shadow-md' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
            Quick Share Options
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600/20 hover:border-emerald-500/40 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-emerald-400 flex items-center justify-center space-x-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a 
              href={mailtoUrl}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-600/20 hover:border-blue-500/40 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-blue-400 flex items-center justify-center space-x-2 transition-all"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Email</span>
            </a>

            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-sky-600/20 hover:border-sky-500/40 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-sky-400 flex items-center justify-center space-x-2 transition-all"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

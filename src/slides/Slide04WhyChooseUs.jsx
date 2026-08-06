import React from 'react';
import BackgroundShapes from '../components/BackgroundShapes';
import { Users, Layers, Cpu, Layout, RefreshCw, MessageSquare, Headset, Award } from 'lucide-react';

export default function Slide04WhyChooseUs({ theme = 'light' }) {
  const isDark = theme === 'dark';

  const pillars = [
    { title: "Experienced Multidisciplinary Team", desc: "Senior engineers, AI specialists, UX strategists, and cloud architects working in harmony.", icon: Users, badge: "Expertise" },
    { title: "Modern Technology Stack", desc: "Cutting-edge frameworks including React, Next.js, Node, FastAPI, Flutter, and OpenAI APIs.", icon: Cpu, badge: "Tech Leadership" },
    { title: "Scalable Software Architecture", desc: "Cloud-native microservices designed to seamlessly handle millions of requests.", icon: Layers, badge: "Future Proof" },
    { title: "User-Focused Design", desc: "Intuitive, high-converting interfaces crafted through rigorous user research.", icon: Layout, badge: "UX Excellence" },
    { title: "Agile Development Process", desc: "Iterative sprint cycles with rapid feedback loops and continuous delivery.", icon: RefreshCw, badge: "Fast Execution" },
    { title: "Transparent Communication", desc: "Direct access to lead developers, real-time Slack/Teams updates, and sprint demos.", icon: MessageSquare, badge: "Full Clarity" },
    { title: "Long-Term Technical Support", desc: "Post-deployment maintenance, active monitoring, security patches, and SLA guarantees.", icon: Headset, badge: "Reliability" },
    { title: "Quality-Driven Delivery", desc: "Comprehensive automated unit/integration testing ensuring zero-compromise code quality.", icon: Award, badge: "Zero Defect" }
  ];

  return (
    <div className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-800'
    }`}>
      <BackgroundShapes variant={isDark ? 'dark' : 'light'} slideNumber="04" />

      {/* Slide Header (Fixed Top) */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-b pb-3 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Value Proposition</span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5" style={{ color: isDark ? "#E0F2FE" : "#1E3A8A" }}>
            Why Choose <span style={{ color: isDark ? "#38BDF8" : "#0891B2" }}>Innotech Cloud</span>
          </h2>
        </div>
        <img src={isDark ? "/assets/2-Company-Logo/Final-b2.png" : "/assets/2-Company-Logo/Final.png"} alt="Innotech Logo" className="h-8 object-contain" />
      </div>

      {/* Scrollable Middle Content Area Only */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between group ${
                  isDark 
                    ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40' 
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A3D91]/40 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-[#0A3D91] text-white shadow-sm group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-extrabold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase bg-blue-50 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-blue-100 dark:border-slate-700">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className={`text-xs font-bold mb-1 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-[11px] leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer (Fixed Bottom) */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-t pt-3 text-xs ${
        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-400'
      }`}>
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 04 of 16</span>
      </div>
    </div>
  );
}

import React from 'react';
import BackgroundShapes from '../components/BackgroundShapes';
import { Globe, Smartphone, Code2, Palette, Bot, Sparkles, BrainCircuit, TrendingUp } from 'lucide-react';

export default function Slide05ServicesOverview({ goToSlide, theme = 'light' }) {
  const isDark = theme === 'dark';

  const services = [
    { title: "Web Development", desc: "Fast, secure, responsive, and scalable websites, SaaS platforms, and web applications.", icon: Globe, targetSlide: 5, color: "from-blue-600 to-indigo-600" },
    { title: "Mobile App Development", desc: "Native & cross-platform Android & iOS apps using Flutter and React Native.", icon: Smartphone, targetSlide: 6, color: "from-cyan-600 to-teal-600" },
    { title: "Custom Software Development", desc: "Tailored ERP, CRM, business dashboards, internal workflow tools, and cloud apps.", icon: Code2, targetSlide: 7, color: "from-[#0A3D91] to-blue-800" },
    { title: "UI/UX Design", desc: "Human-centered user research, interactive wireframes, high-fidelity UI, and design systems.", icon: Palette, targetSlide: 9, color: "from-purple-600 to-indigo-600" },
    { title: "AI Chatbots", desc: "Automated, intelligent conversational agents for 24/7 customer support and engagement.", icon: Bot, targetSlide: 8, color: "from-sky-600 to-cyan-600" },
    { title: "ChatGPT Integration", desc: "Integrating OpenAI GPT-4 and LLM models directly into business platforms.", icon: Sparkles, targetSlide: 8, color: "from-emerald-600 to-teal-600" },
    { title: "Machine Learning Solutions", desc: "Predictive analytics, natural language processing, and automated decision engines.", icon: BrainCircuit, targetSlide: 8, color: "from-violet-600 to-purple-600" },
    { title: "Digital Marketing", desc: "Data-driven SEO, performance marketing, content strategy, and brand acceleration.", icon: TrendingUp, targetSlide: 15, color: "from-amber-600 to-orange-600" }
  ];

  return (
    <div className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-800'
    }`}>
      <BackgroundShapes variant={isDark ? 'dark' : 'light'} slideNumber="05" />

      {/* Slide Header (Fixed Top) */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-b pb-3 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Service Offerings</span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5" style={{ color: isDark ? "#E0F2FE" : "#1E3A8A" }}>
            Comprehensive <span style={{ color: isDark ? "#38BDF8" : "#0891B2" }}>Technology Services</span>
          </h2>
        </div>
        <img src={isDark ? "/assets/2-Company-Logo/Final-b2.png" : "/assets/2-Company-Logo/Final.png"} alt="Innotech Logo" className="h-8 object-contain" />
      </div>

      {/* Scrollable Middle Content Area Only */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                onClick={() => goToSlide && goToSlide(item.targetSlide)}
                className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between cursor-pointer group ${
                  isDark 
                    ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900' 
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-[#0A3D91]/40 hover:shadow-md'
                }`}
              >
                <div>
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-tr ${item.color} text-white flex items-center justify-center mb-2.5 shadow-sm group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className={`text-xs font-bold mb-1 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-[11px] leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-[#0A3D91] dark:text-cyan-400">
                  <span>Explore Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
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
        <span>Slide 05 of 16</span>
      </div>
    </div>
  );
}

import React from 'react';
import BackgroundShapes from '../components/BackgroundShapes';
import { Cpu, Server, Cloud, Bot, Layout, Smartphone } from 'lucide-react';

export default function Slide11TechStack({ theme = 'light' }) {
  const isDark = theme === 'dark';

  const techCategories = [
    {
      category: "Frontend Stack",
      icon: Layout,
      icons: [
        { name: "React", src: "/assets/4-icon-on-current-site/reactJs.svg" },
        { name: "Next.js", src: "/assets/4-icon-on-current-site/nextJs.svg" },
        { name: "Angular", src: "/assets/4-icon-on-current-site/angularJs.svg" },
        { name: "Vue.js", src: "/assets/4-icon-on-current-site/vueJs.svg" },
        { name: "TypeScript", src: "/assets/4-icon-on-current-site/Typescript.svg" },
        { name: "JavaScript", src: "/assets/4-icon-on-current-site/javascript.svg" },
        { name: "HTML5", src: "/assets/4-icon-on-current-site/html.svg" },
        { name: "CSS3", src: "/assets/4-icon-on-current-site/css.svg" }
      ]
    },
    {
      category: "Backend & APIs",
      icon: Server,
      icons: [
        { name: "Node.js", src: "/assets/4-icon-on-current-site/nodeJs.svg" },
        { name: ".NET", src: "/assets/4-icon-on-current-site/Dot-Net.svg" },
        { name: "Java", src: "/assets/4-icon-on-current-site/java.svg" },
        { name: "FastAPI", src: "/assets/4-icon-on-current-site/FastAPI.svg" },
        { name: "Flask", src: "/assets/4-icon-on-current-site/Flask.svg" },
        { name: "Python", src: "/assets/4-icon-on-current-site/python.svg" },
        { name: "Laravel", src: "/assets/4-icon-on-current-site/laraval.svg" },
        { name: "GraphQL", src: "/assets/4-icon-on-current-site/graphQL.svg" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      icons: [
        { name: "AWS", src: "/assets/4-icon-on-current-site/aws.svg" },
        { name: "Azure", src: "/assets/4-icon-on-current-site/azure.svg" },
        { name: "Firebase", src: "/assets/4-icon-on-current-site/Firebase.svg" },
        { name: "Docker", src: "/assets/4-icon-on-current-site/Docker.svg" },
        { name: "Kubernetes", src: "/assets/4-icon-on-current-site/Kubernetes.svg" },
        { name: "Heroku", src: "/assets/4-icon-on-current-site/Heroku.svg" },
        { name: "MongoDB", src: "/assets/4-icon-on-current-site/Mongodb.svg" },
        { name: "PostgreSQL", src: "/assets/4-icon-on-current-site/PostgreSQL.svg" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Bot,
      icons: [
        { name: "ChatGPT", src: "/assets/4-icon-on-current-site/ChatGPT-Integration.svg" },
        { name: "OpenAI API", src: "/assets/4-icon-on-current-site/OpenAI API.svg" },
        { name: "Hugging Face", src: "/assets/4-icon-on-current-site/Hugging Face.svg" },
        { name: "TensorFlow", src: "/assets/4-icon-on-current-site/TensorFlow.svg" },
        { name: "Rasa AI", src: "/assets/4-icon-on-current-site/Rasa.svg" },
        { name: "AI Chatbots", src: "/assets/4-icon-on-current-site/AI-Chatbot.svg" }
      ]
    },
    {
      category: "Mobile Stack",
      icon: Smartphone,
      icons: [
        { name: "Flutter", src: "/assets/4-icon-on-current-site/Flutter.svg" },
        { name: "React Native", src: "/assets/4-icon-on-current-site/reactJs.svg" },
        { name: "iOS Swift", src: "/assets/4-icon-on-current-site/Swift.svg" },
        { name: "Android Kotlin", src: "/assets/4-icon-on-current-site/Kotlin.svg" }
      ]
    },
    {
      category: "CMS & E-Commerce",
      icon: Cpu,
      icons: [
        { name: "WordPress", src: "/assets/4-icon-on-current-site/wordpress.svg" },
        { name: "Drupal", src: "/assets/4-icon-on-current-site/Drupal.svg" },
        { name: "Joomla", src: "/assets/4-icon-on-current-site/Joomla.svg" },
        { name: "Shopify", src: "/assets/4-icon-on-current-site/shopify.svg" },
        { name: "WooCommerce", src: "/assets/4-icon-on-current-site/Woocommerce.svg" },
        { name: "Magento", src: "/assets/4-icon-on-current-site/Magento.svg" }
      ]
    }
  ];

  return (
    <div className={`slide-container relative w-full h-full overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-800'
    }`}>
      <BackgroundShapes variant={isDark ? 'dark' : 'light'} slideNumber="11" />

      {/* Slide Header */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-b pb-3 ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">Engineering Capabilities</span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5" style={{ color: isDark ? "#E0F2FE" : "#1E3A8A" }}>
            TECHNOLOGY <span style={{ color: isDark ? "#38BDF8" : "#0891B2" }}>STACK</span>
          </h2>
        </div>
        <img src={isDark ? "/assets/2-Company-Logo/Final-b2.png" : "/assets/2-Company-Logo/Final.png"} alt="Innotech Logo" className="h-8 object-contain" />
      </div>

      {/* Scrollable Middle Content Area: Professional 6-Card Matrix */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {techCategories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div 
              key={idx}
              className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b pb-2 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-extrabold text-[#0A3D91] dark:text-cyan-300 uppercase tracking-wider">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-slate-400 font-mono text-[9px] bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded font-bold">
                    {cat.icons.length} Tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.icons.map((ic, i) => (
                    <div 
                      key={i}
                      className={`flex items-center space-x-1.5 px-2 py-1 rounded-lg border text-xs font-semibold group ${
                        isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700 shadow-2xs'
                      }`}
                    >
                      <img 
                        src={ic.src} 
                        alt={ic.name} 
                        className="w-3.5 h-3.5 object-contain group-hover:scale-110 transition-transform" 
                      />
                      <span className="text-[11px]">{ic.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Footer */}
      <div className={`relative z-10 shrink-0 flex items-center justify-between border-t pt-3 text-xs ${
        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-400'
      }`}>
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 11 of 16</span>
      </div>
    </div>
  );
}

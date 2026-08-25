import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import { Cpu, Server, Cloud, Bot, Layout, Smartphone } from "lucide-react";

export default function Slide11TechStack({ theme = "light" }) {
  const isDark = theme === "dark";

  const techCategories = [
    {
      category: "Frontend Stack",
      icon: Layout,
      icons: [
        { name: "React", src: "/assets/tech-icons/reactJs.svg" },
        { name: "Next.js", src: "/assets/tech-icons/nextJs.svg" },
        {
          name: "Angular",
          src: "/assets/tech-icons/angularJs.svg",
        },
        { name: "Vue.js", src: "/assets/tech-icons/vueJs.svg" },
        {
          name: "TypeScript",
          src: "/assets/tech-icons/Typescript.svg",
        },
        {
          name: "JavaScript",
          src: "/assets/tech-icons/javascript.svg",
        },
        { name: "HTML5", src: "/assets/tech-icons/html.svg" },
        { name: "CSS3", src: "/assets/tech-icons/css.svg" },
      ],
    },
    {
      category: "Backend & APIs",
      icon: Server,
      icons: [
        { name: "Node.js", src: "/assets/tech-icons/nodeJs.svg" },
        { name: ".NET", src: "/assets/tech-icons/Dot-Net.svg" },
        { name: "Java", src: "/assets/tech-icons/java.svg" },
        { name: "FastAPI", src: "/assets/tech-icons/FastAPI.svg" },
        { name: "Flask", src: "/assets/tech-icons/Flask.svg" },
        { name: "Python", src: "/assets/tech-icons/python.svg" },
        { name: "Laravel", src: "/assets/tech-icons/laraval.svg" },
        { name: "GraphQL", src: "/assets/tech-icons/graphQL.svg" },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      icons: [
        { name: "AWS", src: "/assets/tech-icons/aws.svg" },
        { name: "Azure", src: "/assets/tech-icons/azure.svg" },
        {
          name: "Firebase",
          src: "/assets/tech-icons/Firebase.svg",
        },
        { name: "Docker", src: "/assets/tech-icons/Docker.svg" },
        {
          name: "Kubernetes",
          src: "/assets/tech-icons/Kubernetes.svg",
        },
        { name: "Heroku", src: "/assets/tech-icons/Heroku.svg" },
        { name: "MongoDB", src: "/assets/tech-icons/Mongodb.svg" },
        {
          name: "PostgreSQL",
          src: "/assets/tech-icons/PostgreSQL.svg",
        },
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: Bot,
      icons: [
        {
          name: "ChatGPT",
          src: "/assets/tech-icons/ChatGPT-Integration.svg",
        },
        {
          name: "OpenAI API",
          src: "/assets/tech-icons/OpenAI API.svg",
        },
        {
          name: "Hugging Face",
          src: "/assets/tech-icons/Hugging Face.svg",
        },
        {
          name: "TensorFlow",
          src: "/assets/tech-icons/TensorFlow.svg",
        },
        { name: "Rasa AI", src: "/assets/tech-icons/Rasa.svg" },
        {
          name: "AI Chatbots",
          src: "/assets/tech-icons/AI-Chatbot.svg",
        },
      ],
    },
    {
      category: "Mobile Stack",
      icon: Smartphone,
      icons: [
        { name: "Flutter", src: "/assets/tech-icons/Flutter.svg" },
        {
          name: "React Native",
          src: "/assets/tech-icons/reactJs.svg",
        },
        { name: "iOS Swift", src: "/assets/tech-icons/Swift.svg" },
        {
          name: "Android Kotlin",
          src: "/assets/tech-icons/Kotlin.svg",
        },
      ],
    },
    {
      category: "CMS & E-Commerce",
      icon: Cpu,
      icons: [
        {
          name: "WordPress",
          src: "/assets/tech-icons/wordpress.svg",
        },
        { name: "Drupal", src: "/assets/tech-icons/Drupal.svg" },
        { name: "Joomla", src: "/assets/tech-icons/Joomla.svg" },
        { name: "Shopify", src: "/assets/tech-icons/shopify.svg" },
        {
          name: "WooCommerce",
          src: "/assets/tech-icons/Woocommerce.svg",
        },
        { name: "Magento", src: "/assets/tech-icons/Magento.svg" },
      ],
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
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="11" />

      {/* Slide Header */}
      <div className="relative z-10 shrink-0 flex items-center justify-between border-b border-[var(--header-border)] pb-3">
        <div>
          <span className="text-xs font-extrabold tracking-widest text-[var(--color-cyan)] uppercase">
            Engineering Capabilities
          </span>
          <h2 className="font-black italic uppercase tracking-tight text-2xl sm:text-3xl mt-0.5 text-[var(--color-navy)]">
            TECHNOLOGY <span className="text-[var(--color-cyan)]">STACK</span>
          </h2>
        </div>
        <img
          src={isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"}
          alt="Innotech Logo"
          className="h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area: Professional 6-Card Matrix */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 my-auto py-3 pr-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {techCategories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[var(--bg-card-border)] bg-[var(--bg-card)] transition-all flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-[var(--bg-card-border)] pb-2">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 rounded-md bg-[var(--badge-bg)] text-[var(--color-cyan)] shrink-0">
                      <IconComp className="w-4 h-4 text-[var(--color-cyan)]" />
                    </div>
                    <h3 className="text-xs font-extrabold text-[var(--color-navy)] uppercase tracking-wider">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[var(--text-muted)] font-mono text-[9px] bg-[var(--badge-secondary-bg)] px-1.5 py-0.5 rounded font-bold border border-[var(--bg-card-border)]">
                    {cat.icons.length} Tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.icons.map((ic, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-1.5 px-2 py-1 rounded-lg border border-[var(--bg-card-border)] bg-[var(--bg-app)] text-[var(--text-primary)] text-xs font-semibold shadow-2xs group hover:border-[var(--color-cyan)]"
                    >
                      <img
                        src={ic.src}
                        alt={ic.name}
                        className="w-3.5 h-3.5 object-contain dark:brightness-0 dark:invert dark:opacity-95 group-hover:scale-110 transition-transform"
                      />
                      <span className="text-[11px] font-bold">{ic.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Footer */}
      <div className="relative z-10 shrink-0 flex items-center justify-between border-t border-[var(--footer-border)] pt-3 text-xs text-[var(--footer-text)]">
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 11 of 16</span>
      </div>
    </div>
  );
}

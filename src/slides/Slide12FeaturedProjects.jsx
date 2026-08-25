import React from "react";
import BackgroundShapes from "../components/BackgroundShapes";
import { ArrowUpRight } from "lucide-react";

export default function Slide12FeaturedProjects({ theme = "light" }) {
  const isDark = theme === "dark";

  const projects = [
    {
      name: "A Plus Hire Portal",
      category: "HR Tech & SaaS Platform",
      desc: "Comprehensive recruitment, job posting, candidate tracking, and AI automated applicant screening.",
      image: "/assets/portfolio/a-plus-hire-1.jpg",
      tags: ["React", "Node.js", "MongoDB", "AI Screening"],
    },
    {
      name: "Block IMS Enterprise",
      category: "ERP & Inventory System",
      desc: "Multi-warehouse supply chain management, real-time inventory sync, barcode scanning, and reporting.",
      image: "/assets/portfolio/block-ims-1.jpg",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    },
    {
      name: "Unified Money Mino",
      category: "FinTech & Payment Portal",
      desc: "Cross-border payment processing platform with automated KYC verification, wallet transfers, and security compliance.",
      image: "/assets/portfolio/umm-1.webp",
      tags: ["Angular", "Python", "FastAPI", "Stripe API"],
    },
    {
      name: "Webo 360 Platform",
      category: "Digital Marketing SaaS",
      desc: "Automated SEO tracking, social media campaign scheduler, competitor intelligence, and automated PDF reporting.",
      image: "/assets/portfolio/webo360-1.png",
      tags: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
    },
    {
      name: "Y-CMS Enterprise Platform",
      category: "Custom Content Management",
      desc: "Headless content management architecture engineered for high-traffic multi-lingual corporate portals.",
      image: "/assets/portfolio/y-cms-1.png",
      tags: ["React", "Headless CMS", "GraphQL", "AWS"],
    },
    {
      name: "Innotech Digital Web Portals",
      category: "Enterprise Web Applications",
      desc: "Suites of high-conversion corporate web platforms, business portals, and customer self-service web apps.",
      image: "/assets/portfolio/WEBO-Software-Solutions.webp",
      tags: ["Next.js", "Tailwind CSS", "REST APIs", "Node"],
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
      <BackgroundShapes variant={isDark ? "dark" : "light"} slideNumber="12" />

      {/* Slide Header */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-between border-b border-[var(--header-border)] pb-2 sm:pb-3`}
      >
        <div>
          <span className="text-xs font-bold tracking-widest text-[var(--color-cyan)] uppercase">
            Track Record
          </span>
          <h2 className="font-black italic uppercase tracking-tight text-xl sm:text-2xl md:text-3xl mt-0.5 text-[var(--color-navy)]">
            FEATURED PROJECTS &{" "}
            <span className="text-[var(--color-cyan)]">CASE STUDIES</span>
          </h2>
        </div>
        <img
          src={isDark ? "/assets/logo/Final-b2.png" : "/assets/logo/Final.png"}
          alt="Innotech Logo"
          className="h-7 sm:h-8 object-contain"
        />
      </div>

      {/* Scrollable Middle Content Area: 6 Projects with Image Thumbnails */}
      <div className="relative z-10 flex-1 overflow-y-auto min-h-0 py-2 pr-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`rounded-xl border overflow-hidden transition-all flex flex-col justify-between group ${"bg-[var(--bg-card)] border border-[var(--bg-card-border)] shadow-2xs"}`}
            >
              {/* Image Thumbnail */}
              <div className="relative h-44 sm:h-24 md:h-28 w-full overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-slate-900/70 text-cyan-400 backdrop-blur-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-extrabold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-0.5">
                    {proj.category}
                  </span>
                  <h3
                    className={`text-xs font-bold mb-0.5 leading-snug ${"text-[var(--text-primary)]"}`}
                  >
                    {proj.name}
                  </h3>
                  <p
                    className={`text-[10.5px] leading-relaxed line-clamp-2 ${"text-[var(--text-muted)]"}`}
                  >
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1.5 mt-1.5 border-t border-slate-200 dark:border-slate-800">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${
                        isDark
                          ? "bg-slate-800 text-slate-300"
                          : "bg-white text-slate-700 border border-slate-200"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Footer */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-between border-t border-[var(--footer-border)] pt-3 text-xs text-[var(--footer-text)]`}
      >
        <span className="font-semibold">Innotech Cloud Profile</span>
        <span>Slide 12 of 16</span>
      </div>
    </div>
  );
}

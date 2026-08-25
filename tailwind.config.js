/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--color-navy)",
          cyan: "var(--color-cyan)",
          cyanLight: "var(--color-cyan-light)",
          cyanBorder: "var(--color-cyan-border)",
          darkCard: "var(--bg-dark-card)",
          darkCardAlt: "var(--bg-dark-card-alt)",
          darkCardBorder: "var(--bg-dark-card-border)",
          card: "var(--bg-card)",
          cardBorder: "var(--bg-card-border)",
          textPrimary: "var(--text-primary)",
          textCyan: "var(--text-cyan)",
          textBody: "var(--text-body)",
          textMuted: "var(--text-muted)",
          badgeBg: "var(--badge-bg)",
          badgeBorder: "var(--badge-border)",
          badgeText: "var(--badge-text)",
          badgeSecondaryBg: "var(--badge-secondary-bg)",
          badgeSecondaryText: "var(--badge-secondary-text)",
        },
        innotech: {
          navy: "#0F3276",
          cyan: "#0099D8",
          deep: "#082859",
          slate: "#0F172A",
          muted: "#64748B",
          light: "#F8FAFC",
          card: "#F4F7FA",
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'corporate': '0 10px 30px -5px rgba(15, 50, 118, 0.08), 0 4px 6px -2px rgba(15, 50, 118, 0.03)',
        'corporate-hover': '0 20px 40px -10px rgba(15, 50, 118, 0.15), 0 8px 12px -4px rgba(15, 50, 118, 0.05)',
        'glow': '0 0 25px rgba(0, 153, 216, 0.25)',
      },
      aspectRatio: {
        'slide': '16 / 9',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        innotech: {
          navy: "#0A3D91",
          deep: "#031945",
          royal: "#1E40AF",
          accent: "#2563EB",
          cyan: "#0EA5E9",
          slate: "#0F172A",
          muted: "#475569",
          light: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'corporate': '0 10px 30px -5px rgba(10, 61, 145, 0.08), 0 4px 6px -2px rgba(10, 61, 145, 0.03)',
        'corporate-hover': '0 20px 40px -10px rgba(10, 61, 145, 0.15), 0 8px 12px -4px rgba(10, 61, 145, 0.05)',
        'glow': '0 0 25px rgba(14, 165, 233, 0.25)',
      },
      aspectRatio: {
        'slide': '16 / 9',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F2",
        "cream-deep": "#F3EBE0",
        forest: "#2D4A3E",
        "forest-light": "#3F6356",
        wine: "#7A2E3A",
        "wine-light": "#9B4251",
        gold: "#C9A962",
        "gold-light": "#D9BE84",
        ink: "#1F2937",
        "ink-soft": "#4B5563",
        "ink-mute": "#9CA3AF",
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"Cormorant Garamond"', '"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(45, 74, 62, 0.06)",
        card: "0 8px 32px rgba(45, 74, 62, 0.08)",
        lift: "0 16px 48px rgba(45, 74, 62, 0.12)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blob-morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "fade-in-delay-1": "fade-in 0.6s ease-out 0.1s both",
        "fade-in-delay-2": "fade-in 0.6s ease-out 0.2s both",
        "fade-in-delay-3": "fade-in 0.6s ease-out 0.3s both",
        "blob-morph": "blob-morph 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Pop Brutalism Color Palette
        "pop-bg": "#e0e7ff", // Light Indigo background
        "pop-pink": "#ff90e8", // Brand/Highlight
        "pop-teal": "#23a094", // Success/Secondary
        "pop-yellow": "#ffc900", // Warning/Active
        "pop-red": "#ff6b6b", // Danger
      },
      boxShadow: {
        "pop": "4px 4px 0px 0px #000",
        "pop-gray": "4px 4px 0px 0px #888",
        "pop-sm": "2px 2px 0px 0px #000",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;

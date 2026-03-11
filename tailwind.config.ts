import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },

    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#2563eb",
        accent: "#f59e0b",

        background: "#f8fafc",
        dark: "#020617",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        card: "0 5px 20px rgba(0,0,0,0.08)",
        soft: "0 2px 8px rgba(0,0,0,0.06)",
      },

      borderRadius: {
        xl: "1rem",
      },
    },
  },

  plugins: [],
};

export default config;

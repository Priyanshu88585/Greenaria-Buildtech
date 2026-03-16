/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#2e7d32",
          mid:     "#388e3c",
          light:   "#4caf50",
          pale:    "#e8f5e9",
          50:      "#f0fdf4",
          bg:      "#f5faf5",
        },
        gold:  { DEFAULT: "#b8914a", light: "#d4a95e", dark: "#9a7535" },
        navy:  { DEFAULT: "#0d2137", mid: "#16324f", light: "#1e3a5f" },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body:    ["var(--font-dm)",         "sans-serif"],
        display: ["var(--font-cormorant)",  "serif"],
      },
      animation: {
        "fade-up":    "fadeUp .65s ease forwards",
        "fade-in":    "fadeIn .5s ease forwards",
        "slide-left": "slideLeft .65s ease forwards",
        "float":      "float 6s ease-in-out infinite",
        "shimmer":    "shimmer 2.2s linear infinite",
        "marquee":    "marquee 22s linear infinite",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity:"0", transform:"translateY(36px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        fadeIn:    { "0%": { opacity:"0" }, "100%": { opacity:"1" } },
        slideLeft: { "0%": { opacity:"0", transform:"translateX(-36px)" }, "100%": { opacity:"1", transform:"translateX(0)" } },
        float:     { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-12px)" } },
        shimmer:   { "0%": { backgroundPosition:"-200% 0" }, "100%": { backgroundPosition:"200% 0" } },
        marquee:   { "0%": { transform:"translateX(0)" }, "100%": { transform:"translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};

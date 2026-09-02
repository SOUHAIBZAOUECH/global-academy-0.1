import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14152B",
        paper: "#F5F6FA",
        "paper-2": "#EDEFF6",
        indigo: { DEFAULT: "#35398C", deep: "#22235C" },
        gold: { DEFAULT: "#E8A33D", deep: "#C9832A" },
        muted: "#5B5E77",
        teal: "#2F8F7A",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0B0E14",
          surface: "#11151F",
          subtle: "#161B26",
        },
        accent: {
          DEFAULT: "#F2B94B",
          hover: "#2DD4BF",
          gold: "#F2B94B",
        },
        ink: {
          DEFAULT: "#F5F5F0",
          muted: "#9CA3AF",
        },
        border: "#232838",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

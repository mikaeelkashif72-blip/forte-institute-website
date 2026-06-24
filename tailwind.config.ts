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
          DEFAULT: "#FAF8F3",
          surface: "#FFFFFF",
          subtle: "#F2EFE7",
        },
        accent: {
          DEFAULT: "#1F4D3D",
          hover: "#16382C",
          gold: "#C9971F",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#6B6B63",
        },
        border: "#E5E1D8",
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

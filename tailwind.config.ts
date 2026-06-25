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
          DEFAULT: "#F7F5F1",
          surface: "#FFFFFF",
          subtle: "#ECE7DE",
        },
        accent: {
          DEFAULT: "#3454D1",
          hover: "#28409E",
          gold: "#FF6B5B",
        },
        ink: {
          DEFAULT: "#14161F",
          muted: "#6B7280",
        },
        border: "#E2DDD3",
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

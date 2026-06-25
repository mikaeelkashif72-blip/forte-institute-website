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
          DEFAULT: "#0D0E12",
          surface: "#15171D",
          subtle: "#1B1E26",
        },
        accent: {
          DEFAULT: "#7C5CFF",
          hover: "#6645E0",
          gold: "#C6F135",
        },
        ink: {
          DEFAULT: "#F5F5F7",
          muted: "#9A9CA5",
        },
        border: "#262932",
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

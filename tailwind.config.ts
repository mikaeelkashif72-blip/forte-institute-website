import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        void: {
          DEFAULT: "#0A0B12",
          100: "#10111C",
          200: "#171928",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.12)",
        },
        mist: {
          DEFAULT: "#A8AEC2",
          bright: "#E7E9F2",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          bright: "#A78BFA",
        },
        cyan: {
          DEFAULT: "#22D3EE",
          bright: "#67E8F9",
        },
        paper: {
          DEFAULT: "#F8F6F0",
        },
        ink: {
          DEFAULT: "#0E1F4B",
          60: "rgba(14, 31, 75, 0.6)",
          10: "rgba(14, 31, 75, 0.1)",
        },
        yellow: {
          DEFAULT: "#E8B72E",
          deep: "#1B5A6B",
        },
        "navy-pill": {
          DEFAULT: "#10204A",
        },
      },
      backgroundImage: {
        "aurora-gradient": "linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease 0.75s 1 forwards",
      },
    },
  },
  plugins: [],
};
export default config;

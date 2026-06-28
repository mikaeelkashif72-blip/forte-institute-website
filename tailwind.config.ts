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
      },
      backgroundImage: {
        "aurora-gradient": "linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

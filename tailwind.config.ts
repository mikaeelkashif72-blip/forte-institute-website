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
        ink: {
          DEFAULT: "#16213E",
          50: "#EEF0F5",
          100: "#D5DAE6",
          400: "#4B5C82",
          900: "#10182E",
        },
        cream: {
          DEFAULT: "#F8F4EC",
          100: "#FBF9F4",
        },
        accent: {
          DEFAULT: "#C8932A",
          dark: "#A6781E",
        },
      },
    },
  },
  plugins: [],
};
export default config;

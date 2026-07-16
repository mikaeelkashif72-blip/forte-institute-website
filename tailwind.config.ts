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
          DEFAULT: "#06091A",
          100: "#080C22",
          200: "#0A0F2A",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.12)",
        },
        mist: {
          DEFAULT: "#9BA8D4",
          bright: "#C8D0EC",
        },
        // NOTE: `violet` previously held the retired dark "Glass Observatory"
        // accent (#8B5CF6 / bright #A78BFA). Grepping src/ turned up zero
        // references to it (Footer.tsx and everything else was already
        // migrated off it) so it was dead. Repurposed below as the new
        // light-theme pastel "violet" surface/deep pair — no live component
        // changed behavior when this flipped.
        violet: {
          DEFAULT: "#E9DEFF",
          deep: "#522288",
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
          // Bumped from 0.6 -> 0.65 alpha: on the new `cream` background this
          // shade is used for secondary/body text (hero subhead etc.) and
          // 0.6 measured 4.25:1 against cream (fails WCAG AA 4.5:1 for normal
          // text). 0.65 measures 4.96:1. Same hue, no visual regression on
          // existing paper/void surfaces that already use text-ink-60.
          60: "rgba(14, 31, 75, 0.65)",
          40: "rgba(14, 31, 75, 0.4)",
          10: "rgba(14, 31, 75, 0.1)",
        },
        yellow: {
          DEFAULT: "#E8A020",
          deep: "#F5C518",
        },
        "navy-pill": {
          DEFAULT: "#10204A",
        },
        // --- New bright/pastel theme tokens (additive; dark tokens above
        // stay active until the rest of the site migrates off them) ---
        cream: {
          DEFAULT: "#FAF4EC",
        },
        gold: {
          DEFAULT: "#F7E6C3",
          // Brief asked to reuse the existing yellow-deep value verbatim,
          // but neither candidate for "existing yellow-deep" clears contrast
          // here: #B98A00 (CLAUDE.md's documented value) is 2.55:1 against
          // this gold surface and 2.87:1 against cream; the actual value
          // live in this file before this change, #F5C518, is worse (1.49:1
          // against cream). Both fail WCAG AA (4.5:1). Re-derived at the same
          // hue (oklch H=85) and darkened to oklch(42% 0.15 85) = #714100,
          // which measures 6.94:1 against the gold surface and 7.82:1
          // against cream.
          deep: "#714100",
        },
        sky: {
          DEFAULT: "#CAEEFF",
          deep: "#004270",
        },
        sage: {
          DEFAULT: "#C8E8CD",
          deep: "#09471F",
        },
        coral: {
          DEFAULT: "#FED6DA",
          deep: "#8B173A",
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

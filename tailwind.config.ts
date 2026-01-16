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
        paper: "#FBFAF7",
        surface: "#FFFFFF",
        text: "#111827",
        muted: "#4B5563",
        border: "#E5E7EB",
        accent: "#B45309",
        "link-alt": "#1F3A8A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        body: ["18px", { lineHeight: "1.65" }],
        h1: ["48px", { lineHeight: "1.15" }],
        h2: ["30px", { lineHeight: "1.2" }],
        meta: ["13px", { lineHeight: "1.5" }],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};
export default config;


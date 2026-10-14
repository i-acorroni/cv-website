import type { Config } from "tailwindcss";

const mono = ["Consolas", "Inconsolata", "Menlo", "Monaco", "Courier New", "monospace"];
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#ffffff", surface: "#ffffff", text: "#191b18", muted: "#63675e",
        border: "#e4e7df", accent: "#245329", highlight: "#8fff69", "link-alt": "#245329",
      },
      fontFamily: { sans: mono, heading: mono, mono },
      fontSize: {
        body: ["15px", { lineHeight: "1.8" }],
        h1: ["34px", { lineHeight: "1.3" }],
        h2: ["22px", { lineHeight: "1.4" }],
        meta: ["12px", { lineHeight: "1.7" }],
      },
    },
  },
  plugins: [],
};
export default config;

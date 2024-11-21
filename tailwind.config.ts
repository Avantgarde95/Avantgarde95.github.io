import type { Config } from "tailwindcss";

// Based on Monokai.
// (https://gist.github.com/r-malon/8fc669332215c8028697a0bbfbfbb32a)
const baseColors = {
  black: "#1a1a1a",
  gray: "#797979",
  white: "#d6d6d6",
  yellow: "#e5b567",
  green: "#b4d273",
  orange: "#e87d3e",
  purple: "#9e86c8",
  pink: "#b05279",
  blue: "#7da5c3",
};

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ...baseColors,
        background: baseColors.black,
        primary: baseColors.white,
        highlight: baseColors.yellow,
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
        // Since Fira Code doesn't support Korean, we just put sans-serif font as a fallback...
        mono: ["Fira Code", "Pretendard", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

// Based on Monokai.
// (https://gist.github.com/r-malon/8fc669332215c8028697a0bbfbfbb32a)
const baseColors = {
  black: "#222222",
  gray: "#797979",
  white: "#d6d6d6",
  yellow: "#e5b567",
  green: "#b4d273",
  orange: "#e87d3e",
  purple: "#9e86c8",
  pink: "#b05279",
  blue: "#6c99bb",
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
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

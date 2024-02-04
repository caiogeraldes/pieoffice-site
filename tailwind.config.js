/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Noto Sans Anatolian Hieroglyphs",
          "Noto Sans Avestan",
          "Noto Sans Carian",
          "Noto Sans Cypriot",
          "Noto Sans Glagolitic",
          "Noto Sans Gothic",
          "Noto Sans Linear B",
          "Noto Sans Lycian",
          "Noto Sans Lydian",
          "Noto Sans Ogham",
          "Noto Sans Old Persian",
          "Noto Serif Armenian",
          "Noto Serif Devanagari",
          "Noto Sans",
          "sans-serif",
          "UllikummiA",
        ],
        mono: ["Noto Mono", "monospace"]
      },
    },
  },
  plugins: [
  ],
};

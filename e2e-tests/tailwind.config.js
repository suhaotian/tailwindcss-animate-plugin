const animateCSSPlugin = require("../dist/index.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./e2e-tests/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [animateCSSPlugin()],
};

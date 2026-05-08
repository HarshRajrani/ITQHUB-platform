const tokens = require("../shared/design-tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...tokens.colors,
      },
      fontFamily: {
        ...tokens.typography.fontFamily,
      },
      fontSize: {
        ...tokens.typography.fontSize,
      },
      borderRadius: {
        ...tokens.shape.borderRadius,
      },
      boxShadow: {
        ...tokens.shape.boxShadow,
      },
    },
  },
  plugins: [],
};

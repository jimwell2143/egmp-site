const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      'xs': '361px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          base: "#BEAC6F",
          hover: "#AD9C66",
        },
        stone: {
          300: "#C5BA83",
          400: "#B8A972",
          500: "#988D5C",
        },
      },
    },
  },
  plugins: [],
};

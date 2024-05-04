/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.tsx", "./app/**/*.tsx", "./app/**/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "inria-serif": ["var(--font-inria-serif)", "serif"],
      },
      colors: {
        "primary-dark": "#3E5830",
      },
    },
  },

  plugins: [],
};

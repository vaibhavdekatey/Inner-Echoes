/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexendDeca: ["Lexend Deca", "serif"],
        dmSerif: ["DM Serif Text", "serif"],
      },
    },
  },
  plugins: [],
};

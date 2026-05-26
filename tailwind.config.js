/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        blush: "#F8E8EE",
        rose: "#E8B4B8",
        gold: "#C89B3C",
        cream: "#FFF9F5",
        charcoal: "#2D2D2D",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
};
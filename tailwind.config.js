/** @type {import('tailwindcss').Config} */
export default {
  darkMode:["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins:[
    require('tailwindcss-scrollbar'),
  ],
  theme: {
    extend: {
      fontFamily:["questrial","sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
}


/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue1" : "#161D6F",
        "blue2" : "#0B2F9F",
        "green1" : "#47bfb8",
        "green2" : "#C7FFD8",
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('daisyui'),],
}


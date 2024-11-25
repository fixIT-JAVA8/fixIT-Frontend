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
        "red" : "#FF0000",
        "pink" : "#FF6969",
        "blue" : "#0B2F9F",
        "cream" : "#FFF5E0",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     colors: {
      "brown": "#AF884A",
      "grey":"#7B7B7B",
      "white": "#ffffff",
      "black": "#000000",
      "primary": "#059669",
      "green": "#008000",
      "red-text": "##FF0000",
      "gray": "#E1E1E1",
      "base": "#F9F9F9",
      "red": "#F9B083",
      'black-rgba': 'rgba(0, 0, 0, 0.54)',
    },
    extend: {},
  },
  plugins: [require("daisyui")]
}


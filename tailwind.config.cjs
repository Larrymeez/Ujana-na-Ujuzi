/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C8102E', // red
        dark: '#000000',
        light: '#ffffff'
      },
    },
  },
  plugins: [],
}

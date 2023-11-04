/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["lofi"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}


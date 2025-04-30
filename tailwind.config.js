/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#FF6B00',
        customBody: "#6B7280",
      },
    },
  },
  plugins: [],
}

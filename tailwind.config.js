/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {width: {
      'custom-card': '550px'
    },},
  },
  plugins: [],
}

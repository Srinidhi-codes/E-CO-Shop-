/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3BB77E',
      },
      boxShadow: {
        card: '0 3px 6px 1px rgb(0,0,0,0.15)'
      }
    },
  },
  plugins: [],
}


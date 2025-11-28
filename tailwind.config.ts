/** @type {import('tailwindcss').Config} */
const nesting = require('tailwindcss/nesting');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nesting,
  ],
}

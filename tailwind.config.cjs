const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Gabarito', ...fontFamily.sans],
    },
    extend: {
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [],
}

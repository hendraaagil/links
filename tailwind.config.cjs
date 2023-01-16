/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          blue: '#2a61cc',
          dark: '#1d1f28',
          light: '#eff4f6',
        },
      },
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [],
}

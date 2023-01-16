/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          blue: '#2a61cc',
          sky: '#4f86f6',
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

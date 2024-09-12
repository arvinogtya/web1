/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#7dd3fc',
        drak: '#030712',
        secondary: '#64748b',
        main: '#030712',
        font: '#fdf4ff',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}


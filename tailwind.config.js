/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily:{
      Bebas: [ "Bebas Neue", "cursive"],
      Roboto: [ 'Roboto', "sans-serif" ]
    },
    extend: {
      colors:{
        brand: {
          300: '#996DFF',
          500: '#8257e6'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

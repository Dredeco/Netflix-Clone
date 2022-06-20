/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily:{
      Bebas: [ "Bebas Neue", "cursive"],
      Roboto: [ 'Roboto', "sans-serif" ]
    },
    extend: {
      backgroundImage: {
        banner: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('./src/assets/banner.jpg')",
        video_banner: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url('./src/assets/arrow.mp4')",
      },
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

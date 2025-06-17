/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      keyframes :{
        wiggle :{
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        }
      },
      fontFamily: {
        IBM: ['IBM Plex Serif', 'sans-serif'],
      },
      animation: {
        'wiggle-2s': 'wiggle 2s ease-in-out'
      },
    },
  },
  plugins: [],
}
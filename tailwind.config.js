/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        blue: '#345FF6',
        gunmetal: '#253347',
        dark_eletric_blue: '#5E6E85',
        borders: '#D8E2E7',
        pure_white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}


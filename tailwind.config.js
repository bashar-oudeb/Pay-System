/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ADA785',
        secondary: '#D6D3C2',
        bg: '#000000',
        white: '#E5E5E5',
      },
    },
    fontFamily: {
      Roboto: ["Roboto Slab", 'serif']
    },
  },
  plugins: [],
}


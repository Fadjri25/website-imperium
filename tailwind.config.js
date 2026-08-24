/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        spartan: ['"League Spartan"', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#831C91',
          foreground: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}
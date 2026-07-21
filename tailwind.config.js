/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c8872a',
          light: '#e0a040',
          dark: '#a06820',
        },
        charcoal: {
          DEFAULT: '#2a2a2a',
          light: '#3d3d3d',
          muted: '#5b5b5b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

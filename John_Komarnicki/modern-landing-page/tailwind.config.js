 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./public/**/*.{html, js}",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      }
    },
  },
  plugins: [],
}
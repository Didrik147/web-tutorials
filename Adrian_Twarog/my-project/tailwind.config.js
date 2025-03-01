/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4800",
        blue: {
          450: '#5F99F7'
        },
      }
    },
  },
  plugins: [],
}


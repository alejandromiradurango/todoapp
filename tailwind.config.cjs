/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  mode:'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: "#f1efde",
        dimLight: "#f0eab7",
        softLight: "#fff391",
        dark : "#0e0219",
        dimDark: "#23063e",
        softDark: "#4f108a"
      },
      fontFamily: {
        primary : ["Poppins", "sans-serif"],
        secondary: ["sans-serif", "sans-serif"]
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out'
      }
    },
  },
  plugins: [],
}

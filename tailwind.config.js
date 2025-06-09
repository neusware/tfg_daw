// tailwind.config.js

const { colors } = require("@mui/material");

module.exports = {
  darkMode: 'class', // Habilita el modo oscuro con la clase 'dark'
  content: [
    './resources/**/*.{html,js,jsx,ts,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#063801",          // Azul
        second: "#18703A",           // Azul oscuro
        third: "#A8D0DB",           // Azul claro
        green: "#098806",             // Verde corporativo
        greenDark: "#1a6617",
        acento: "#A4D9A0",        // Verde oscuro
      },
      fontFamily: {
        sans: ['Urbanist', 'Arial', 'sans-serif'],  // Añadir la fuente Urbanist
      },
      container: {
        center: true,                // Centra el contenedor
        padding: {
          DEFAULT: "1rem",           // Padding por defecto
          sm: "3rem",                // Padding para pantallas pequeñas
        },
      },
    },
  },
  plugins: [],
};

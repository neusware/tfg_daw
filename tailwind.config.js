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
        primary: "#7180AC",          // Azul
        second: "#2B4570",           // Azul oscuro
        third: "##A8D0DB",           // Azul claro
        red: "#E49273",             // Rojo 
        redDark: "#A37A74",         // Rojo Oscuro
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

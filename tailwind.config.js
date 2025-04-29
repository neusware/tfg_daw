const { colors } = require("@mui/material");

module.exports = {
  darkMode: 'class', // Habilita el modo oscuro con la clase 'dark'
  content: [
    './resources/**/*.{html,js,jsx,ts,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
        colors:{
            primary: "#f42c37",
            second: "#f42c37",
            brandYellow: "#fdc62e",
            brandGreen: "#2dcc6f",
            brandBlue: "#1376f4",
            brandWhite: "#eeeeee",
        },
        container:{
            center:true,
            padding:{
                DEFAULT: "1rem",
                sm: "3rem",

            }
        }
    },
  },
  plugins: [],
};

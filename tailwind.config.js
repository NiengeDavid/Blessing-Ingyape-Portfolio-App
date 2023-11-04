/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "views/**/*.ejs",
    "./node_modules/flowbite/**/*.js",
    "./public/js/**/*.js",
  ],

  darkMode: "media",

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },

    extend: {
      colors: {
        'primary': "#30D5C8",
        'secondary': "#156760",
        'tetiary': "#1D8D84",
        'tag': "#24B3A8"
      },

      fontFamily: {
        cabinetGrotesk: "'Cabinet Grotesk', 'san-serif'",
        primary: "'Poppins', 'sans-serif'",
        Title: "'Happy Monkey', 'cursive'",
        flip: "'Lilita One', 'cursive'",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

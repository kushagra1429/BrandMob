/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        jk: '1039px'
      },
    },
  },
  plugins: [],
}


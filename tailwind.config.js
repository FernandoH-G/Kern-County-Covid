module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'covid-blue': '#035d71',
        'covid-blue-compliment': '#711703'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

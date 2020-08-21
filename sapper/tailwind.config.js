module.exports = {
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        beige: '#fcfbfb',
        cornflower: '#668cff',
        grey: {
          dark: '#363636',
          medium: '#444444',
        },
      },
    },
    container: {
      center: false,
    },
  },
  variants: {},
  plugins: [],
}

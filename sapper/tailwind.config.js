module.exports = {
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      boxShadow: {
        featured:
          '0 13px 9px -10px rgba(0, 0, 0, 0.1), 0 1px 16px 2px rgba(0, 0, 0, 0.05)',
      },
      margin: {
        heading: '0 0 0.5em 0;',
      },
      fontSize: {
        h1: '2em',
      },
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

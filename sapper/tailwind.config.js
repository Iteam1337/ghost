module.exports = {
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      boxShadow: {
        featured:
          '0 0px 17px 0px rgba(0, 0, 0, 0.1), 0 0px 0px 0px rgba(0, 0, 0, 0.07)',
        hover:
          '0 0px 17px 0px rgba(0, 0, 0, 0.05), 0 0px 0px 0px rgba(0, 0, 0, 0.07)',
      },
      margin: {
        heading: '0 0 0.3em 0;',
      },
      fontSize: {
        h1: '2em',
      },
      colors: {
        beige: '#fcfbfb',
        cornflower: '#668cff',
        green: '#36F49A',
        grey: {
          dark: '#363636',
          medium: '#444444',
        },
      },
      opacity: {
        '95': '0.95',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
}

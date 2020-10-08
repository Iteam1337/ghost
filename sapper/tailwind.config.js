module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      boxShadow: {
        hover:
          '0 0px 17px 0px rgba(0, 0, 0, 0.1), 0 0px 0px 0px rgba(0, 0, 0, 0.07)',
        featured:
          '0 0px 17px 0px rgba(0, 0, 0, 0.05), 0 0px 0px 0px rgba(0, 0, 0, 0.07)',
      },
      flex: {
        customwide: '1 49%',
        customnarrow: ' 1 1 calc((100% / 3) - 5rem)',
      },
      margin: {
        heading: '0 0 0.3em 0;',
      },
      fontSize: {
        h1: '2em',
      },
      colors: {
        beige: '#fcfbfb',
        blue: {
          light: '#E8EEFF',
          cornflower: '#668cff',
          dark: '#4271FF',
        },
        green: '#36F49A',
        grey: {
          dark: '#363636',
          medium: '#444444',
        },
      },
      opacity: {
        95: '0.95',
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

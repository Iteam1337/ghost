module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      spacing: {
        card: '600px',
        cardSm: '468px',
      },
      screens: {
        xxl: '1600px',
      },
      boxShadow: {
        hover:
          '0 0px 17px 0px rgba(0, 0, 0, 0.1), 0 0px 0px 0px rgba(0, 0, 0, 0.07)',
        featured:
          '0 0px 17px 0px rgba(0, 0, 0, 0.05), 0 0px 0px 0px rgba(0, 0, 0, 0.07)',
      },
      flex: {
        customwide: '1 48%',
        customnarrow: '1 1 calc((100% / 3) - 5rem)',
      },
      margin: {
        heading: '0 0 0.3em 0;',
      },
      fontSize: {
        h1: '2.5em',
        h2: '24px',
      },
      colors: {
        beige: '#fcfbfb',
        blue: {
          light: '#E8EEFF',
          cornflower: '#668cff',
          marine: '#081754',
          dark: '#4271FF',
        },
        green: '#38FFA1',
        grey: {
          dark: '#363636',
          medium: '#444444',
          cod: '#1C1B1B',
        },
        sand: '#F5F1ED',
      },
      opacity: {
        95: '0.95',
        30: '0.3',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    textColor: {
      white: '#fff',
      superblue: '#002FEE',
    },
  },
  variants: {},
  plugins: [],
}

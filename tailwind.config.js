const plugin = require('tailwindcss/plugin')

const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default

const svgToTinyDataUri = require('mini-svg-data-uri')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{ejs, js, html}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EAF3FF',
          100: '#CED8E4',
          200: '#B2BECD',
          300: '#94A3B7',
          400: '#7789A2',
          500: '#5D7088',
          600: '#48576B',
          700: '#323E4D', // primary
          800: '#1D2531',
          900: '#040D17'
        }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem'
      }
    },
    fontFamily: {
      display: ['"Roboto Condensed"', 'sans-serif'],
      serif: ['"Roboto Serif"', 'serif']
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          'bg-grid-small': (value) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          'bg-dot': (value) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    })
  ]
}

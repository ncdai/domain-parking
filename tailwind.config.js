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
      heading: ['"FS Magistral"', 'serif'],
      body: ['"Roboto"', 'sans-serif']
    }
  }
}

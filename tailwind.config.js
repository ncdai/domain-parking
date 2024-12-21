/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./views/**/*.{ejs, js, html}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        'muted-foreground': 'rgb(var(--muted-foreground))',
        border: 'rgb(var(--border))',
        plus: 'rgb(var(--plus))'
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

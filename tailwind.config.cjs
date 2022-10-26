/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayish: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        lightbox: 'hsla(0, 0%, 0%, 0.75)',
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      fontWeight: {
        'thin-400': '400',
        'bold-700': '700',
      },
      fontSize: {
        paragraph: '16px',
      },
    },
  },
  plugins: [],
}

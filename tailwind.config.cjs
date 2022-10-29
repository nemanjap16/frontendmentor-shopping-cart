const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          xl: '3rem'
        }
      },
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayish: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        lightbox: 'hsla(0, 0%, 0%, 0.75)'
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif']
      },
      fontWeight: {
        'thin-400': '400',
        'bold-700': '700'
      },
      fontSize: {
        paragraph: '16px'
      },
      keyframes: {
        'display-cart': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' }
        },
        wiggle: {
          '0%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        'display-cart': 'display-cart 0.5s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out'
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({})
      addComponents({
        '.cart': {
          backgroundColor: '#fff',
          position: 'absolute',
          right: 0,
          top: 92,
          borderRadius: '5px',
          boxShadow: `0px 12px 12px 2px rgba(0,0,0, 0.25)`
        }
      })
      addUtilities({})
    })
  ]
}

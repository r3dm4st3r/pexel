const defaultTheme = require('tailwindcss/defaultTheme'),
    plugin = require('tailwindcss/plugin'),
    color = require('tailwindcss/colors');

module.exports = {
  mode:'jit',
  darkMode: 'class',
  content: [
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Montserrat"', 'sans-serif'],
        ...defaultTheme.fontFamily.sans,
      },
      colors: {
        white: '#fff',
        black: '#292929',
        theme: '#016a7d'
      },
      fontWeight: {
        normal: 400,
        bold: 600,
        extrabold: 800
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      'xxs': '370px',
      'xs': '480px',
      'sm': '576px',
      'md': '767px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    },
  },
  plugins: [
    plugin(function({ addBase, theme, addComponents }) {
      addBase({
        'h1': {fontFamily: '"Montserrat", sans-serif',letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.4xl'), lineHeight: theme('leading.normal') },
        'h2': {fontFamily: '"Montserrat", sans-serif',letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.3xl'), lineHeight: theme('leading.normal') },
        'h3': {fontFamily: '"Montserrat", sans-serif',letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.2xl'), lineHeight: theme('leading.normal') },
        'h4': {fontFamily: '"Montserrat", sans-serif',letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.xl'), lineHeight: theme('leading.normal') },
        'h5': {fontFamily: '"Montserrat", sans-serif',letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.lg'), lineHeight: theme('leading.normal') },
        'h6': {fontFamily: '"Montserrat", sans-serif',letterSpacing: theme('letterSpacing.wider'), fontWeight: theme('fontWeight.extrabold'), fontSize: theme('fontSize.md'), lineHeight: theme('leading.normal') },
        'p' : { fontWeight: theme('fontWeight.normal'), fontSize: theme('fontSize.sm') },
      });
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xxs': {
            maxWidth: '90%',
          },
          '@screen xs': {
            maxWidth: '90%',
          },
          '@screen sm': {
            maxWidth: '90%',
          },
          '@screen md': {
            maxWidth: '90%',
          },
          '@screen lg': {
            maxWidth: '90%',
          },
          '@screen xl': {
            maxWidth: '90%',
          },
          '@screen xxl': {
            maxWidth: '90%',
          },
        }
      });
    })
  ]
}

const defaultTheme = require('tailwindcss/defaultTheme')
const defaultConfig = require('tailwindcss/defaultConfig')
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    ...defaultTheme
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, config }) {
      addBase({
        h1: {
          fontSize: config('theme.fontSize.xl'),
          marginTop: config('theme.margin.6')
        },
        h2: {
          fontSize: config('theme.fontSize.lg'),
          marginTop: config('theme.margin.5')
        },
        h3: {
          fontSize: config('theme.fontSize.md'),
          marginTop: config('theme.margin.4')
        },
        p: {
          marginTop: config('theme.margin.4')
        },
        pre: {
          color: '#e5e7eb',
          backgroundColor: '#252f3f',
          padding: config('theme.padding.1'),
          fontSize: config('theme.fontSize.md'),
          borderRadius: '.375rem'
        }
      })
    })
  ]
}

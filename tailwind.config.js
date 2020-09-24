const defaultTheme = require('tailwindcss/defaultTheme')
const defaultConfig = require('tailwindcss/defaultConfig')
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    ...defaultTheme,
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}

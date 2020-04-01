/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    inset: {
      '1/2': '50%',
      '1/4': '25%',
      '3/4': '75%'
    },
    extend: {
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' }
      },
      colors: {
        gray: {
          '100': '#f7f7f7',
          '200': '#dedede',
          '300': '#c5c5c5',
          '400': '#acacac',
          '500': '#949494',
          '600': '#7b7b7b',
          '700': '#626262',
          '800': '#4a4a4a',
          '900': '#313131'
        },
        black: '#181818'
      }
    }
  },
  variants: {},
  plugins: []
}

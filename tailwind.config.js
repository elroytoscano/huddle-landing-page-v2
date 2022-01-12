const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html'],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
      },
      fontFamily: {
        sans: ['sans-serif', ...defaultTheme.fontFamily.sans],
        headers: ['Poppins'],
        paragraph: ['Open Sans'],
      },
      backgroundImage: (defaultTheme) => ({
        'hero-desktop': "url('/src/images/bg-desktop.svg')",
        'hero-mobile': "url('/src/images/bg-mobile.svg')",
      }),
      screens: {
        sm: { min: '375px', max: '539px' },
        smd: { min: '540px', max: '767px' },
        smmd: { min: '768px', max: '959px' },
        md: { min: '960px', max: '1199px' },
        lg: '1160px',
        xl: '1440px',
        xxl: '2560px',
      },
      colors: {
        fmViolet: 'hsl(257, 40%, 49%)',
        fmMagenta: 'hsl(300, 69%, 71%)',
      },
    },
  },
  variants: {},
  plugins: [],
};

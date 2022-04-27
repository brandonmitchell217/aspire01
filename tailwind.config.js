module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        black: '#000',
        brandBlue: '#119DDA',
      },
    },
  },
  plugins: [],
}

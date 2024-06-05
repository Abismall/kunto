module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#319415',
        'primary-dark': '#315000',
        secondary: '#e03e00',
        highlight: '#ffc600',
        dark: '#000205',
        'primary-light': '#b8ff00',
        'secondary-dark': '#e03100',
      },

      keyframes: {

        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        shrink: {
          '0%': { transform: 'scaleX(1)', opacity: 1 },
          '100%': { transform: 'scaleX(0)', opacity: 0 },
        },
        expand: {
          '0%': { transform: 'scaleX(0)', opacity: 0 },
          '100%': { transform: 'scaleX(1)', opacity: 1 },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        shrink: 'shrink 0.3s ease-out forwards',
        expand: 'expand 0.3s ease-out forwards',
      },
    },
  },
    plugins: [
    require('@tailwindcss/typography'),
  ],
};

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './mocks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
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
        slideUp: 'slideUp 0.5s ease-out forwards',
        slideDownDelayed: 'slideDown 2s ease-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        slideInLeftExpand: 'slideInLeft 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        shrink: 'shrink 0.3s ease-out forwards',
        expand: 'expand 0.3s ease-out forwards',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',
        buttons: 'var(--color-buttons)',
        dark: 'var(--color-dark)',
        'light': 'var(--color-light)',
        typography: 'var(--color-typography)',
        highlight: 'var(--color-highlight)',
      },

    },
    plugins: [
      addVariablesForColors,
      function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            "bg-dot-thick": (value) => ({
              backgroundImage: `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
              )}")`,
            }),
          },
          { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
        );
      },
    ],
  }
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
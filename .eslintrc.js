module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js does not require React to be in scope
    'tailwindcss/no-custom-classname': 'off', // Turn off if you use custom class names

    // TypeScript-specific rules
    '@typescript-eslint/explicit-function-return-type': 'off', // Enforce explicit return types on functions and class methods
    '@typescript-eslint/no-explicit-any': 'warn', // Disallow usage of the `any` type
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Disallow unused variables
    '@typescript-eslint/no-use-before-define': 'off', // Disallow the use of variables before they are defined
    '@typescript-eslint/no-var-requires': 'off', // Disallow the use of require statements except in import statements

    // React-specific rules
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'react/jsx-key': 'warn', // Warn if key prop is missing in iterators/collection literals
    'react/jsx-no-target-blank': 'warn', // Warn when using target="_blank" without rel="noopener noreferrer"

    // Hooks-specific rules
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // Accessibility-specific rules
    'jsx-a11y/anchor-is-valid': 'off', // Disabled due to Next.js's use of <a> within <Link>
    'jsx-a11y/no-onchange': 'off', // Allow onChange on select elements

    // Tailwind CSS-specific rules
    'tailwindcss/classnames-order': 'warn', // Ensure classnames are ordered as per Tailwind CSS documentation
    'tailwindcss/no-contradicting-classname': 'error', // Ensure there are no contradicting class names

    // General JavaScript rules
    'no-console': 'warn', // Warn on console.log usage
    'no-debugger': 'warn', // Warn on debugger usage
    'no-unused-vars': 'off', // Turned off in favor of @typescript-eslint/no-unused-vars
    'no-use-before-define': 'off', // Turned off in favor of @typescript-eslint/no-use-before-define
    'prefer-const': 'warn', // Prefer const over let when variables are not reassigned
    'quotes': ['warn', 'single', { avoidEscape: true }], // Prefer single quotes
    'semi': ['warn', 'always'], // Enforce semicolons at the end of statements
  },
};

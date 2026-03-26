/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lorvique: {
          beige: '#F7F6F2',
          dark: '#111111',
          light: '#FFFFFF',
          gray: '#E5E5E5',
          text: '#333333'
        }
      },
      fontFamily: {
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        sans: ['"Crimson Text"', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      }
    }
  },
  plugins: [],
};

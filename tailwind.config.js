/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        black: '#151515',
        gray: { DEFAULT: '#242424', light: '#333333', 100: '#e5e7eb' },
        green: '#4EE1A0',
        purple: { DEFAULT: '#7C5DFA', light: '#9277FF', 100: '#DFE3FA' },
      },
    },
  },

  plugins: [],
  corePlugins: {
    preflight: true,
  },
};

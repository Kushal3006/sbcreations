/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInSlow: 'fadeIn 1s ease-in-out',
        shine: 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      colors: {
        teal: {
          50: '#effcfa',
          100: '#c7f5ee',
          200: '#93e8dc',
          300: '#5ed5c7',
          400: '#33bcae',
          500: '#1fa195',
          600: '#18837a',
          700: '#166964',
          800: '#145352',
          900: '#134544',
        },
        purple: {
          50: '#f8f5ff',
          100: '#eee7ff',
          200: '#dfd1ff',
          300: '#cbb1fd',
          400: '#b286f8',
          500: '#965aef',
          600: '#8139e2',
          700: '#6e28c7',
          800: '#5b23a1',
          900: '#4b2081',
        },
      },
    },
  },
  plugins: [],
};
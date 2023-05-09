/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],darkMode: 'class',
  theme: {
    screens: {

      'xl':  {"max":'992px'} ,
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '710px'} ,
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '527px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '596px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}


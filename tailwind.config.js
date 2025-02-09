const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{sans:['Inter var', ...defaultTheme.fontFamily.sans]},
      
            screens: {
              xs:{max:'585px'}, // Custom screen size
        },
    },
  },
  plugins: [],
}


import defaultTheme from "tailwindcss/defaultTheme.js";
import theme from './src/theme/bridge';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{html,ts,tsx,js,jsx}"
  ],
  important: '#root',
  theme: {
    screens: {
      'xs': '300',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'primary': theme.palette.primary.main,
        'secondary': theme.palette.secondary.main,
        'background-color': theme.palette.background.default,
        'paper-color': theme.palette.background.paper
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}


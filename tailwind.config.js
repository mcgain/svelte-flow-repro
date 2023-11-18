const defaultTheme = require("tailwindcss/defaultTheme");
let plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      colors: {
        "vampire-red": "#720D1D",
        'vampire': {
          '50': '#fff0f2',
          '100': '#ffdee3',
          '200': '#ffc3cd',
          '300': '#ff99a9',
          '400': '#ff5f78',
          '500': '#ff2d4e',
          '600': '#f40e32',
          '700': '#ce0727',
          '800': '#aa0a23',
          '900': '#720d1d',
          '950': '#4d020e',
      },
      
      },
      inset: {
        "-13": "-13px",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(3px)",
      },
      gridTemplateRows: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      gridRowStart: {
        '10': '10',
      },
      animation: {
        'bg-fade': 'bg-fade 2s ease-out',
      },
      keyframes: {
        'bg-fade': {
          '0%': { 'background-color': '#ff99a9' },
          '100%': { 'background-color': '#ffffff' },
        }
      }
    },
    fontFamily: {
      heading: ["StarJedi", ...defaultTheme.fontFamily.mono],
      title: ["DarkCrystal", ...defaultTheme.fontFamily.mono],
      inputs: ["Arvo", ...defaultTheme.fontFamily.sans],
      labels: ["Crud", ...defaultTheme.fontFamily.serif],
      serif: ["CormorantGaramond-Medium", ...defaultTheme.fontFamily.serif],
    },
  },
  variants: ["hover", "focus"],
  plugins: [
    require("tailwindcss-filters")(), 
    require("@tailwindcss/forms")({strategy: 'class'}),
    plugin(function ({ addVariant }) {
      addVariant('roll', '[data-roll-mode="true"] &')
    }),
    plugin(function ({ addVariant }) {
      addVariant('write', '[data-roll-mode="false"] &')
    }),
  ],
  content: [
    "./app/views/**/*.html.{erb,slim}",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.svelte",
  ],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    
    extend: {
        fontFamily: {
          normal: [
            'Montserrat-Regular', 
            'sans-serif'
          ],
          light: [
            'Montserrat-Light', 
            'sans-serif'
          ],
          medium: [
            'Montserrat-Medium', 
            'sans-serif'
          ],
          semibold: [
            'Montserrat-SemiBold', 
            'sans-serif'
          ],
          bold: [
            'Montserrat-Bold', 
            'sans-serif'
          ],
        },
      colors: {
        primary: {
          '50': '#eef8ff',
          '100': '#d9eeff',
          '200': '#bbe2ff',
          '300': '#8dd0ff',
          '400': '#57b5ff',
          '500': '#3094ff',
          '600': '#1974f7',
          '700': '#125ee3',
          '800': '#154bb8',
          '900': '#163f88',
          '950': '#132a58',
          '960': '#1C3F88',
          '970': '#3760b5',
          '990': '#C7D572',
          '1000':'#6EBDEB',
        },
        secondary: {
          '50': '#f2f9fd',
          '100': '#e3f0fb',
          '200': '#c1e2f6',
          '300': '#6ebdeb',
          '400': '#4caee4',
          '500': '#2594d2',
          '600': '#1676b3',
          '700': '#135e91',
          '800': '#145078',
          '900': '#164364',
          '950': '#0f2c42',
        },
        third: {
          '50': '#f8faeb',
          '100': '#f0f3d4',
          '200': '#e1e8ae',
          '300': '#c7d572',
          '400': '#b4c655',
          '500': '#97ab37',
          '600': '#768828',
          '700': '#5a6823',
          '800': '#495420',
          '900': '#3e481f',
          '950': '#20270c',
        },
        'gray-brand': '#DADADA'
      }
    },
  },
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('preline/plugin'),
  ],
}
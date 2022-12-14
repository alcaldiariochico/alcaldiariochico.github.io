/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    colors: {
      'black': colors.black,
      'slate': colors.slate,
      'gray': colors.gray,
      'zinc': colors.zync,
      'neutral': colors.neutral,
      'stone': colors.stone,
      'red': colors.red,
      'amber': colors.amber,
      'yellow': colors.yellow,
      'lime': colors.lime,
      'green': colors.green,
      'emerald': colors.emerald,
      'teal': colors.teal,
      'cyan': colors.cyan,
      'sky': colors.sky,
      'blue': colors.blue,
      'indigo': colors.indigo,
      'violet': colors.violet,
      'purple': colors.purple,
      'fuchsia': colors.fuchsia,
      'pink': colors.pink,
      'rose': colors.rose,
      'white': colors.white,
      'red-brand': '#E30C12',
      'blue-brand': '#40C0F0',
      'yellow-brand': '#FFE108',
      'green-brand': '#9AC43A',
      'gray-brand': '#495A71',
      'orange-brand': '#F19604',
    },
    extend: {}
  },
  plugins: [],
}

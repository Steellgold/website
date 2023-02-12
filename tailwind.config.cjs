/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    hljs: {
      theme: 'agate',
    },
    extend: {},
  },
  plugins: [require('tailwind-highlightjs'), require('@tailwindcss/typography')]
}

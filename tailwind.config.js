/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", './*.html'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'Arial', 'ui-serif', 'open-sans']
      },
      backgroundImage: {
        'hero': 'url(\'../images/moonlife-hero-o.png\')'
      }
    },
  },
  plugins: [],
}


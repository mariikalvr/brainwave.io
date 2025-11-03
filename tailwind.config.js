/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'nav': "url('/images/Hero.png')",
        'hero-pattern': "url('/images/Hero.png')"
      }
    },
  },
  plugins: [],
}
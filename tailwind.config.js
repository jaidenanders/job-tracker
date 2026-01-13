/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': '#5C4033',
        'dark-brown': '#3E2723',
        'gold': '#D4AF37',
        'light-gold': '#F4E4B5',
        'cream': '#FFF8E7',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-mobile': "url('/images/bg-mobile.svg')",
        'bg-desktop': "url('/images/bg-desktop.svg')",
      },
      colors: {
        'custom_violet': '#674baf',
        'custom_magenta': '#e882e8'
      },
    },
  },
  plugins: [],
}
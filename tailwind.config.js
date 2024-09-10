/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  threme: {
    extend: {
      colors: {
        'primary': "#1E293B",
        'secondary': "#5c059b",
        'accent': "#CB5930",
      },
    },
  },
  plugins: [],
}


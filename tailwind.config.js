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
        'primary': "pink",
        'secondary': "pink-500",
        'accent': "#CB5930",
        border: 'hsl(var(--border))', 

      },
    },
  },
  plugins:  [
    require('@tailwindcss/aspect-ratio'),
  ],
}


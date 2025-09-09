/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        neon: {
          cyan: '#00fff7',
          green: '#39ff14'
        }
      }
    },
  },
  plugins: [],
}

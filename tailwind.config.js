/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
      extend: {
          fontFamily: {
              sans: ['Poppins', 'sans-serif'],
          },
          colors: {
              brand: {
                  blue: '#1e3a8a',
                  accent: '#3b82f6',
                  light: '#eff6ff',
                  dark: '#0f172a'
              }
          },
          boxShadow: {
              'premium': '0 10px 40px -10px rgba(59,130,246,0.3)',
              'card': '0 4px 20px -2px rgba(0,0,0,0.05)',
              'card-hover': '0 20px 40px -4px rgba(0,0,0,0.1)'
          }
      }
  },
  plugins: [],
}

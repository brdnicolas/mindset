/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#D6D6D6',
          200: '#B6B6B8',
          300: '#9E9DA0',
          400: '#cbd5e0',
          500: '#5A595C',
          600: '#718096',
          700: '#141414',
          800: '#2d3748',
          900: '#090909'
        },
        applicationStatus: {
          applied: '#DE9489',
          relaunched: '#D289DE',
          interviewObtained: '#88DEA0'
        }
      }
    }
  },
  plugins: []
}

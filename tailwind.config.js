/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5757'
      },
      borderRadius: {
        32: '32px',
        12: '12px',
        8: '8px',
        4: '4px',
      }
    },
  },
  plugins: [],
}

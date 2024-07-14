const px0to300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5757',
      },
      width: px0to300,
      height: px0to300,
      fontSize: px0to300,
      padding: px0to300,
      borderRadius: {
        32: '32px',
        12: '12px',
        8: '8px',
        4: '4px',
      },
      boxShadow: {
        sm: '0px 0px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
/* Ellipse 6716 */

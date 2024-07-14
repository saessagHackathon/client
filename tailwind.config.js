const px0to100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5757',
      },
      width: px0to100,
      height: px0to100,
      fontSize: px0to100,
      padding: px0to100,
      borderRadius: {
        32: '32px',
        12: '12px',
        8: '8px',
        4: '4px',
      },
    },
  },
  plugins: [],
}

const px0to300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5757',
        'gray-100': 'rgba(124, 124, 124, 1)',
      },
      width: px0to300,
      height: px0to300,
      fontSize: px0to300,
      padding: px0to300,
      borderRadius: {
        32: '32px',
        20: '20px',
        12: '12px',
        8: '8px',
        4: '4px',
      },
      boxShadow: {
        sm: '0px 0px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    keyframes: {
      spread: {
        '0%': { transform: 'scale(0)', opacity: 0.5 },
        '90%': { transform: 'scale(1)', opacity: 1 },
        '100%': { transform: 'scale(1)', opacity: 0 },
      },
    },
    animation: {
      spread: 'spread 2s ease-in-out infinite',
    },
  },
  plugins: [],
}
/* Ellipse 6716 */

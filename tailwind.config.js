const px0to300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5757',
        'red-200': 'rgba(255, 121, 121, 1)',
        'red-300': 'rgba(255, 154, 154, 1)',
        'gray-100': 'rgba(124, 124, 124, 1)',
        bubble: 'rgba(246, 246, 246, 1)',
      },
      width: px0to300,
      height: px0to300,
      gap: px0to300,
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
        md: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
      },
    },
    keyframes: {
      appearBottom: {
        '0%': { transform: 'translateY(50%)', opacity: 0 },
        '50%': { transform: 'translateY(-20%)', opacity: 1 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
      spread: {
        '0%': {
          transform: 'scale(0)',
          opacity: 0.5,
        },
        '70%': { transform: 'scale(1)', opacity: 1 },
        '100%': { transform: 'scale(0.7)', opacity: 0 },
      },
      grow: {
        '0%': {
          transform: 'scale(0.5)',
          backgroundColor: 'rgba(255, 154, 154, 1)',
        },
        '30%': { transform: 'scale(1)', backgroundColor: '#FF5757' },
        '60%': {
          transform: 'scale(0.5)',
          backgroundColor: 'rgba(255, 154, 154, 1)',
        },
        '100%': {
          transform: 'scale(0.5)',
          backgroundColor: 'rgba(255, 154, 154, 1)',
        },
      },
    },
    animation: {
      spread: 'spread 2s ease-in-out infinite',
      appearBottom: 'appearBottom 0.5s ease-in-out',
      grow1: 'grow 2s ease-in-out infinite',
      grow2: 'grow 2s ease-in-out infinite 0.3s',
      grow3: 'grow 2s ease-in-out infinite 0.6s',
      grow4: 'grow 2s ease-in-out infinite 0.9s',
      grow5: 'grow 2s ease-in-out infinite 1.2s',
    },
  },
  plugins: [],
}
/* Ellipse 6716 */

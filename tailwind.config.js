/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f14',
        neon: {
          blue: '#00e5ff',
          purple: '#a855f7',
          green: '#22d3ee'
        },
      },
      boxShadow: {
        neon: '0 0 10px rgba(0, 229, 255, 0.7), 0 0 20px rgba(168, 85, 247, 0.6)'
      }
    },
  },
  plugins: [],
}



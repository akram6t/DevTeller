/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#d0d0d0',
          200: '#a1a1a1',
          300: '#727272',
          400: '#434343',
          500: '#141414',
          600: '#101010',
          700: '#0c0c0c',
          800: '#080808',
          900: '#040404',
        },
        glow: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          green: '#10b981',
          cyan: '#06b6d4',
          pink: '#ec4899',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px 5px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px 8px rgba(139, 92, 246, 0.6)' },
        }
      },
    },
  },
  plugins: [],
}
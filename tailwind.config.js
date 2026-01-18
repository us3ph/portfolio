/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030303', // Extremely dark almost black
        surface: '#0a0a0a',   // Slightly lighter for cards
        surfaceHighlight: '#141414',
        border: '#1f1f1f',
        primary: '#ffffff',
        secondary: '#a1a1aa',
        accent: '#3f3f46',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px -10px rgba(255,255,255,0)' },
          'to': { boxShadow: '0 0 25px -5px rgba(255,255,255,0.1)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

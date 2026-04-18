/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark':    '#050811',
        'brand-cyan':    '#00F0FF',
        'brand-magenta': '#FF003C',
        'brand-purple':  '#8b5cf6',
        'brand-gold':    '#f59e0b',
        'brand-green':   '#10b981',
      },
      fontFamily: {
        'orbitron':  ['Orbitron', 'monospace'],
        'jet':       ['JetBrains Mono', 'monospace'],
        'sans':      ['Inter', 'sans-serif'],
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'glow-cyan':      'glow-pulse-cyan 3s ease-in-out infinite',
        'glow-magenta':   'glow-pulse-magenta 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'spin-slow':      'spin-slow 12s linear infinite',
        'ping-slow':      'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float:               { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'glow-pulse-cyan':   { '0%,100%': { boxShadow: '0 0 20px rgba(0,240,255,0.3)' }, '50%': { boxShadow: '0 0 50px rgba(0,240,255,0.7)' } },
        'glow-pulse-magenta':{ '0%,100%': { boxShadow: '0 0 20px rgba(255,0,60,0.3)' },  '50%': { boxShadow: '0 0 50px rgba(255,0,60,0.7)' } },
        'gradient-shift':    { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        'spin-slow':         { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'ping-slow':         { '0%': { transform: 'scale(1)', opacity: '0.6' }, '75%,100%': { transform: 'scale(1.8)', opacity: '0' } },
      },
    },
  },
  plugins: [],
}

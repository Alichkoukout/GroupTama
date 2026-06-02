/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f7ff',
          100: '#e0efff',
          200: '#bae3ff',
          300: '#7cc5ff',
          400: '#36a3ff',
          500: '#0080ff',
          600: '#0066d9',
          700: '#0052b3',
          800: '#004299',
          900: '#003d80',
          950: '#001f42',
        },
        accent: {
          50:  '#f0fef9',
          100: '#ccfce8',
          200: '#99f9d1',
          300: '#5ef2b3',
          400: '#1fe08e',
          500: '#00d872',
          600: '#00b859',
          700: '#009848',
          800: '#007a39',
          900: '#006630',
        },
        tech: {
          50:  '#f3f0ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '.18em',
      },
      boxShadow: {
        'card':      '0 2px 16px rgba(0,128,255,.08), 0 8px 32px rgba(0,128,255,.12)',
        'card-hover':'0 8px 32px rgba(0,128,255,.16), 0 24px 64px rgba(0,128,255,.24)',
        'glow-cyan': '0 0 32px rgba(0,128,255,.4)',
        'glow-green':'0 0 32px rgba(0,216,114,.4)',
        'glow-purple':'0 0 32px rgba(139,92,246,.4)',
        'btn':       '0 4px 20px rgba(0,128,255,.32)',
        'btn-hover': '0 8px 32px rgba(0,128,255,.48)',
        'neon-cyan': '0 0 20px rgba(0,128,255,.5), inset 0 0 20px rgba(0,128,255,.1)',
        'neon-green':'0 0 20px rgba(0,216,114,.5), inset 0 0 20px rgba(0,216,114,.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(.22,1,.36,1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
      },
      animation: {
        'spin-slow':  'spin 24s linear infinite',
        'float':      'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 3.5s ease-in-out infinite',
        'glow':       'glow 3s ease-in-out infinite',
        'slide-up':   'slide-up 0.6s ease-out',
        'fade-in':    'fade-in 0.6s ease-out',
        'bounce-slow':'bounce 2s infinite',
        'shimmer':    'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(0,128,255,0.4))' },
          '50%':      { opacity: '1', filter: 'drop-shadow(0 0 16px rgba(0,128,255,0.8))' },
        },
        'slide-up': {
          '0%':   { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

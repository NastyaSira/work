/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        flame: '#FF7849',
        'flame-light': '#FFB088',
        'flame-pale': '#FFF0E6',
        'flame-deep': '#E55A2B',
        cream: '#FFF8F0',
        teal: '#2ED3C4',
        'teal-light': '#A7F3EE',
      },
      keyframes: {
        flameIdle: {
          '0%, 100%': { transform: 'translateY(0px) scaleY(1)' },
          '50%': { transform: 'translateY(-7px) scaleY(1.02)' },
        },
        flameHappy: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '40%': { transform: 'translateY(-11px)' },
          '70%': { transform: 'translateY(-5px)' },
        },
        flameSleepy: {
          '0%, 100%': { transform: 'rotate(-5deg) translateY(2px)' },
          '50%': { transform: 'rotate(5deg) translateY(0px)' },
        },
        flameFocused: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        flameCelebrate: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '20%': { transform: 'translateY(-15px) rotate(-10deg)' },
          '40%': { transform: 'translateY(-10px) rotate(0deg)' },
          '60%': { transform: 'translateY(-13px) rotate(10deg)' },
          '80%': { transform: 'translateY(-6px) rotate(-5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        flamePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5) translateY(0)' },
          '50%': { opacity: '1', transform: 'scale(1) translateY(-8px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        toastIn: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        countUp: {
          '0%': { transform: 'scale(1.4)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'flame-idle': 'flameIdle 2.8s ease-in-out infinite',
        'flame-happy': 'flameHappy 1.3s ease-in-out infinite',
        'flame-sleepy': 'flameSleepy 3.5s ease-in-out infinite',
        'flame-focused': 'flameFocused 1.8s ease-in-out infinite',
        'flame-celebrate': 'flameCelebrate 0.65s ease-in-out infinite',
        'flame-pulse': 'flamePulse 2.2s ease-in-out infinite',
        sparkle: 'sparkle 1.2s ease-in-out infinite',
        'slide-up': 'slideUp 0.35s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'toast-in': 'toastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'count-up': 'countUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

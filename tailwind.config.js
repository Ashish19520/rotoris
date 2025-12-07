/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rotoris: {
          dark: '#13131f',
          darker: '#060609',
          bronze: '#4a3621',
          accent: '#007A61',
          muted: 'rgba(255, 255, 255, 0.6)',
        }
      },
      fontFamily: {
        rotoris: ['Switzer', 'system-ui', 'sans-serif'],
        decimal: ['Decimal', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-bronze': 'linear-gradient(180deg, rgba(74, 54, 33, 0) 0%, rgb(74, 54, 33) 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}


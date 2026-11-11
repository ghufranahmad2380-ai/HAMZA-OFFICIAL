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
          pink: '#FA699E',
          light: '#FF9FC7',
        },
        soft: {
          pink: '#FFE7F0',
        },
        accent: {
          green: '#4ADD82',
        }
      },
      fontFamily: {
        // Inter and Playfair Display are the design faces. Google Fonts serves
        // them pre-subsetted and the latin range stops at U+2215, so glyphs such
        // as "∞" (U+221E) or non-Latin scripts must resolve through a fallback.
        // The trailing families only ever apply to characters Inter/Playfair
        // cannot draw, so the Latin design is untouched.
        sans: [
          'Inter',
          'Segoe UI',
          'Noto Sans',
          'Noto Sans Arabic',
          'Segoe UI Symbol',
          'Apple Symbols',
          'Noto Sans Symbols 2',
          'Noto Sans Math',
          'DejaVu Sans',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'Playfair Display',
          'Segoe UI',
          'Noto Sans',
          'Noto Sans Arabic',
          'Segoe UI Symbol',
          'Apple Symbols',
          'Noto Sans Math',
          'DejaVu Sans',
          'serif',
        ],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 4s',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'rotate-slow': 'rotateSlow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
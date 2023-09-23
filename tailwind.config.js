/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        md: '1.75rem',
        lg: '2.00rem',
        xl: '4.00rem',
      },
    },
    screens: { xs: '375px', sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    extend: {
      colors: { blue: '#150E28', purpleLight: '#D434FE', purpleDark: '#903AFF' },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        unica: ['Unica One', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        400: '400',
        600: '600',
        700: '700',
      },
      fontSize: {
        12: ['0.75rem', '0.75rem'],
        13: ['0.8125rem', '1.7188rem'],
        14: ['0.875rem', '1.7188rem'],
        16: ['1rem', '1rem'],
        20: ['1.25rem', '1.6625rem'],
        24: ['1.5rem', '1.5rem'],
        28: ['1.75rem', '1.75rem'],
        32: ['2rem', '2rem'],
        36: ['2.25rem', '2.25rem'],
        48: ['3rem', '4rem'],
        64: ['4rem', '4rem'],
        80: ['5rem', '5rem'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

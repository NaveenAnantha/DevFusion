/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        fade: 'fade 2000ms ease-in-out infinite alternate',
        skew: 'skew 2000ms ease-in-out infinite alternate',
        translate: 'translate 2000ms ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fade: {
          '0%, 5%': { opacity: '0.05' },
          '100%': { opacity: '1' },
        },
        skew: {
          '0%': { transform: 'skewY(-17.5deg)' },
          '100%': { transform: 'skewY(17.5deg)' },
        },
        translate: {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
      },
    },
  },
  plugins: [],
};
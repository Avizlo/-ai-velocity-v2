/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { 'cloud-dancer': '#F0F0EC', 'dew-mint': '#dff4e7', 'electric-mint': '#97d5ae', 'charcoal': '#1A1A1A', 'steel': '#6B6B6B' },
      fontFamily: { sans: ['"Instrument Sans"', 'sans-serif'], serif: ['"AgenticTimes"', '"Times"', '"Times New Roman"', 'ui-serif', 'Georgia', 'serif'] },
      spacing: { 'section-desktop': '120px', 'section-mobile': '80px' },
      borderRadius: { 'card': '10px' },
      animation: {
        'breathe-mint': 'breathe-mint 8s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite'
      },
      keyframes: {
        'breathe-mint': { '0%, 100%': { opacity: '0.2' }, '50%': { opacity: '0.6' } },
        'marquee': { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-100%)' } }
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { 'cloud-dancer': '#ffffff', 'dew-mint': '#dff4e7', 'electric-mint': '#c0e9cb', 'charcoal': '#1A1A1A', 'steel': '#6B6B6B' },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-agentic-times)', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'sans-instrument': ['var(--font-instrument-sans)', 'sans-serif'],
        'agentic-times': ['var(--font-agentic-times)', 'serif']
      },
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

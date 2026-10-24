/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#050816',
        panel: '#0d1326',
        accent: '#77F2FF',
        neon: '#8B5CF6',
        glow: '#38BDF8',
      },
      boxShadow: {
        neon: '0 0 35px rgba(119, 242, 255, 0.35)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

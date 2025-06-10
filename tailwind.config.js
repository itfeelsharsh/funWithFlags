/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Looks for Tailwind classes in all JS/TS/JSX/TSX files in src directory
  ],
  theme: {
    extend: {
      // Modern and professional color palette
      colors: {
        'game-primary': '#3B82F6',     // Vibrant blue for primary actions
        'game-secondary': '#8B5CF6',   // Purple for secondary elements
        'game-dark': '#111827',        // Darker background for better contrast
        'game-light': '#F9FAFB',       // Light text/background elements
        'game-accent': '#F59E0B',      // Amber for highlights and accents
        'game-success': '#10B981',     // Green for success states
        'game-error': '#EF4444',       // Red for error states
        'game-neutral': '#6B7280',     // Neutral gray for subtle elements
      },
      fontFamily: {
        'game': ['Poppins', 'sans-serif'], // Modern font for game UI
      },
      boxShadow: {
        'game': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'game-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'flag-wave': 'flag-wave 2.5s ease-in-out infinite',
      },
      keyframes: {
        'flag-wave': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      },
      backgroundImage: {
        'game-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
    },
  },
  plugins: [],
} 
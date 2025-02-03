export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          600: '#2563eb',
          700: '#1d4ed8'
        },
        'red': {
          500: '#ef4444',
          600: '#dc2626'
        },
        'gray': {
          300: '#d1d5db',
          600: '#4b5563',
          800: '#1f2937'
        }
      }
    },
  },
  plugins: [],
}
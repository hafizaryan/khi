/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1e1b4b', // Deep indigo / cove signature dark
          purple: '#3b2063',
          purpleLight: '#533483',
          coral: '#f05a46', // Cove accent coral
          coralHover: '#dc4632',
          coralLight: '#fff1ef',
          teal: '#2e8a99',
          tealLight: '#e6f4f6',
          cream: '#faf8f5',
          surface: '#f8f9fa',
          muted: '#6b7280',
          border: '#e5e7eb',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 30px -10px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.06)',
        'float': '0 10px 40px -10px rgba(59, 32, 99, 0.18)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

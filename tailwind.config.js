/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'desktop': 'repeat(auto-fill, 280px)',
        'laptop': 'repeat(2, 1fr)',
        'mobile': 'repeat(auto-fill, 340px)',
      },

      screens: {
        'sm': '560px',
        'md': '650px',
      },
      
      fontFamily: {
        'serif': ['roboto', 'Georgia']
      }
    },
  },
  plugins: [],
}


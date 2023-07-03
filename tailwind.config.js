// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      noto: ['Noto', 'sans-serif'],
      //или
      // roboto: 'Roboto, sans-serif',
    },
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      gridTemplateColumns: {
        // "auto-full": "repeat(auto-fill, 346px)",
        "social": "repeat(auto-fill, 328px)",
      },
      // colors:{
      //   red: '#fff'
      // }
      maxWidth: {
        w: '1200px',
      },
    },
  },
  plugins: [],
}

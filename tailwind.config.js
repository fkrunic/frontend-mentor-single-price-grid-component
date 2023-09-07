/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screen: {
      desktop: '1440px'
    },
    fontFamily: {
      'karla': 'Karla, sans-serif'
    },
    colors: {
      'cyan': 'hsl(179, 62%, 43%)',
      'bright-yellow': 'hsl(71, 73%, 54%)',
      'light-gray': 'hsl(204, 43%, 93%)',
      'grayish-blue': 'hsl(218, 22%, 67%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {},
  },
  plugins: [],
}


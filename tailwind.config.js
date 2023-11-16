/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar0': '#262250',
        'sidebar1': '#1B1942',
        'sidebar2': '#17163B',
      },
      fontFamily: {
        montserrat: ['Montserrat', "sans-serif"],
        inter: ['Inter', "sans-serif"],
        fira: ['Fira Sans', "sans-serif"],
        jost: ['Jost', "sans-serif"],
        poppin: ['Poppins', "sans-serif"]
      },
      lineHeight: {
        'sidebar': '27.63px',
      },
      spacing: {
        '90': '90px',
        '78': '78px',
        "600": "600px",
        "500": "500px"
      },
      fontSize: {
        sidebar: ['22.6px'],
      },
      dropShadow: {
        'ring': '0 10px 10px rgba(186, 19, 88, 1)',
      },
      fontSize: {
        ssm: ['12px', '16px'],
      }
    },
  },
  plugins: [],
}
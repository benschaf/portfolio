/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-teal": "#264653ff",
        "brand-blue": "#2a9d8fff",
        "brand-pink": "#e9c46aff",
        "brand-orange": "#f4a261ff",
      },
      backgroundImage: {
        'gradient-top': 'linear-gradient(0deg, #264653ff, #2a9d8fff, #e9c46aff, #f4a261ff)',
        'gradient-right': 'linear-gradient(90deg, #264653ff, #2a9d8fff, #e9c46aff, #f4a261ff)',
        'gradient-blue-right': 'linear-gradient(90deg, #264653ff, #2a9d8fff)',
        'gradient-bottom': 'linear-gradient(180deg, #264653ff, #2a9d8fff, #e9c46aff, #f4a261ff)',
        'gradient-left': 'linear-gradient(270deg, #264653ff, #2a9d8fff, #e9c46aff, #f4a261ff)',
        'gradient-top-right': 'linear-gradient(45deg, #264653ff, #2a9d8fff, #e9c46aff, #f4a261ff)',
        'gradient-bottom-right': 'linear-gradient(135deg, #264653ff, #2a9d8fff, #e9c46aff, #f4a261ff)',
        'gradient-top-left': 'linear-gradient(225deg, #264653ff, #2a9d8fff, #e9c46aff, #f4a261ff)',
        'gradient-bottom-left': 'linear-gradient(315deg, #264653ff, #2a9d8fff, #e9c46aff, #f4a261ff)',
        'gradient-radial': 'radial-gradient(#264653ff, #2a9d8fff, #e9c46aff, #f4a261ff)',
      },
    },
  },
  plugins: [],
};
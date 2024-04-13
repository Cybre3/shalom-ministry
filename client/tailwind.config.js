/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*/*.{js,jsx}',
    './src/Components/**/*/*.{html,js,jsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'shake-left-right': 'shake-left-right 6s linear 3s infinite',
        'shake-up-down': 'shake-up-down 8s linear 3s infinite',
        'slideIn': 'slideIn 1s linear',
        'fadeIn': 'fadeIn 3s',
      },
      backgroundSize: {
        50: '50%',
        60: '60%',
        70: '70%',
        100: '100%',
      },
      backgroundColor: {
        'slight-black': '#00000042',
        'slight-white': '#FFF7F56B',
        'half-black': 'rgba(0, 0, 0, 0.5)',
        'clear-white': '#FCFFFA7C',
      },
      backgroundImage: {
        'login-img': "url('./assets/Nav/loginImg.png')",
        spaNsip: "url('../../assets/Home/spa&sip_Instagram.png')",
        'shalom-watermark': "url('./assets/Aboutus/SM-Logo-Watermark.png')",
        'shalom-gradient': "url('./assets/SM-Dove-Gradient-Stroke.png')",
        'clouds': "url('./assets/clouds.png')",
        'cwatHombre': "url('./assets/Register/cwat-square.png')"
      },
      borderRadius: {
        50: '50%',
      },
      boxShadow: {
        echo: '0px 0px 0px 8px #000000, 0px 0px 0px 16px #4B4C4B, 0px 0px 0px 24px #828482, 0px 0px 0px 31px #B2B5B2, 0px 0px 0px 39px #DADDDA, 5px 5px 15px 5px rgba(0,0,0,0)',
      },
      colors: {
        'outer-circle-teal': '#5fd1b5',
        'outer-circle-blue': '#1d6fad',
        'slight-black': '#00000042',
        'half-black': 'rgba(0, 0, 0, 0.5)',
        'shalom-lavendar-less': '#5b41ec53',
        'shalom-lavendar': '#c2b9f4',
        'shalom-sky-blue-less': '#98dbefca',
        'shalom-sky-blue': '#c5d7e7',
        'shalom-dark-purple': '#430269',
      },
      height: {
        55: '55vh',
        95: '95%',
        98: '98%',
        100: '100%',
      },
      width: {
        95: '95%',
        98: '98%',
      },
      keyframes: {
        'shake-left-right': {
          '0%, 10%, 20%, 30%, 50%, 70%, 80%, 90%, 100%': { transform: 'translate-x-0' },
          '30%, 50%': { transform: ' translateX(-5px)' },
          '40%, 60%': { transform: 'translateX(10px)' },
        },
        'shake-up-down': {
          '0%, 50%, 100%': { transform: 'translate-y-0' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateY(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateY(10px)' },
        },
        slideIn: {
          from: { transform: 'translateY(-250px)' },
          to: { transform: 'translateY(0px)' }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
      right: {
        'minus-6': 'right: -12px',
      },
      screens: {
        'md-lg': '920px',
      },
      translate: {
        'minus-0.5': '-0.5rem',
      },
    },
  },
  plugins: [],
};

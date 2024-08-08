/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'xxs': '404px',
      'xs' : '486px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
     
    },
    extend: {
      fontFamily: {
        Inter: ['inter', 'sans-serif'],
      },
      colors: {
        primary: '#1F1F1F',
        secondary: '#545454',
        tertiary: '#FF5733',
        quaternary: '#212121',
        white: '#ffffff',
        black: '#000000',
      },
      boxShadow:{ 
          'custom': '0 4px 58px rgba(0, 0, 27, 0.1);',
      },
    },
  },
    variants: {
    extend: {
      scrollBehavior: ['responsive'], // Make sure 'scrollBehavior' is added to the variants
    },
  },
  plugins: [],
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, //set to 'class' to activate
  theme: {
    
    extend: {
        colors: {
            jcBlue: '#639aff',
            jcBlueDark: '#3f83ff'
        },
        fontFamily: {
          jcLogo: ['Bebas Neue', 'cursive'],
          jcHeading: ['Nunito', 'sans-serif'],
          jcAltHeading: ['Montserrat', 'sans-serif'],
          jcSubHeading: ['Roboto', 'sans-serif'],
          jcBody: ['Mulish', 'sans-serif'],
          jcBodyBackup: ['Open Sans', 'sans-serif'],
        },
        height: {
          '375': '375px',  
        },
    },
    container: {
      center: true,
    },
    fontFamily: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

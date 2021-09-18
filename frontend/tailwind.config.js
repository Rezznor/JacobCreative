module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, //set to 'class' to activate
  theme: {
    
    boxShadow: {
        jc: '0 0 15px rgba(0, 0, 0, 0.1)',
        jcHover: '0 8px 30px -5px rgba(0, 0, 0, 0.2)',
        services: '0 0 30px rgba(0, 0, 0, 0.08)',
        jcMenuScroll: '0 2px 2px -2px rgba(0,0,0,.2);',
    },
    
    extend: {
        lineHeight: {
            '11': '2.75rem',
            '12': '3rem',
        },
        colors: {
            jcBlue: '#639aff',
            jcBlueDark: '#3f83ff',
            jcTestBlue: '#2d4a8c',
            jcFooter: '#262b35',
            jcTextLight: '#8890a4'
        },
        fontFamily: {
          jcLogo: ['Bebas Neue', 'cursive'],
          jcHeading: ['Nunito', 'sans-serif'],
          jcAltHeading: ['Montserrat', 'sans-serif'],
          jcSubHeading: ['Roboto', 'sans-serif'],
          jcBody: ['Mulish', 'sans-serif'],
          jcBodyBackup: ['Open Sans', 'sans-serif'],
          jcHeading2: ['Poppins', 'sans-serif'],
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
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms')
    ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        maxw:'1480px',
        hero_max_w: '539px',
        link_max_w: '240px',
        max_w: '175px',
        max_w_mwtext: '375px',
        main_max_w: '1203px'
      },
      colors: {
        address_black: '#222',  
        p: '#777',
        grey_bg: '#FF9B04',
        cd: '#CDCDCD' 
      },
      backgroundColor: {
        grey_bg: '#F5F5F5',
        bg_f9: '#FF9B04',
        yellow: '#FF9B04',
        cd: '#CDCDCD',
      },
      boxShadow: {
        show: '0-4-10-#000000-5%'
      }
    }
  },
  plugins: [],
}

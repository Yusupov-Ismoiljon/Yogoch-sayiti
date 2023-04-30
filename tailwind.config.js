/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      maxWidth:{
        maxw:'1480px',
        main_max_w: '1203px',
        sev: '1018px',
        div_img: '670px',
        with: '646px',
        hero_max_w: '539px',
        divide: '520px',
        img: '470px',
        max_w_mwtext: '420px',
        gboz: '366.42px',
        aksiya: '345px',
        link_max_w: '240px',
        catalogmw: '215px',
        max_w: '175px',

      },
      width: {
        s: '1272px',
        div: '1075px',
        div_img: '650px',
        b95: '595px',
        yuk: '577px',
        b33: '533px',
        divide: '520px',
        b3: '503px',
        img: '470px',
        table: '385px',
        doc:'340px',
        mm: '315px',
        ink_1: '255px',
        link: '250px',
        th: '230px',
        do: '190px',
        img1: '82px',
      },
      colors: {
        address_black: '#222',  
        p: '#777',
        grey_bg: '#FF9B04',
        cd: '#CDCDCD',
        yellow: '#FF9B04',
        s8: '#888',
        
      },
      backgroundColor: {
        grey_bg: '#F5F5F5',
        gray: '#F5F5F5',
        bg_f9: '#FF9B04',
        yellow: '#FF9B04',
        cd: '#CDCDCD',
        green: '#31C76D',
        f8: '#F8F8F8',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

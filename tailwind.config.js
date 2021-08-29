module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     
     extend: {
      colors:{
        background:"#301934",
          cardColor:"#410056"
       },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
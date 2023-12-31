/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
     ],

  theme: {
    extend: {
      fontFamily: {
        zolina: "zolina",
        garamond: 'EB Garamond',
      }
    },
    // screens: {
    //   'sm': '320px',
    //   'ssm': '375px',
    //   'xsm': '425px',   
    //   'lg': '1024px',  
    //   'xl': '1280px',  
    // },
  },
  plugins: [require("daisyui")
],
}


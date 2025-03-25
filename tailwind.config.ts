import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    backgroundImage: {

      BG: "url('../public/images/BG.svg')",
      PhoneBG: "url('../public/images/PhoneIMAGE.jpg')"
    },

    extend: {
      colors: {
      spickyBlue: '#052148',
      darkGreen: '#185049',
      darkGray: '#7F8490',
      spickyPink: '#F1598F',
      light: '#D0D8E44D',
      grayBlue: "#50647F",
      light2: '#D0D8E4',
      blue: '#50657E',
      lightBlack: '#4D4D4D',
      },
    },

    fontFamily:{
      DMSans: 'DMSans',
      DMSansBold: 'DMSansBold',
      Urbanist: 'Urbanist'

    }
  },
  plugins: [],
} satisfies Config;

import { grey } from '@material-ui/core/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4 , 100% , 67%)",
        darkGray: "hsl(234 , 29% , 20%)",
        charcoal: "hsl(235 , 18% , 26%)",
        grey: "hsl(231 , 7% , 60%)",
      },
      fontFamily: {
        display: ["Roboto", "sans-serif"],
      },
      listStyleImage: {
        iconList: "url('/src/assets/images/icon-list.svg')",
    },
  },
  plugins: [],
}
};
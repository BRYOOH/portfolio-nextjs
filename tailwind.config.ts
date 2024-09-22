import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    container:{
      center:true,
      padding:"15px",
        },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily:{
      primary: "var(--font-jetbrainsMono)",
  },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent:{
          DEFAULT: "#21bb11",
          hover: "#38e187",
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;

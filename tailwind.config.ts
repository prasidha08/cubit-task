import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#F41010",
        lightGray: "#959595",
        gray: "#7B7368",
        white: "#FFFFFF",
        lightPink: "#EDE1FF",
        davyGray: "#535353",
        black: "#000000",
      },
      fontFamily: {
        bricolageGrotesque: "Bricolage Grotesque",
      },
      fontWeight: {
        light: "400",
        normal: "600",
        medium: "700",
        bold: "800",
      },
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        title: "28px",
      },
      lineHeight: {
        firm: "12px",
        tight: "14.4px",
        snug: "16.8px",
        normal: "19.2px",
        medium: "21.6px",
        large: "33.6px",
      },
    },
  },
  plugins: [],
};
export default config;

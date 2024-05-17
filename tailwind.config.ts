import type { Config } from "tailwindcss";

export const lightRed = "#F35C6A";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "639px" },
      },
      colors: {
        red: "#F41010",
        lightGray: "#959595",
        gray: "#7B7368",
        white: "#FFFFFF",
        lightPink: "#EDE1FF",
        davyGray: "#535353",
        black: "#000000",
        blue: "#5215FF",
        darkPink: "#EB09FE",
        lightRed,
        "custom-purple": "#A083F2",
        "custom-pink": "#F55A66",
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
      animation: {
        circle1: " moveCircle1 5s infinite",
        circle2: "moveCircle2 5s infinite",
        circle3: "",
      },
      keyframes: {
        moveCircle1: {
          "0%, 75%": {
            transform: "translate(-89px, 52px)",
          },
          "25%, 75%": {
            transform: "translate(-200px, 58px)",
          },
          "50%": {
            transform: "translate(-10px, 20px)",
          },
        },
        moveCircle2: {
          "0%,100%": {
            transform: "translate(-10px, 20px)",
          },
          " 25%,75%": {
            transform: "translate(-10px, 200px)",
          },
        },
        moveCircle3: {},
      },
    },
  },
  plugins: [],
};
export default config;

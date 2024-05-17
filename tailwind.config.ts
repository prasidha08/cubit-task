import type { Config } from "tailwindcss";

export const lightRed = "#F35C6A";

export const borderGradientColor =
  "linear-gradient(92.61deg, #A083F2 0.69%, #F55A66 101.14%)";

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
        circle1: " moveCircle1 15s infinite linear",
        circle2: "moveCircle2 15s infinite linear",
        circle3: "moveCircle3  15s infinite linear",
        newCircleOne: "newOne 15s infinite linear",
        newCircleTwo: "newTwo 15s infinite linear",
        newCircleThree: "newThree 15s infinite linear",
        diagonalAnimation: "diagonal 15s infinite linear",
      },
      keyframes: {
        newOne: {
          "0%": {
            transform: "rotate(-360deg)",
          },
          "50%": {
            opacity: "0",
          },
          "75%": {
            opacity: "1",
          },
        },
        newTwo: {
          "0%": {
            transform: "rotate(-360deg)",
          },
          "25%": {
            opacity: "0",
            transform: "translate(-60%,0%)", // left center
          },
          "50%": {
            transform: "translate(-140%,-140%)", // left top corner
          },
          "75%": {
            opacity: "1",
          },
        },
        newThree: {
          "0%": {
            transform: "rotate(-360deg)",
          },
          "25%": {
            transform: "translate(-60%,0%)", // left center
          },
          "50%": {
            transform: "translate(-140%,-140%)", // left top corner
          },
        },
        diagonal: {
          "10%": { scale: "0.1" },
          "25%": {
            scale: "6",
          },
          "50%": {
            scale: "7",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

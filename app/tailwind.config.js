/** @type {import('tailwindcss').Config} */

import { transcode } from 'buffer';
import { transform } from 'typescript';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        notojp: ["Noto Sans JP", "sans-serif"],
        notoserif: ["Noto Serif", "serif"],
      },

      borderRadius: {
        lg: "10px",
        md: "5px",
        sm: "calc(var(--radius) - 4px)",
      },

      height: {
        smLogo: "40px",
        lgLogo: "500px",
      },

      colors: {
        // General Colours
        background: "#F5F1E8",
        backgroundPrimary: "#293040",
        backgroundSecondary: "#2B364D",

        leaf: "#1F8A78",
        bluePrimary: "#3736CF",
        blueSecondary: "#BBDCEF",
        turqoise: "#27A0D2",
        cardPrimary: "#1F2432",
        cardSecondary: "#2B364D",
        cardPrimaryHover: "#3C4965",

        // Item specific
        sidebarPrimary: "#2B364D",
        sidebarSecondary: "#1F2432",
        sidebarButtonHover: "#555D6F",
        sidebarRowHover: "#46566E",
        sidebarActive: "#61DBFB",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(180px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        rotateX: {  
          "0%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
          '30%': {
            transform: "rotateX(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
        },
        rotateOutX: {
          "0%": {
            transform: "rotateX(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
        },
        rotateY: {  
          "0%": {
            transform: "rotateY(0deg)",
            opacity: "1",
          },
          '30%': {
            transform: "rotateY(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateY(0deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideUp: "slideUp 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        rotateX: "rotateX 1.2s ease-out forwards",
        rotateOutX: "rotateOutX 1.2s ease-out forwards",
        rotateY: "rotateY 1.2s ease-out forwards"
      },
    },
  },
};

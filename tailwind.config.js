/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        paraSlide: {
          from: {
            opacity: 0,
            transform: "translateX(-100)",
            // position:"absolute"

          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
            // position:"relative"


          }
        },
        headSlide: {
          from: {
            bottom:"80px"

          },
          to: {
            bottom:"140px"
          }
        }
      },
      animation: {
        paraSlide: "paraSlide 1s linear",
        headSlide: "headSlide 0.5s linear",
      }
    },
  },
  plugins: [],
}
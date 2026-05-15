/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        clean: ["Poppins", "Inter", "sans-serif"],
        hand: ["Caveat", "Patrick Hand", "cursive"],
        note: ["Patrick Hand", "Caveat", "cursive"],
      },
      colors: {
        midnight: "#080815",
        plum: "#1b102d",
        rose: "#f7a8b8",
        peach: "#ffd1b7",
        lavender: "#cbb6ff",
        paper: "#f2dcc5",
        ink: "#2a1d25",
        cream: "#fff7ed",
      },
      boxShadow: {
        glow: "0 0 34px rgba(247, 168, 184, 0.32)",
        lavender: "0 0 45px rgba(203, 182, 255, 0.28)",
        paper: "0 22px 50px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "dream-gradient":
          "radial-gradient(circle at 20% 10%, rgba(247,168,184,.24), transparent 28%), radial-gradient(circle at 84% 18%, rgba(203,182,255,.22), transparent 32%), linear-gradient(135deg, #080815 0%, #16102a 45%, #2a1534 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: ".35", transform: "scale(.92)" },
          "50%": { opacity: "1", transform: "scale(1.12)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        twinkle: "twinkle 2.8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

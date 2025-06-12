module.exports = {
  content: ["./*.html", "./slides/**/*.html", "./src/**/*.{js,ts,html}"],
  safelist: [
    "w-[90%]",
    "max-w-[1200px]",
    "min-h-[80vh]",
    "bg-white/5",
    "border-white/10",
    "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in": "slideIn 0.6s ease-out",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

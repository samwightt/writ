module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover", "group-focus"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};

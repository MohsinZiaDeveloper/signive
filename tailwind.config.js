const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      buttonColor: "#24A9E0",
      logoColor: "#0C4F76",
      footerColor: "#24A9E0",
      lightfooterColor: "#ABE2F9",
    },
  },
  plugins: [],
};

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./*.html"],
  theme: {
    colors: {
      primary: "#dc3545",
      bermuda: "#78dcca",
    },
  },
  plugins: [],
});

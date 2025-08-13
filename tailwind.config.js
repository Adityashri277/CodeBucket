export const content = ["*"];
export const theme = {
  extend: {
    fontFamily: {
      serif: ['"Old Standard TT"', "serif"],
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
  require("@tailwindcss/aspect-ratio"),
  require("tailwindcss-gradients"),
];

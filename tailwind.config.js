module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('../images/hero.jpg')",
      }),
      colors: {
        "chalk-dark-gray": "#bada55",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

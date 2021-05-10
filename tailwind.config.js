module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('../images/hero.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

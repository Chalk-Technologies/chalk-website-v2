module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('../images/hero.jpg')",
        gyms: "url('../images/gyms.jpg')",
        climbers: "url('../images/climbers.jpg')",
      }),
      colors: {
        "chalk-dark-gray": "#333333",
        "chalk-orange": `#F89C1A`,
        "chalk-light-gray": `#B3BFCD`,
        "chalk-blue": `#205478`,
        "chalk-gray": "#E3E3E3",
      },
      fontFamily: {
        body: [`Raleway, Helvetica, sans-serif`],
        heading: [`Russo one, Roboto, sans-serif`],
        number: [`Roboto, sans-serif`],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('../images/hero_img.jpg')",
        gyms: "url('../images/gyms_img.jpg')",
        climbers: "url('../images/climbers_img.jpg')",
        modal: "url('../images/modal_img.jpg')",
        aboutus: "url('../images/about-us_img.jpg')",
        termsandconditions: "url('../images/terms-and-conditions_img.jpg')",
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

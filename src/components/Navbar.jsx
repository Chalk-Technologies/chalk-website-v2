import React, { useState } from "react";
import { Link } from "gatsby";
import tw from "twin.macro";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "../images/logo_hrz_white.svg";
import MenuButton from "../images/icons/menu_icon.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const data = {
    menuItems: [
      {
        text: "Home",
        to: "/",
      },
      {
        text: "Beta for climbers",
        to: "/beta",
      },
      {
        text: "Gamma for gyms",
        to: "/gamma",
      },
      {
        text: "About us",
        to: "/about-us",
      },
      {
        text: "Contact us",
        to: "/contact",
      },
      {
        text: "Terms and Conditions",
        to: "/terms-and-conditions",
      },
    ],
  };

  return (
    <nav className="fixed top-0 z-20 w-screen pt-2">
      <div className="container relative flex items-center justify-between mx-auto mt-4 lg:mt-0">
        <div>
          <button onClick={() => setShowMenu(!showMenu)}>
            <img src={MenuButton} className="h-14 lg:h-20" alt="menu button" />
          </button>

          <AnimatePresence>
            {showMenu && (
              <motion.div
                className="flex flex-col pl-8"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ height: -10, opacity: 0 }}
                transition={{ bounce: 0, duration: 0.3 }}
              >
                {data.menuItems.map(({ text, to }, idx) => (
                  <Item key={idx}>
                    <Link to={to}>{text}</Link>
                  </Item>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link
          className="absolute top-0 right-0 flex text-white color-white"
          to="/"
        >
          <img
            src={Logo}
            className="pb-2 fill-current h-14 lg:h-20 color-white"
            alt="beta's logo"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

const Item = tw.div`
border-chalk-orange border-l-8 text-white p-2 uppercase text-2xl font-heading bg-chalk-dark-gray pr-10 hover:scale-105 hover:text-chalk-orange hover:bg-chalk-gray 
`;

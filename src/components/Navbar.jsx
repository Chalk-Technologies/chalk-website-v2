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
    ],
  };

  return (
    <nav className="fixed top-0 w-screen z-20 pt-2">
      <div className="container mt-4 lg:mt-0 mx-auto flex justify-between items-center relative">
        <div
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div>
            <img src={MenuButton} className="h-14 lg:h-20" />
          </div>

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
                  <Item>
                    <Link to={to}>{text}</Link>
                  </Item>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link
          className="text-white flex color-white absolute right-0 top-0"
          to="/"
        >
          <img
            src={Logo}
            className="h-14 lg:h-20 fill-current color-white pb-2"
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

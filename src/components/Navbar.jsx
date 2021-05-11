import React, { useState } from "react";
import { Link } from "gatsby";
import tw from "twin.macro";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "../images/logo_hrz_white.svg";

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
    ],
  };

  return (
    <nav className="fixed top-0 z-10 flex justify-between w-screen p-5 z-50">
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <Item>Menu</Item>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="flex flex-col"
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
      <Link className="text-white flex color-white" to="/">
        <img src={Logo} className="h-20 fill-current color-white" />
      </Link>
    </nav>
  );
};

export default Navbar;

const Item = tw.div`
border-chalk-orange border-l-8 text-white p-2 uppercase text-2xl font-heading bg-chalk-dark-gray pr-10 hover:scale-105 hover:text-chalk-orange hover:bg-chalk-gray 
`;

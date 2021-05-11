import React from "react";
import { Link } from "gatsby";

import Logo from "../images/logo_hrz_white.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-10 flex justify-between w-screen p-5">
      <button>Menu</button>
      <Link className="text-white flex color-white" to="/">
        <img src={Logo} className="h-20 fill-current color-white" />
      </Link>
    </nav>
  );
};

export default Navbar;

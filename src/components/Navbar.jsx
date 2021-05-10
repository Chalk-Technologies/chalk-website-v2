import React from "react";
import styled from "styled-components";

import Logo from "../images/logo_hrz_white.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-10 flex justify-between w-screen p-5">
      <button>Menu</button>
      <div className="text-white flex color-white">
        <img src={Logo} className="h-20 fill-current color-white" />
      </div>
    </nav>
  );
};

export default Navbar;

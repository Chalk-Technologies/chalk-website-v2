import * as React from "react";
import { Link } from "gatsby";
import tw from "twin.macro";
import { Trans } from "@lingui/macro";

const MenuClimbersGyms = ({ setMenu }) => {
  return (
    <div className="container flex justify-between px-8 pb-12 mx-auto">
      <Button
        onMouseEnter={() => setMenu("climbers")}
        onMouseLeave={() => setMenu(null)}
        className="hover:text-chalk-orange"
      >
        <Link to="/beta" className="flex-grow text-left">
          <Trans>
            Powers
            <br />
            climbers
          </Trans>
        </Link>
      </Button>
      <Button
        onMouseEnter={() => setMenu("gyms")}
        onMouseLeave={() => setMenu(null)}
        className="hover:text-chalk-orange"
      >
        <Link to="/gamma" className="flex-grow text-right">
          <Trans>
            Powers
            <br />
            gyms
          </Trans>
        </Link>
      </Button>
    </div>
  );
};

export default MenuClimbersGyms;

const Button = tw.button`
text-white text-xl md:text-3xl lg:text-5xl uppercase font-heading flex items-stretch
`;

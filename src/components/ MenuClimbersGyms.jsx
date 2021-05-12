import * as React from "react";
import { Link } from "gatsby";
import tw from "twin.macro";

const MenuClimbersGyms = ({ setMenu }) => {
  return (
    <div className="container flex justify-between mx-auto pb-12 px-8">
      <Button
        onMouseEnter={() => setMenu("climbers")}
        onMouseLeave={() => setMenu(null)}
        className="hover:text-chalk-orange"
      >
        <Link to="/beta" className="flex-grow">
          Powers
          <br /> climbers
        </Link>
      </Button>
      <Button
        onMouseEnter={() => setMenu("gyms")}
        onMouseLeave={() => setMenu(null)}
        className="hover:text-chalk-orange"
      >
        <Link to="/gamma" className="flex-grow">
          Powers <br />
          gyms
        </Link>
        t
      </Button>
    </div>
  );
};

export default MenuClimbersGyms;

const Button = tw.button`
text-white text-xl md:text-3xl lg:text-5xl uppercase font-heading flex items-stretch
`;

import * as React from "react";
import tw from "twin.macro";

const MenuClimbersGyms = ({ setMenu }) => {
  return (
    <div className="container flex justify-between mx-auto pb-12 px-8">
      <Button
        onMouseEnter={() => setMenu("climbers")}
        onMouseLeave={() => setMenu(null)}
      >
        Powers
        <br /> climbers
      </Button>
      <Button
        onMouseEnter={() => setMenu("gyms")}
        onMouseLeave={() => setMenu(null)}
      >
        Powers <br />
        gyms
      </Button>
    </div>
  );
};

export default MenuClimbersGyms;

const Button = tw.button`
text-white text-xl md:text-3xl uppercase font-heading
`;

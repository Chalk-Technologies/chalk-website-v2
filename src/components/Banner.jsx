import React from "react";
import tw, { styled } from "twin.macro";
import Logo from "../images/icons/logo_icon_light_gray.svg";

const Banner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <Word>Send</Word>
      <div className="w-12">
        <img src={Logo} />
      </div>
      <Word>Climb</Word>
      <div className="w-12">
        <img src={Logo} />
      </div>
      <Word>Train</Word>
    </div>
  );
};

export default Banner;

const Word = tw.span`
mx-4 text-chalk-light-gray text-3xl md:text-4xl lg:text-4xl uppercase font-heading
`;
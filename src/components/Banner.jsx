import React from "react";
import tw, { styled } from "twin.macro";

const Banner = () => {
  return (
    <div>
      <Button>Test</Button>
    </div>
  );
};

export default Banner;

const Button = tw.span`
bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`;

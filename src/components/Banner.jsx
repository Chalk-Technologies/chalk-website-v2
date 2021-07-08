import React from "react";
import tw from "twin.macro";
import Logo from "../images/icons/logo_icon_light_gray.svg";
import { Trans } from "@lingui/macro";

const Banner = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <Word>
        <Trans>Send</Trans>
      </Word>
      <div className="w-12">
        <img src={Logo} alt="Beta's logo" />
      </div>
      <Word>
        <Trans>Climb</Trans>
      </Word>
      <div className="w-12">
        <img src={Logo} alt="Beta's logo" />
      </div>
      <Word>
        <Trans>Train</Trans>
      </Word>
    </div>
  );
};

export default Banner;

const Word = tw.span`
mx-4 text-chalk-light-gray text-3xl md:text-4xl lg:text-4xl uppercase font-heading
`;

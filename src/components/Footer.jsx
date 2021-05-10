import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const data = {
  socialMedia: [
    {
      alt: "instagram",
      icon: <FaInstagram className="h-8 w-8" />,
      href: "",
    },
    {
      alt: "linkedin",
      icon: <FaLinkedinIn className="h-8 w-8" />,
      href: "",
    },
  ],
};
const Footer = () => {
  return (
    <footer className="flex bg-chalk-dark-gray px-6 py-3">
      <div className="flex-grow w-1/3">
        <small className="text-white">
          Copyright © 2021. Chalk technologies. all rights reserved
        </small>
      </div>
      <div className="flex-grow flex justify-center w-1/3 text-white ">
        {data.socialMedia.map((item) => (
          <a href={item.href} className="mx-4" target="_blank">
            {item.icon}
          </a>
        ))}
      </div>
      <div className="flex-grow w-1/3"></div>
    </footer>
  );
};

export default Footer;

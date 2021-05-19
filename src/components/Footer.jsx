import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const data = {
  socialMedia: [
    {
      alt: "instagram",
      icon: <FaInstagram className="w-8 h-8" />,
      href: "https://www.instagram.com/chalk.tech/",
    },
    {
      alt: "linkedin",
      icon: <FaLinkedinIn className="w-8 h-8" />,
      href: "https://www.linkedin.com/company/chalk-technologies",
    },
  ],
};
const Footer = () => {
  return (
    <footer className="flex flex-wrap px-6 py-3 bg-chalk-dark-gray md:flex-nowrap">
      <div className="flex-grow order-first w-full text-center md:w-1/3 md:text-left">
        <small className="text-white">
          Copyright © 2021. Chalk technologies. all rights reserved
        </small>
      </div>
      <div className="flex justify-center flex-grow order-first w-full pb-3 text-white md:order-1 md:w-1/3 md:py-0">
        {data.socialMedia.map((item, idx) => (
          <a
            href={item.href}
            key={idx}
            className="mx-4"
            rel="noreferrer"
            target="_blank"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="flex-grow order-3 hidden w-1/3 md:block"></div>
    </footer>
  );
};

export default Footer;

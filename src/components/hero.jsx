import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Hero = ({ setShowModal }) => {
  const data = {
    buttons: [
      {
        name: "Download for Android",
        onClick: () => setShowModal(true),
      },
      {
        name: "Download for iOS",
        onClick: () => setShowModal(true),
      },
    ],
  };

  return (
    <Container className="bg-center bg-no-repeat bg-cover bg-hero pt-36">
      <div className="container flex flex-wrap items-stretch justify-between flex-grow pb-40 mx-auto md:flex-grow-0">
        <div className="flex flex-col items-stretch justify-between flex-grow px-8 flex-nowrap lg:pr-0 lg:items-start">
          <List className="flex flex-col items-stretch justify-start flex-grow flex-nowrap">
            {data.buttons.map((button, idx) => (
              <li
                key={idx}
                className={`border-2 border-white flex items-center justify-center ${
                  button.variant
                    ? "hover:bg-chalk-orange hover:border-chalk-orange bg-white"
                    : "hover:bg-chalk-dark-gray hover:border-chalk-dark-gray"
                } hover:scale-110 transition`}
              >
                <button
                  className={`${
                    button.variant
                      ? "text-chalk-dark-gray hover:text-white"
                      : "text-white"
                  } py-3 px-5 uppercase font-heading flex-grow-1`}
                  onClick={button.onClick}
                >
                  {button.name}
                </button>
              </li>
            ))}
          </List>
        </div>
        <div className="flex flex-col justify-between flex-grow order-first md:ml-12 lg:order-last ">
          <h1 className="pr-8 text-3xl text-right text-white uppercase font-heading md:text-5xl w-100 md:pr-0">
            Make your <br /> sessions count
          </h1>
          <div className="h-1 my-2 bg-chalk-orange w-100" />
          <div className="flex justify-end px-7 md:px-0">
            <Link
              to="/contact"
              className="flex items-center justify-center flex-grow w-1/2 px-8 py-3 mb-8 text-black uppercase transition bg-white rounded font-heading md:mb-0 md:flex-grow-0 hover:bg-chalk-orange hover:scale-105"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%);
  padding-bottom: 10%;
`;

const List = styled.ul`
  li:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

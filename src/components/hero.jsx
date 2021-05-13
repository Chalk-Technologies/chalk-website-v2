import React from "react";
import styled from "styled-components";

const data = {
  buttons: [
    {
      name: "Download for Android",
      href: "/",
    },
    {
      name: "Download for iOS",
      href: "/",
    },
    {
      name: "Sign up for the newsletter",
      href: "/",
      variant: true,
    },
  ],
};

const Hero = () => {
  return (
    <Container className="bg-hero bg-center bg-cover bg-no-repeat pt-36">
      <div className="container mx-auto flex flex-wrap justify-between items-stretch flex-grow md:flex-grow-0 pb-40">
        <div className="flex flex-col flex-nowrap pl-8 items-start justify-between flex-grow">
          <List className="flex-grow flex flex-col flex-nowrap justify-between">
            {data.buttons.map((button, idx) => (
              <li
                key={idx}
                className={`border-2 border-white flex items-center justify-center ${
                  button.variant
                    ? "hover:bg-chalk-orange hover:border-chalk-orange bg-white"
                    : "hover:bg-chalk-dark-gray hover:border-chalk-dark-gray"
                } hover:scale-110 transition`}
              >
                <a
                  className={`${
                    button.variant
                      ? "text-chalk-dark-gray hover:text-white"
                      : "text-white"
                  } py-3 px-5 uppercase font-heading`}
                  href={button.href}
                >
                  {button.name}
                </a>
              </li>
            ))}
          </List>
        </div>
        <div className="flex flex-col justify-between flex-grow md:ml-12 order-first lg:order-last ">
          <h1 className="text-white font-heading text-3xl md:text-5xl uppercase text-right w-100 pr-8 md:pr-0">
            Make your <br /> sessions count
          </h1>
          <div className="h-1 bg-chalk-orange w-100 my-2" />
          <div className="flex justify-end px-7 md:px-0">
            <button className="py-3 px-8 bg-white flex items-center justify-center text-black w-1/2 uppercase font-heading mb-8 md:mb-0 flex-grow md:flex-grow-0 hover:bg-chalk-dark-gray hover:text-white transition hover:scale-105">
              Get in touch
            </button>
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

const List = styled.li`
  li:not(:first-child) {
    margin-top: 0.5rem;
  }
`;

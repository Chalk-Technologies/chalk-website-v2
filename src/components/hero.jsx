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
    },
  ],
};

const Hero = () => {
  return (
    <>
      <Container className="h-screen bg-hero bg-cover pt-36">
        <div className="container mx-auto flex justify-between items-center  h-1/2">
          <div className="flex justify-center w-1/3">
            <ul>
              {data.buttons.map((button) => (
                <li className="border-2 border-white flex items-center justify-center my-2 hover:bg-gray-900 hover:scale-110 transition">
                  <a
                    className="text-white py-3 px-5 uppercase"
                    href={button.href}
                  >
                    {button.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end w-1/2">
            <h1 className="text-white text-6xl uppercase text-right w-100">
              Make your <br /> sessions count
            </h1>
            <div className="h-1 bg-red-500 w-100 my-8" />
            <div className="flex justify-end">
              <button className="py-3 px-8 bg-white flex items-center justify-center text-black w-1/2 uppercase">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;

const Container = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%);
`;

// @refresh reset

import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Gym from "../images/frames/Gym.png";
import Profile from "../images/frames/Profile.png";
import QRScanner from "../images/frames/QRScanner.png";
import Route from "../images/frames/Route.png";

const BetaPage = () => {
  const data = {
    rows: [
      {
        title: "Find your next send & project",
        text: [
          "BETA lets you search and explorer the gyms near you, or in the city you are visiting when the approaches or weather got you down.",
          "Explorer the top rated routes in the gyms, find the routes that git your styled, and the grades that you can send.",
        ],
        alt: "Screenshot of the gym page of Beta",
        picture: Gym,
      },
      {
        title: "The ultimate gym tool",
        text: [
          "Climbing shoes, a Chalk bag and the BETA App - the must haves for climbing at the gym...",
          "We have developed new technology TAPTOSEND which allows you to easily move through the gym, scan the next route that catches your eye and start climbing. Track the time you have been climbing for and tick it as sent!",
        ],
        alt: "Screenshot of the route scanner page of Beta",
        picture: QRScanner,
      },
      {
        title: "Track your progress",
        text: [
          "We have brought the climbing guidebook to the 21st century. You can now see the routes you have sen, tracking your progress over time.",
          "We are also secretly working in the background to add even more features for you to track your progress, a true digital coach.",
        ],
        alt: "Screenshot of the athlete metrics page of Beta",
        picture: Profile,
      },
      {
        title: "Make your voice heard",
        text: [
          "BETA gives you a voice allowing you to let route setters and gyms know which routes were the bomb or which were not.",
        ],
        alt: "Screenshot of the route reviews page of Beta",
        picture: Route,
      },
    ],
  };
  return (
    <Layout>
      <h1 className="pt-36 pb-12 text-5xl text-white uppercase font-heading pl-8">
        Powers <br />
        climbers
      </h1>
      <div className="relative">
        <Image className="bg-climbers bg-cover py-96 bg-center" />
        <div className="bg-chalk-orange w-1 h-full absolute left-0 top-0 ml-24 mt-24 z-10" />
      </div>
      <div className="bg-chalk-gray">
        <div className="container mx-auto py-36">
          {data.rows.map(({ title, text, picture, alt }, idx) => (
            <Row
              isLast={idx === data.rows.length - 1}
              key={title}
              className="grid grid-cols-3"
            >
              <div
                className={idx % 2 === 0 ? "order-last" : "order-first"}
              ></div>
              <div
                className={`${idx % 2 === 0 ? "order-first" : "order-last"}`}
              >
                <Frame className="mx-auto" src={picture} alt={alt} />
              </div>
              <div className="px-8">
                <h1 className="text-4xl text-chalk-orange font-heading uppercase">
                  {title}
                </h1>
                {text.map((paragraph) => (
                  <p key={paragraph} className="py-4 font-body text-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Row>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BetaPage;

const Image = styled.div`
  clip-path: polygon(0 0%, 100% 50%, 100% 100%, 0 100%);
`;

const Row = styled.div`
  margin-bottom: ${(props) => (props.isLast ? "0" : "-30vh")};
`;

const Frame = styled.img`
  position: relative;
  top: -3vh;
  height: 80vh;
`;

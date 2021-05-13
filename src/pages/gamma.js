import React from "react";
import styled from "styled-components";

import FramesGrid from "../components/FramesGrid";
import Layout from "../components/Layout";

import Gym from "../images/frames/Gym.png";
import Profile from "../images/frames/Profile.png";
import QRScanner from "../images/frames/QRScanner.png";
import Route from "../images/frames/Route.png";

const Gamma = () => {
  const data = {
    rows: [
      {
        title: "Taptosend",
        text: [
          "BETA lets you search and explore the gyms near you, or in the city you are visiting when the approaches or weather got you down.",
          "Explore the top rated routes in the gyms, find the routes that git your style, and the grades that you can send.",
        ],
        alt: "Screenshot of the gym profile page",
        picture: Gym,
      },
      {
        title: "The event manager",
        text: [
          "Climbing shoes, a Chalk bag adn the BETA App - the must haves for climbing at the gym...",
          "We have developed new technology TAPTOSEND which allows you to easily move through the gym, scan the next route that catches your eye and start climbing. Track the time you have been climbing for, and tick it as sent!",
        ],
        alt: "Screenshot of the QRScanner TAPTOSEND",
        picture: QRScanner,
      },
      {
        title: "The route manager",
        text: [
          "We have brought the climbing guidebook to the 21st century. You can now see the routes your have sent, tracking your progress over time.",
          "We are also secretly working in the background to add even more features for you to track your progress, a true digital coach.",
        ],
        alt: "Screenshot of the profile metrics",
        picture: Profile,
      },
      {
        title: "Customer / Profile manager",
        text: ["Leave personal notes on the climber profile page."],
        alt: "Screenshot of the reviews",
        picture: Route,
      },
    ],
  };
  return (
    <Layout>
      <section className="min-h-screen pt-36">
        <h1 className="pt-36 pb-12 text-5xl text-white uppercase font-heading pl-8">
          Powers <br />
          Gyms
        </h1>
        <div className="relative">
          <Image className="bg-gyms bg-cover py-96 bg-center" />
          <div className="bg-chalk-orange w-1 h-full absolute left-0 top-0 ml-24 mt-24 z-10" />
        </div>
      </section>
      <FramesGrid data={data} />
    </Layout>
  );
};

export default Gamma;

const Image = styled.div`
  clip-path: polygon(0 50%, 100% 0%, 100% 100%, 0 100%);
`;

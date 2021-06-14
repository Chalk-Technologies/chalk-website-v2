// @refresh reset

import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import FramesGrid from "../components/FramesGrid";
import Gym from "../images/frames/Gym.png";
import Profile from "../images/frames/Profile.png";
import QRScanner from "../images/frames/QRScanner.png";
import Route from "../images/frames/Route.png";
import Seo from "../components/SEO";

const BetaPage = () => {
  const data = {
    rows: [
      {
        title: "Find & send new projects",
        text: [
          "BETA lets you search and explore the gyms near you, or in the city you are visiting when you're on the road.",
          "Explore the top rated routes in the gyms, find the routes that fit your style, save and share the routes you attempt.",
        ],
        alt: "Screenshot of the gym page of Beta",
        picture: Gym,
      },
      {
        title: "Navigate the gym",
        text: [
          "Climbing shoes, a Chalk bag and the BETA App will be your new must haves for climbing in a gym.",
          "With our new technology TAP-TO-SEND you can easily move through the gym, scan the routes that catch your eye and start climbing.",
          "Beta lets your track each attempt, and save routes as you send them,.",
        ],
        alt: "Screenshot of the route scanner page of Beta",
        picture: QRScanner,
      },
      {
        title: "Track your progress",
        text: [
          "We're transforming the climbing guidebook. You can now see the routes you have sent or attempted as well as track your progress over time.",
          "We are also working in the background on features that will you tips on how to progress and climb harder",
        ],
        alt: "Screenshot of the athlete metrics page of Beta",
        picture: Profile,
      },
      {
        title: "Be heard",
        text: [
          "BETA gives you a voice allowing you to let route-setters and gyms know what you think of each route, as well as the gym as a whole.",
        ],
        alt: "Screenshot of the route reviews page of Beta",
        picture: Route,
      },
    ],
  };

  const seo = {
    title: "BETA Climbing app",
    description:
      "BETA lets you track and share your climbing session with QR-code route tags, progress analytics, challenged and project setting",
  };

  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <Layout>
        <section className="min-h-screen pt-36">
          <h1 className="pb-12 pl-8 text-5xl text-white uppercase font-heading">
            Powers <br />
            climbers
          </h1>
          <div className="relative">
            <Image className="bg-center bg-cover bg-climbers py-96" />
            <div className="absolute top-0 left-0 z-10 w-1 h-full mt-24 ml-24 bg-chalk-orange" />
          </div>
        </section>
        <FramesGrid data={data} />
      </Layout>
    </>
  );
};

export default BetaPage;

const Image = styled.div`
  clip-path: polygon(0 0%, 100% 50%, 100% 100%, 0 100%);
`;

import React from "react";
import styled from "styled-components";

import FramesGrid from "../components/FramesGrid";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import Gym from "../images/frames/Gym.png";
import Profile from "../images/frames/Profile.png";
import Route from "../images/frames/Route.png";

const Gamma = () => {
  const data = {
    rows: [
      {
        title: "Enhance the experience",
        text: [
          "Easily and efficiently log the routes you have active, while giving your customers access to digital route pages.",
          "Engage with climbers by collecting feedback on routes and democratizing the grading system",
        ],
        alt: "Screenshot of the QRScanner TAPTOSEND",
        picture: Gym,
      },
      {
        title: "Manage classes & events",
        text: [
          "Create an online event calendar accessible to all BETA users and gym members",
          "Manage customer loads and peak hours and gain access to business intelligence data.",
        ],
        alt: "Screenshot of the profile metrics",
        picture: Profile,
      },
      {
        title: "Know your customer",
        text: [
          "We use AI technology on the aggregated data from all users to help businesses understand their customers better.",
          "Routesetters will have more honest feedback from users, managers will be able to see which opening hours might overstaffed, and the app makes class scheduling and memberships a breeze",
        ],
        alt: "Screenshot of the reviews",
        picture: Route,
      },
      {
        title: "Join the movement",
        text: [
          "We'll help you set up BETA in your gym for free. Contact us today.",
        ],
      },
    ],
  };

  const seo = {
    title: "GAMMA Climbing Gym Software",
    description:
      "GAMMA powers climbing gyms by providing digital route setting, event and class management as well as business analytics, while transforming the experience for their customers.",
  };
  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <Layout>
        <section className="min-h-screen pt-36">
          <h1 className="pb-12 pl-8 text-5xl text-white uppercase pt-36 font-heading">
            Powers <br />
            Gyms
          </h1>
          <div className="relative">
            <Image className="bg-center bg-cover bg-gyms py-96" />
            <div className="absolute top-0 left-0 z-10 w-1 h-full mt-24 ml-24 bg-chalk-orange" />
          </div>
        </section>
        <FramesGrid data={data} />
      </Layout>
    </>
  );
};

export default Gamma;

const Image = styled.div`
  clip-path: polygon(0 50%, 100% 0%, 100% 100%, 0 100%);
`;

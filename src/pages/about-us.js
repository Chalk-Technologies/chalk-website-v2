import React from "react";
import styled from "styled-components";

import FadeInSection from "../components/FadeInSection";
import Layout from "../components/Layout";

import Miura from "../images/miura.jpg";
import Phanos from "../images/phanos.jpg";
import Alo from "../images/alo.jpg";
import Seo from "../components/SEO";

const Gamma = () => {
  const data = {
    rows: [
      {
        title: "Miura Hawkins, Co-founder and CEO",
        text: [
          "Rocking a harness and chalk bag since the age of 6, Miura has seen the indoor climbing gym industry undergo massive changes, growing from a culty fringe activity to an Olympic sport.",
          "She was a member of the USA Climbing National Team for almost a decade and coached youth teams across the United States and Europe.",
          "She completed an MSc in Neural Systems and Computation from the Swiss Federal Technical Institute in Zurich (ETHz) and went on to work as a software engineer and then as head of technology.",
          "She has worked in start-ups for the vast majority of her professional career and loves breaking the status quo.",
        ],
        alt: "Miura Hawkins' headshot",
        picture: Miura,
      },
      {
        title: "Phanos Hadjikyriakou, Co-founder and CPO",
        text: [
          "Having an obsession with using proper technique and video feedback to increase his performance in running, climbing, handstands and weightlifting, Phanos is eager to accelerate the learning process of every climber. ",
          "He has extensive experience in scaling startups, in cross-functional and product roles, and has worked for several years in a high-growth FinTech, seeing it through an acquisition.",
          "He holds an MSc in Engineering from the Swiss Federal Technical Institute in Zurich (ETHz) and an MBA from the Quantic School of Business and Technology.",
        ],
        alt: "Phanos Hadjikyriakou's headshot",
        picture: Phanos,
      },
      {
        title: "Aloys Berger, First Employee and Front-End Developer",
        text: [
          "When not flipping on his paraglider in the French Alps, Aloys builds the front-end of Chalk Technologies' first app: Beta. ",
          "He has a background in front-end development and a vast love for mountain and sea sports, and is excited to be the first employee of a great team forming the future of sports performance through technology.",
        ],
        alt: "Aloys Berger's headshot",
        picture: Alo,
      },
    ],
  };

  const seo = {
    title: "Obsessed with progress",
    description:
      "The BETA of a climb is the key to unlocking it. We're a passionate and committed team, unified by our mission to help climbers train smarter and send harder climbs.",
  };
  return (
    <>
      <Seo title={seo.title} description={seo.description} />
      <Layout>
        <section className="min-h-screen pt-36">
          <h1 className="pb-12 pl-8 text-5xl text-white uppercase pt-36 font-heading">
            Meet the team
          </h1>
          <div className="relative">
            <Image className="bg-center bg-cover bg-aboutus py-96" />
            <div className="absolute top-0 left-0 z-10 w-1 h-full mt-24 ml-24 bg-chalk-orange" />
          </div>
        </section>
        <section className="bg-chalk-gray">
          <div className="container mx-auto py-36">
            {data.rows.map(({ title, text, picture, alt }, idx) => (
              <Row
                isLast={idx === data.rows.length - 1}
                key={title}
                className="grid grid-cols-1 mb-16 lg:grid-cols-2"
              >
                <FadeInSection
                  fromRight={idx % 2 !== 0}
                  classToApply={`flex ${
                    idx % 2 === 0 ? "order-first" : "order-first lg:order-last"
                  }`}
                >
                  <Frame
                    className="object-cover m-auto "
                    src={picture}
                    alt={alt}
                  />
                </FadeInSection>
                <div className="flex flex-col items-center justify-center p-8 px-8 lg:py-0">
                  <h1 className="text-4xl uppercase text-chalk-orange font-heading">
                    {title}
                  </h1>
                  {text.map((paragraph) => (
                    <p key={paragraph} className="py-4 text-2xl font-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Row>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Gamma;

const Image = styled.div`
  clip-path: polygon(0 50%, 100% 0%, 100% 100%, 0 100%);
`;

const Row = styled.div``;

const Frame = styled.img`
  position: relative;
  height: 400px;
  width: 400px;

  @media screen and (max-width: 500px) {
    height: 300px;
    width: 300px;
  }
`;

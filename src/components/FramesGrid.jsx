import React from "react";
import styled from "styled-components";

import FadeInSection from "../components/FadeInSection";

const FramesGrid = ({ data }) => {
  return (
    <section className="bg-chalk-gray">
      <div className="container mx-auto py-36">
        {data.rows.map(({ title, text, picture, alt }, idx) => (
          <Row
            isLast={idx === data.rows.length - 1}
            key={title}
            className="grid grid-cols-1 lg:grid-cols-3"
          >
            <div className={idx % 2 === 0 ? "order-last" : "order-first"}></div>
            <FadeInSection
              fromRight={idx % 2 !== 0}
              classToApply={`${
                idx % 2 === 0 ? "order-first" : "order-first lg:order-last"
              }`}
            >
              <Frame className="mx-auto lg:my-36" src={picture} alt={alt} />
            </FadeInSection>
            <div className="p-8 px-8 lg:py-36">
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
  );
};

export default FramesGrid;

const Row = styled.div`
  @media screen and (min-width: 1024px) {
    margin-bottom: ${(props) => (props.isLast ? "0" : "-20vh")};
  }

  @media screen and (min-width: 1586px) {
    margin-bottom: ${(props) => (props.isLast ? "0" : "-30vh")};
  }
`;

const Frame = styled.img`
  position: relative;
  top: -3vh;
  height: 80vh;
`;

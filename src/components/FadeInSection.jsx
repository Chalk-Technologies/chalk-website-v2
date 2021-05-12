import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const FadeInSection = ({ children, classToApply, fromRight }) => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <FadeIn
      fromRight={fromRight}
      isVisible={isVisible}
      className={classToApply}
      ref={domRef}
    >
      {children}
    </FadeIn>
  );
};

export default FadeInSection;

const FadeIn = styled.article`
  opacity: 0;
  transform: ${(props) =>
    props.fromRight ? "translateX(20vh)" : "translateX(-20vh)"};
  visibility: hidden;
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;

  ${(props) =>
    props.isVisible
      ? `opacity: 1;
  transform: none;
  visibility: visible;`
      : ""}
`;

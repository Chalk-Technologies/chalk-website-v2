import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";

const ClimbersGymsPictures = ({ selectedMenu, setMenu }) => {
  return (
    <div className="w-screen overflow-y-hidden h-96">
      <Link to="/gamma">
        <CutoutLeft
          onMouseEnter={() => setMenu("climbers")}
          onMouseLeave={() => setMenu(null)}
          selected={selectedMenu === "climbers"}
          className="absolute"
        >
          <FirstPicture
            selected={selectedMenu === "climbers"}
            className="w-screen transition origin-bottom-left bg-center bg-cover h-96 bg-climbers"
          />
        </CutoutLeft>
      </Link>

      <Link to="/gamma">
        <CutoutRight selected={selectedMenu === "gyms"} className="absolute">
          <SecondPicture
            onMouseEnter={() => setMenu("gyms")}
            onMouseLeave={() => setMenu(null)}
            selected={selectedMenu === "gyms"}
            className="w-screen transition origin-bottom-right bg-right bg-cover h-96 bg-gyms"
          />
        </CutoutRight>
      </Link>
    </div>
  );
};

export default ClimbersGymsPictures;

const CutoutLeft = styled.div`
  clip-path: polygon(0% 0%, 100% 80%, 100% 100%, 0% 100%);
  z-index: ${({ selected }) => (selected ? "2" : "1")};
`;

const FirstPicture = styled.div`
  transform: ${({ selected }) => (selected ? "scale(1.05)" : "")};
`;

const CutoutRight = styled.div`
  clip-path: polygon(0% 80%, 100% 0%, 100% 100%, 0% 100%);
  z-index: ${({ selected }) => (selected ? "2" : "0")};
`;

const SecondPicture = styled.div`
  transform: ${({ selected }) => (selected ? "scale(1.05)" : "")};
`;

import React from "react";
import styled from "styled-components";

const ClimbersGymsPictures = ({ selectedMenu }) => {
  return (
    <div className="h-96 w-screen overflow-y-hidden">
      <FirstPicture
        selected={selectedMenu === "climbers"}
        className="h-96 w-screen absolute bg-climbers bg-cover bg-center transition origin-bottom-left"
      />
      <SecondPicture
        selected={selectedMenu === "gyms"}
        className="h-96 w-screen absolute bg-gyms bg-cover bg-right transition origin-bottom-right"
      />
    </div>
  );
};

export default ClimbersGymsPictures;

const FirstPicture = styled.div`
  clip-path: polygon(0% 0%, 100% 80%, 100% 100%, 0% 100%);

  transform: ${({ selected }) => (selected ? "scale(1.05)" : "")};
  z-index: ${({ selected }) => (selected ? "2" : "0")};
`;

const SecondPicture = styled.div`
  clip-path: polygon(0% 80%, 100% 0%, 100% 100%, 0% 100%);

  transform: ${({ selected }) => (selected ? "scale(1.05)" : "")};
  z-index: ${({ selected }) => (selected ? "2" : "0")};
`;

import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoTitle,
  InfoImage,
  InfoElements,
  InfoTitleh2,
  InfoDescription,
  InfoLink,
} from "./InfoElements";

import img from '../components/Images/im3.jpg'


const Info = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoTitle>Our Programs</InfoTitle>
          <InfoElements>
                      <InfoImage src={img}/>
            <InfoTitleh2></InfoTitleh2>
            <InfoDescription>The engineering department is growing everly large each day</InfoDescription>
            <InfoLink>View Course</InfoLink>
                  </InfoElements>
                  <InfoElements>
                      <InfoImage src={img}/>
            <InfoTitleh2></InfoTitleh2>
            <InfoDescription>The engineering department is growing everly large each day</InfoDescription>
            <InfoLink>View Course</InfoLink>
          </InfoElements>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;

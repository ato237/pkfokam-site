import React, { useState } from "react";
import {
  LogoContainer,
  Logoimg,
  Title,
  TitleS,
  MenuBar,
  MenuCross,
  MenuContainer,
  MenuWrapper,
  MenuElements,
  MenuLink,
  Arrow,
} from "./LogoElements";
import image from "../Images/logo.png";
const Logo = (isOpen) => {
  const [clicked, isClicked] = useState(true);
  const [hovered, onhovered] = useState(false);

  const handleClick = () => {
    isClicked(!clicked);
  };
  const handleHover = () => {
    isClicked(!hovered);
  };
  return (
    <>
      <LogoContainer>
        <Logoimg src={image} />
        <Title>PKFOKAM INSTITUTE OF EXCELLENCE</Title>
        <TitleS>PKFIE</TitleS>

        {clicked ? (
          <MenuBar onClick={handleClick} />
        ) : (
          <MenuCross onClick={handleClick} />
        )}
        <MenuContainer
          style={clicked ? { opacity: "0", top: "100%" } : { opacity: "100%" }}
        >
          <MenuWrapper>
            <MenuElements>
              <MenuLink>Home</MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>Partners</MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>
                Programs <Arrow />
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>Employees</MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>Students</MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>Downloads</MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>Research</MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>Facilities</MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>Contacts</MenuLink>
            </MenuElements>
          </MenuWrapper>
        </MenuContainer>
      </LogoContainer>
    </>
  );
};

export default Logo;

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
  ArrowL,
} from "./LogoElements";
import image from "../Images/logo.png";
const Logo = (isOpen) => {
  const [clicked, isClicked] = useState(true);
  const [programClicked, isProgramClicked] = useState(true);
  const [employee, isEmployeeClicked] = useState(false);

  const [students, isStudentsClicked] = useState(false);

  const [downloads, isDownloadClicked] = useState(false);

  const [research, isResearchClicked] = useState(false);

  const handleClick = () => {
    isClicked(!clicked);
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
              <MenuLink onClick={() => isProgramClicked(!programClicked)}>
                Programs{" "}
                {programClicked ? (
                  <Arrow
                    style={
                      programClicked
                        ? { }
                        : {left: "-20%"   }
                    }
                  />
                ) : (
                  <ArrowL
                    style={
                      programClicked
                        ? { display:"inline", left:"-20%"}
                        : { left: "0" }
                    }
                  />
                )}
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>
                Employees <Arrow />
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>
                Students <Arrow />
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>
                Downloads <Arrow />
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>
                Research <Arrow />
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>Facilities </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>Contacts </MenuLink>
            </MenuElements>
          </MenuWrapper>
        </MenuContainer>
      </LogoContainer>
    </>
  );
};

export default Logo;

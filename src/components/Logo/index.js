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
  OptionsContainer,
  OptionsElements,
  OptionsWrapper,
  OptionsLink,
  OptionsTitle,
} from "./LogoElements";
import image from "../Images/logo.png";

const Logo = () => {
  const [clicked, isClicked] = useState(false);
  const [program, programClicked] = useState(false);
  const [employee, employeeClicked] = useState(false);

  const [students, studentClicked] = useState(false);

  const [downloads, downloadClicked] = useState(false);
  const [research, researchClciked] = useState(false);

  const handleProgram = () => {
    programClicked(!program);
  };

  const handleEmployee = () => {
    employeeClicked(!employee);
    console.log(employee);
  };

  const handleStudents = () => {
    studentClicked(!students);
    console.log(students);
  };

  const handleDownloads = () => {
    downloadClicked(!downloads);
  };

  const handleResearch = () => {
    researchClciked(!research);
  };

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
              <MenuLink>
                Programs <Arrow onClick={handleProgram} />
              </MenuLink>
              <OptionsContainer
                style={program ? { display: "inline" } : { display: "none" }}
              >
                <ArrowL onClick={handleProgram} />
                <OptionsWrapper>
                  <OptionsElements>
                    <OptionsTitle>Graduate Programs</OptionsTitle>
                    <OptionsLink to="/MBA">MBA</OptionsLink>
                    <OptionsLink to="/MSSE">MSSE</OptionsLink>
                    <OptionsTitle>Undergraduate Programs</OptionsTitle>
                    <OptionsLink to="/computer-science">
                      Computer Science
                    </OptionsLink>
                    <OptionsLink to="/information-technology">
                      Information Technology
                    </OptionsLink>
                    <OptionsLink to="/electrical-engineering">
                      Electrical Engineering Technology
                    </OptionsLink>
                    <OptionsLink to="/telecommuincations">
                      Telecommunications Engineering Technology
                    </OptionsLink>
                    <OptionsLink to="/mechanical-engineering">
                      Mechanical Engineering Technology
                    </OptionsLink>
                    <OptionsLink to="/economics">
                      Economics and Management
                    </OptionsLink>
                    <OptionsLink to="/professional-training">
                      Professional Training
                    </OptionsLink>
                    <OptionsLink to="/business-excellence">
                      Business Excellence
                    </OptionsLink>
                    <OptionsLink to="/academy">Academy</OptionsLink>
                    <OptionsLink to="/cisco">CISCO</OptionsLink>
                  </OptionsElements>
                </OptionsWrapper>
              </OptionsContainer>
            </MenuElements>
            <MenuElements>
              <MenuLink>
                Employees
                <Arrow onClick={handleEmployee} />
                <OptionsContainer
                  style={!employee ? { display: "none" } : { display: "inline" }}
                >
                  <ArrowL onClick={handleEmployee} />
                  <OptionsWrapper>
                    <OptionsElements>
                      <OptionsTitle>Staff</OptionsTitle>
                      <OptionsLink to="/MBA">President & VIP</OptionsLink>
                      <OptionsLink to="/MSSE">Administration</OptionsLink>
                      <OptionsLink to="/computer-science">
                        Research Center
                      </OptionsLink>
                    </OptionsElements>
                  </OptionsWrapper>
                </OptionsContainer>
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>
                Students
                <Arrow onClick={handleStudents} />
                <OptionsContainer
                  style={!students ? { display: "none" } : { display: "inline" }}
                >
                  <ArrowL onClick={handleStudents} />
                  <OptionsWrapper>
                    <OptionsElements>
                      <OptionsTitle>
                        {" "}
                        Administration and Enrollment
                      </OptionsTitle>
                      <OptionsLink to="/rules-regulation">Rules and Regulation</OptionsLink>
                      <OptionsLink to="/clubs">Clubs</OptionsLink>
            
                    </OptionsElements>
                  </OptionsWrapper>
                </OptionsContainer>
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink>
                Downloads
                <Arrow onClick={handleDownloads} />
                <OptionsContainer
                  style={!downloads ? { display: "none" } : { display: "inline" }}
                >
                  <ArrowL onClick={handleDownloads} />
                  <OptionsWrapper>
                    <OptionsElements>
                      <OptionsTitle>
                        {" "}
                        Application Forms for Admission
                      </OptionsTitle>
                      <OptionsLink to="/admission-graduate">Graduate</OptionsLink>
                      <OptionsLink to="/admission-undergraduate">UnderGraduate</OptionsLink>
                      <OptionsTitle>
                        {" "}
                        Registration Forms
                      </OptionsTitle>
                      <OptionsLink to="/registration-graduate">Graduate</OptionsLink>
                      <OptionsLink to="/registration-undergraduate">UnderGraduate</OptionsLink>
                    </OptionsElements>
                  </OptionsWrapper>
                </OptionsContainer>
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink >
                Research
                <Arrow onClick={handleResearch} />
                <OptionsContainer
                  style={!research ? { display: "none" } : { display: "inline" }}
                >
                  <ArrowL onClick={handleResearch} />
                  <OptionsWrapper>
                    <OptionsElements>
                      <OptionsTitle>
                        {" "}
                        Annual Conference
                      </OptionsTitle>
                      <OptionsLink to="/admission-graduate">Conference</OptionsLink>     
                    </OptionsElements>
                  </OptionsWrapper>
                </OptionsContainer>
              </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink to="/facilities">Facilities </MenuLink>
            </MenuElements>
            <MenuElements>
              <MenuLink to="contacts">Contacts </MenuLink>
            </MenuElements>
          </MenuWrapper>
        </MenuContainer>
      </LogoContainer>
    </>
  );
};

export default Logo;

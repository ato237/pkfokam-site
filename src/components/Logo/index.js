import React from "react";
import {
  LogoContainer,
  Logoimg,
  Title,
  TitleS,
} from "./LogoElements";
import image from "../Images/logo.png";
import Sidebar from "../Sidebar/Sidebar";

const Logo = () =>{
  return (
    <>
      <LogoContainer>

        <Logoimg src={image}/>
        <Title>PKFOKAM INSTITUTE OF EXCELLENCE</Title>
        <TitleS>PKFIE</TitleS>
        <Sidebar/>
      </LogoContainer>
    </>
  );
};

export default Logo;

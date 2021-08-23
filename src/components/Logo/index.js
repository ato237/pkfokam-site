import React from "react";
import { LogoContainer, Logoimg, Title,TitleS, MenuBar } from "./LogoElements";
import image from "../Images/logo.png";
const Logo = () => {
	return (
		<>
			<LogoContainer>
				<Logoimg src={image} />
				<Title>PKFOKAM INSTITUTE OF EXCELLENCE</Title>
                <TitleS>PKFIE</TitleS>
                <MenuBar />
                </LogoContainer>
			
		</>
	);
};

export default Logo;

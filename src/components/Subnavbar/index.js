import React from "react";
import {
	NavbarContainer,
	NavbarWrapper,
	NavbarElements,
	NavLinks,
	NavLeft,
	NavRight,
	Href,
} from "./SubnavbarElements";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
const Subnavbar = () => {
	return (
		<div>
			<NavbarContainer>
				<NavbarWrapper>
					<NavLeft>
						<NavbarElements>
							<Href to="/">
								<ImFacebook2 />
							</Href>
						</NavbarElements>
						<NavbarElements>
							<Href to="/">
								<AiFillInstagram
									style={{ fontSize: "22px", position: "relative", top:"4px" }}
								/>
							</Href>
						</NavbarElements>
					</NavLeft>
					<NavRight>
						<NavbarElements>
							<NavLinks to="/">Login</NavLinks>
						</NavbarElements>
					</NavRight>
				</NavbarWrapper>
			</NavbarContainer>
		</div>
	);
};

export default Subnavbar;

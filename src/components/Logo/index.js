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
	const [clicked, isClicked] = useState(true);
	
	const [check,isChecked] = useState(false);
	const handleClick = () => {
		isClicked(!clicked);
	};

	const handleCheckedClicked = ()=>{
		isChecked(!check)
	}

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
					style={clicked ? { opacity: "0", top: "100%" } : { opacity: "100%" }}>
					<MenuWrapper>
						<MenuElements>
							<MenuLink style={
								check?{display: "none"}:{display:"inline"}
								}>Home</MenuLink>
						</MenuElements>
						<MenuElements>
							<MenuLink style={
								check?{display: "none"}:{display:"inline"}
								}>Partners</MenuLink>
						</MenuElements>
						<MenuElements>
							<MenuLink
								style={
								check?{display: "none"}:{display:"inline"}
								}>
								Programs <Arrow onClick = {handleCheckedClicked}/>
							</MenuLink>
							<OptionsContainer style={!check? {display:"none"}:{display:"inline"}}>
								<ArrowL onClick ={handleCheckedClicked}/>
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
							<MenuLink style={
								check?{display: "none"}:{display:"inline"}
								}>
								Employees
								<Arrow onClick = {handleCheckedClicked}/>
							</MenuLink>
						</MenuElements>
						<MenuElements>
							<MenuLink style={
								check?{display: "none"}:{display:"inline"}
								}>
								Students
								<Arrow onClick = {handleCheckedClicked}/>
							</MenuLink>
						</MenuElements>
						<MenuElements>
							<MenuLink style={
								check?{display: "none"}:{display:"inline"}
								}>
								Downloads
								<Arrow onClick = {handleCheckedClicked}/>{" "}
							</MenuLink>
						</MenuElements>
						<MenuElements>
							<MenuLink style={
								check?{display: "none"}:{display:"inline"}
								}>
								Research
								<Arrow onClick = {handleCheckedClicked}/>
							</MenuLink>
						</MenuElements>
						<MenuElements>
							<MenuLink style={
								check?{display: "none"}:{display:"inline"}
								}>Facilities </MenuLink>
						</MenuElements>
						<MenuElements>
							<MenuLink style={
								check?{display: "none"}:{display:"inline"}
								}>Contacts </MenuLink>
						</MenuElements>
					</MenuWrapper>
				</MenuContainer>
			</LogoContainer>
		</>
	);
};

export default Logo;

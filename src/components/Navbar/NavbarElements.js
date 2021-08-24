import styled from "styled-components";
import { Link as Links } from "react-router-dom";

export const NavbarContainer = styled.div`
	@media screen and (max-width: 696px) {
		display: none;
	}
`;

export const NavbarWrapper = styled.ul`
	padding: 10px;
	display: flex;
	justify-content: center;
	margin: auto;
	background-color: #2e3192;
	list-style-type: none;
	@media screen and (max-width: 850px) {
		font-size: 13px;
		transition: 0.2s ease-in-out;
	}
	@media screen and (max-width: 755px) {
		font-size: 12px;
		transition: 0.2s ease-in-out;
	}
`;
export const NavbarElements = styled.li`
	display: inline;
`;
export const NavTitle = styled.h1`
	font-size: 14px;
	color: #f0c13e;
	padding: 0 16px;
	text-decoration: none;
	text-decoration: none;
	display: block;
	font-family: "Roboto", sans-serif;
`;
export const DropdownContent = styled.div`
	position: absolute;
	top: 170px;
	min-height: 106px;
	background-color: #2e3192;
	z-index: 1;
	@media screen and (max-width: 850px) {
		top: 165px;
		transition: 0.2s ease-in-out;
	}

	@media screen and (max-width: 817px){
		top: 142px;
		transition: 0.2s ease-in-out;
	}
	@media screen and (max-width: 768px) {
		top: 118px;
		transtion: 0.2s ease-in-out;
	}
	@media screen and (max-width: 765px) {
		top: 115px;
		transtion: 0.2s ease-in-out;
	}


	
`;
export const NavLinksDrop = styled(Links)`
	color: white;
	font-size: 12px;
	padding: 5px 16px;
	text-decoration: none;
	text-decoration: none;
	display: block;
	font-family: "Roboto", sans-serif;

	&:hover {
		background-color: white;
		color: #2e3192;
	}
`;
export const NavLinks = styled(Links)`
	margin-left: 30px;
	font-weight: 200;
	text-decoration: none;
	color: white;

	&:hover {
		transition: 0.1s ease-in-out;
		padding-top: 9px;
		padding-bottom: 9px;
		padding-right: 5px;
		padding-left: 5px;
		margin-right: -10px;
		background-color: white;
		color: #2e3192;
	}
`;

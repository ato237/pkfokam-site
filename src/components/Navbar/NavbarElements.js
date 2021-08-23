import styled from "styled-components";
import { Link as Links } from "react-router-dom";

export const NavbarContainer = styled.div`
	@media screen and (max-width:696px){
		display: none;
	}
`;

export const NavbarWrapper = styled.ul`
	padding: 10px;
	display: flex;
	justify-content: space-evenly;
	margin: auto;
	background-color: #2e3192;
	list-style-type: none;
	@media screen and (max-width: 817px){
		font-size: 13px;
		transition: 0.2s ease-in-out;
	}
	@media screen and (max-width: 720px){
		font-size: 12px;
		transition: 0.2s ease-in-out;
	}
	
`;
export const NavbarElements = styled.li`

	display: inline;
	
`;
export const NavLinks = styled(Links)`
	margin-left: 30px;
	font-weight: 200;
	text-decoration: none;
	color: white;


	&:hover {
		transition: 0.1s ease-in-out;
		border-radius: 5px;
		padding-top: 8px;
		padding-bottom: 8px;
		background-color: #da2b21;
		color: white;
	}

`;

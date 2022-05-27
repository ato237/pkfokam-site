import styled from "styled-components";
import { Link as Links } from "react-router-dom";

export const NavbarContainer = styled.div`
`;

export const NavbarWrapper = styled.ul`

	padding: 2px;
	display: flex;
	justify-content: space-around;
	list-style-type: none;
	margin: 0;
	overflow: hidden;
	background-color: #212121;
`;
export const NavbarElements = styled.li`
	display: inline;
	@media screen and (max-width: 768px) {
		transition: 0.2s ease-in-out;
		display: none;
	}
`;
export const Href = styled.a`
	padding: 5px;
	color: #dedede;
	cursor: pointer;
	&:hover {
		color: white;
	}
`;
export const NavLinks = styled(Links)`
	text-decoration: none;
	color: #dedede;

	&:hover {
		color: white;
	}
`;
export const NavLeft = styled.div`
	position: relative;
	right: 200px;
	float: left;

	@media screen and (max-width: 950px) {
		position: relative;
		right: 100px;
		float: left;
		transition: 0.2s ease-in-out;
	}
`;
export const NavRight = styled.div`
	position: relative;
	left: 200px;
	@media screen and (max-width: 950px) {
		transition: 0.2s ease-in-out;

		position: relative;
		left: 100px;
		float: left;
	}
`;

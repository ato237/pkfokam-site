import styled from "styled-components";
import { GiHamburgerMenu as bar } from "react-icons/gi";
import { ImCross as cross } from "react-icons/im";
import { Link as Links } from "react-router-dom";
import { BiRightArrow as arrow } from "react-icons/bi";
import { BiLeftArrow as arrowL } from "react-icons/bi";

export const LogoContainer = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 696px) {
		padding: 8px;
		box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	}
	@media screen and (max-width: 368px) {
		display: flex;
		justify-content: space-between;
		padding: 8px;
		box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	}
`;

export const Logoimg = styled.img`
	position: relative;
	top: 10px;
	width: 80px;
	height: 80px;
	@media screen and (max-width: 817px) {
		width: 50px;
		height: 50px;
	}
	@media screen and (max-width: 696px) {
		width: 30px;
		height: 30px;
	}
`;
export const TitleS = styled.h1`
	text-decoration: none;
	display: none;
	padding-left: 10px;
	font-size: 18px;
	color: #2e3192;
	@media screen and (max-width: 340px) {
		display: inline;
	}
`;
export const Title = styled.h1`
	text-decoration: none;
	font-family: "Patua One", cursive;
	padding-left: 20px;
	color: #2e3192;
	@media screen and (max-width: 817px) {
		font-size: 23px;
		transition: 0.2s ease-in-out;
	}
	@media screen and (max-width: 696px) {
		font-size: 18px;
		padding-right: 200px;
	}
	@media screen and (max-width: 633px) {
		padding-left: 10px;
		min-width: 250px;
		font-size: 15px;
		padding-right: 0;
	}
	@media screen and (max-width: 340px) {
		display: none;
	}
`;

export const MenuBar = styled(bar)`
	display: none;
	@media screen and (max-width: 696px) {
		position: relative;
		top: 2px;
		font-size: 30px;
		cursor: pointer;
		display: inline;
	}
	@media screen and (max-width: 633px) {
		font-size: 30px;
		margin-left: auto;
	}
	@media screen and (max-width: 350px) {
		font-size: 35px;
	}
`;
export const MenuCross = styled(cross)`
	display: none;
	@media screen and (max-width: 696px) {
		position: relative;
		top: 2px;
		font-size: 30px;
		cursor: pointer;
		display: inline;
	}
	@media screen and (max-width: 633px) {
		font-size: 30px;
		margin-left: auto;
	}
	@media screen and (max-width: 350px) {
		font-size: 30px;
	}
`;

export const MenuContainer = styled.div`

	position: absolute;
	z-index: 999;
	width: 100%;
	height: 60%;
	background: #2e3192;
	display: grid;
	align-items: center;
	top: 58px;
	left: 0;
	transition: 0.3s ease-in-out;

	@media screen and (min-width: 697px) {
		display: none;
	}
	@media screen and (min-width: 633px) {
		top: 59px;
	}
`;
export const MenuWrapper = styled.ul`
	list-style-type: none;
	position: absolute;
	top: -15px;
	left: -10px;
`;
export const MenuElements = styled.li`

	margin-top: 10px;
`;
export const Arrow = styled(arrow)`
	padding-left:5px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	position: relative;
	top: 3px;
	&:hover {
		background-color: #2e3192;
		color: white;
	}
`;
export const ArrowL = styled(arrowL)`
	color: white;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	position: relative;
	font-size: 25px;
	top: 2px;
	&:hover {
		background-color: white;
		color: #2e3192;
	}
`;

export const MenuLink = styled(Links)`
	@keyframes example {
		0% {
			opacity: 0%;
		}

		100% {
			opacity: 100%;
		}
	}
	animation-name: example;
	animation-duration: 0.5s;
	font-family: "Roboto", sans-serif;
	cursor: help;
	color: white;
	font-size: 18px;
	padding: 5px;
	text-decoration: none;
	display: block;
	&:hover {
		background-color: white;
		color: #2e3192;
	}
`;

export const OptionsContainer = styled.div`
	@keyframes example {
		0% {
			opacity: 0%;
		}

		100% {
			opacity: 100%;
		}
	}
	animation-name: example;
	animation-duration: 0.5s;
	transition: 0.2s ease-in-out;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 10px;
	min-height: 400px;
	width:auto;
	background-color: #2e3192;
	z-index: 1;
`;

export const OptionsWrapper = styled.ul`
	list-style-type: none;
`;

export const OptionsElements = styled.li``;

export const OptionsTitle = styled.h1`
	font-size: 14px;
	color: #f0c13e;
	padding: 0 16px;
	text-decoration: none;
	display: block;
	font-family: "Roboto", sans-serif;
`;
export const OptionsLink = styled(Links)`
	width: 250px;
	color: white;
	font-size: 12px;
	padding: 5px 16px;
	text-decoration: none;
	display: block;
	font-family: "Roboto", sans-serif;

	&:hover {
		background-color: white;
		color: #2e3192;
	}
`;

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
	height: 80%;
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
`;
export const MenuElements = styled.li`
	
`;
export const Arrow = styled(arrow)`
	cursor: pointer;
	transition: 0.3s ease-in-out;
	position: relative;
	top: 2px;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
`;
export const ArrowL = styled(arrowL)`
	cursor: pointer;
	transition: 0.3s ease-in-out;
	position: relative;
	top: 2px;
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
`;

export const MenuLink = styled(Links)`
	font-family: "Roboto", sans-serif;
	cursor: help;
	color: white;
	font-size: 18px;
	padding: 15px;
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
			background-color: red;
			left: 0px;
			top: 0px;
		}

		75% {
			background-color: green;
			left: 0px;
			top: 200px;
		}
		100% {
			background-color: red;
			left: 0px;
			top: 0px;
		}
	}
	transition: 0.2s ease-in-out;
	animation-name: example;
	animation-duration: 4s;
	position: absolute;
	bottom: -50px;
	min-height: 1006px;
	background-color: #2e3192;
	z-index: 1;
	@media screen and (max-width: 850px) {
		top: 165px;
		transition: 0.2s ease-in-out;
	}

	@media screen and (max-width: 817px) {
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

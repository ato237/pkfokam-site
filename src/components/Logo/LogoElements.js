import styled from "styled-components";
import { GiHamburgerMenu as bar } from "react-icons/gi";

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
	@media screen and (max-width: 817px){
		width: 50px;
	height: 50px;
	}
	@media screen and (max-width: 696px) {
		width: 30px;
		height: 30px;
	}
`;
export const TitleS = styled.h1`
	
	display: none;
	padding-left: 10px;
	font-size: 18px;
	color: #2e3192;
	@media screen and (max-width: 340px) {
		display: inline;
	}
`;
export const Title = styled.h1`
font-family: 'Patua One', cursive;
	padding-left: 20px;
	color: #2e3192;
	@media screen and (max-width: 817px){
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
		top: 8px;
		font-size: 30px;
		cursor: pointer;
		display: inline;
	}
	@media screen and (max-width: 633px) {
		font-size: 20px;
		margin-left: auto;
	}
	@media screen and (max-width: 350px) {
		font-size: 25px;
	}
`;

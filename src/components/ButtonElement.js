import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? "#52B788" : "#010606")};
	white-space: nowrap;
	padding: ${({ big }) => (big ? "14px 48px " : "12px 38px")};
	color: ${({ dark }) => (dark ? "#fff" : "#252E7E")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#ABAECD" : "#000")};
		color: #000;
	}
`;

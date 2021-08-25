import styled from "styled-components";
import { GiHamburgerMenu as bar } from "react-icons/gi";
import { ImCross as cross } from "react-icons/im";
import { Link as Links } from "react-router-dom";
import { BiRightArrow as arrow } from "react-icons/bi";
import {BiLeftArrow as arrowL} from "react-icons/bi"

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
  display: none;
  padding-left: 10px;
  font-size: 18px;
  color: #2e3192;
  @media screen and (max-width: 340px) {
    display: inline;
  }
`;
export const Title = styled.h1`
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
  height: 50%;
  background: #2e3192;
  display: grid;
  align-items: center;
  top: 59px;
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
export const MenuElements = styled.li``;
export const Arrow = styled(arrow)`
transition: 0.3s ease-in-out;
  position: relative;
  top: 2px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
`;
export const ArrowL = styled(arrowL)`
transition: 0.3s ease-in-out;
  position: relative;
  top: 2px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
`;

export const MenuLink = styled(Links)`
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

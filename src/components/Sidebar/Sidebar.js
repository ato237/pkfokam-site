import React,{useState} from "react";
import styled from "styled-components";
import { Link as Links } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`

  display: none;
  @media screen and (max-width: 696px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media screen and (max-width: 633px) {
    padding-left: 180px;
  }
  @media screen and (max-width: 571px) {
    padding-left: 130px;
  }
  @media screen and (max-width: 520px) {
    padding-left: 80px;
  }
  @media screen and (max-width: 471px) {
    padding-left: 30px;
  }
  @media screen and (max-width: 423px) {
    padding-left: 0;
  }

`;

const NavIcon = styled(Links)`
    color: #000;
    margin-left: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SidebarNav = styled.div`
overflow-y: scroll;
    background: #2e3192;
    width: 250px;
    height:100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index:10;

    @media screen and (min-width: 696px){
        display: none;
    }

`

const SidebarWrap = styled.div`
    width: 100%;
  
`

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => {
        setSidebar(!sidebar)
    }

  return (
    <>
          <Nav>
              <NavIcon to='#'>
                  <FaIcons.FaBars onClick={showSidebar }/>
              </NavIcon>
          </Nav>
          <SidebarNav sidebar={sidebar}>
              <SidebarWrap>
              <NavIcon to='#' style={{color:'white', padding:"20px 0"}}>
                      <AiIcons.AiOutlineClose onClick={showSidebar}/>
                  </NavIcon>
                  {SidebarData.map((item, index) => {
                      return <SubMenu item={item} key={index}/>
                  })}
              </SidebarWrap>
          </SidebarNav>
    </>
  );
};

export default Sidebar;

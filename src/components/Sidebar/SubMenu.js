import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #212121;
    border-left: 4px solid #FFA500;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #3B3D99;
    height: 40px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
     color: #fff;
    font-size: 15px;

    &:hover{
        background: #FFA500;
        cursor: pointer;
    }
`

const SubMenu = ({ item }) => {
  const [subNav, setSubnav] = useState(false);

    const showSubNav = () => {
      setSubnav(!subNav)
  };

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
          </SidebarLink>
          {subNav && item.subNav.map((item, index) => {
              return (
                  <DropdownLink to={item.path} key={index}>
                      {item.icon}
                      <SidebarLabel>{item.title}</SidebarLabel>
                  </DropdownLink>
              )
          })}
    </>
  );
};

export default SubMenu;

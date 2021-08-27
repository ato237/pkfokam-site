import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #2E3192;
`;
export const FooterWrap = styled.div`
  padding: 45px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0;



`;

export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
    display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
  
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 120px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 820px) {
    width: 250px;
  }
  @media screen and (max-width: 610px) {
    width: 200px;
  }
  @media screen and (max-width: 510px) {
    width: 120px;
  }
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 2px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  color:#F0C13E;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 13px;

 
  &:hover {
    color: #F0C13E;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #F0C13E;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLinks  = styled.a`
    color: #fff;
    font-size: 24px;
`
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  FooterLinkItems,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialLogo,
  SocialIcons,
  SocialIconLinks,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> INSTITUTES </FooterLinkTitle>
              <FooterLink to="/signin">History</FooterLink>
              <FooterLink to="/signin">Vision</FooterLink>
              <FooterLink to="/signin">Misssio</FooterLink>
              <FooterLink to="/signin">Location Map</FooterLink>
              <FooterLink to="/signin">KSU</FooterLink>
              <FooterLink to="/signin">NCUT</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> EMPLOYEES/STUDENTS </FooterLinkTitle>
              <FooterLink to="/signin">President</FooterLink>
              <FooterLink to="/signin">Administration</FooterLink>
              <FooterLink to="/signin">Faculty</FooterLink>
              <FooterLink to="/signin">Student's Clubs</FooterLink>
              <FooterLink to="/signin">Forum</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> PROGRAMS </FooterLinkTitle>
              <FooterLink to="/signin">MBA</FooterLink>
              <FooterLink to="/signin">MSSE</FooterLink>
              <FooterLink to="/signin">BS Computer Science</FooterLink>
              <FooterLink to="/signin">BS Information Technology</FooterLink>
              <FooterLink to="/signin">BS Electrical Engineering Technology</FooterLink>
              <FooterLink to="/signin">BS Mechanical Engineering Technology</FooterLink>
              <FooterLink to="/signin">BS Economics and Management</FooterLink>
              <FooterLink to="/signin">Business Excellence Academy</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> DEVELOPERS </FooterLinkTitle>
              <FooterLink to="/signin">Research Center</FooterLink>
              <FooterLink to="/signin">Website Authors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> OTHERS </FooterLinkTitle>
              <FooterLink to="/signin">Admission/Enrollment</FooterLink>
              <FooterLink to="/signin">Annual Conference</FooterLink>
              <FooterLink to="/signin">Facilities</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">PKFIE</SocialLogo>
            <WebsiteRights>
              PKFOKAM INSTITUTE OF EXCELLENCE ©  {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLinks href="/" target="_blank" arial-label="Facebool">
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" arial-label="Twitter">
                <FaTwitter />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

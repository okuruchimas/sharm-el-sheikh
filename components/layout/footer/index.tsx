import React from "react";
import styled from "@emotion/styled";

import { Hr } from "../hr";
import SocialIcons, { SocialIcon } from "../social-icons";

export interface FooterProps {
  socialIcons: SocialIcon[];
}

const Footer = ({ socialIcons }: FooterProps) => {
  return (
    <Wrap>
      <Hr isFooter />
      <Wrapper>
        {socialIcons.map(({ iconSrc, socialLink }, index) => (
          <SocialIcons iconSrc={iconSrc} socialLink={socialLink} key={index} />
        ))}
      </Wrapper>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  padding: 0 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    padding: 0 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 24px;
`;

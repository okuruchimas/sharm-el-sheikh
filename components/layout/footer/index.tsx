import React from "react";
import styled from "@emotion/styled";

import { Hr } from "../hr";
import FooterIcons, { SocialIcon } from "../social-icons";

interface FooterProps {
  socialIcons: SocialIcon[];
}

const Footer = ({ socialIcons }: FooterProps) => {
  return (
    <Wrap>
      <Hr isFooter />
      <Wrapper>
        {socialIcons.map(({ iconSrc, socialLink }, index) => (
          <FooterIcons iconSrc={iconSrc} socialLink={socialLink} key={index} />
        ))}
      </Wrapper>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 24px;
`;

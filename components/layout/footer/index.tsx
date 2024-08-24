// components
import { Hr } from "../hr";
import SocialIcon, { type SocialIconI } from "../social-icon";
// utils
import styled from "@emotion/styled";

export interface FooterProps {
  socialIcons: SocialIconI[];
}

const Footer = ({ socialIcons }: FooterProps) => (
  <Wrap>
    <Hr isFooter />
    <Wrapper>
      {socialIcons.map((el) => (
        <SocialIcon {...el} key={el.id} />
      ))}
    </Wrapper>
  </Wrap>
);

const Wrap = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0 100px",
  gap: "24px",

  [theme.breakpoints.mobile]: {
    padding: "0 16px",
  },
}));

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "24px",
});

export default Footer;

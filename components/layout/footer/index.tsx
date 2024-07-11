//components
import { Hr } from "../hr";
import SocialIcons, { SocialIcon } from "../social-icons";
//utils
import styled from "@emotion/styled";

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

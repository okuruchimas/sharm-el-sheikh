// components
import { SubTitle } from "../../../../layout/subtitle";
import SocialIcons from "../../../../layout/social-icons";
// utils
import styled from "@emotion/styled";
// types
import type { AnnouncementCardI } from "./types";

const Card = ({ image, title, text, icons, isFirst }: AnnouncementCardI) => {
  return (
    <Wrap isFirst={isFirst}>
      <AnnounceImage src={image} alt={title} isFirst={isFirst} />
      <BottomSection>
        <SubTitle>{title}</SubTitle>
        <Description>{text}</Description>
        <IconsWrapper>
          {icons.map(({ iconSrc, socialLink }, index) => (
            <SocialIcons
              iconSrc={iconSrc}
              socialLink={socialLink}
              key={index}
            />
          ))}
        </IconsWrapper>
      </BottomSection>
    </Wrap>
  );
};

const Wrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "isFirst",
})<{ isFirst: boolean }>(({ isFirst }) => ({
  display: "flex",
  flexDirection: "column",
  gridRow: isFirst ? "span 2" : "unset",
  height: "100%",
}));

const AnnounceImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "isFirst",
})<{ isFirst: boolean }>(({ theme, isFirst }) => ({
  width: "100%",
  height: isFirst ? "470px" : "200px",
  borderRadius: "16px 16px 0 0",
  objectFit: "cover",

  [theme.breakpoints.mobile]: {
    height: "300px",
    minHeight: "300px",
  },
}));

const Description = styled("span")(({ theme }) => ({
  fontWeight: "400",
  fontSize: theme.fontSize.fontS18,
  color: theme.colors.black2,
}));

const IconsWrapper = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  gap: "24px",
});

const BottomSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "inherit",
  gap: "16px",
  padding: "16px",
  borderRadius: "0 0 16px 16px",
  border: `1px solid ${theme.colors.blue5}`,
  borderTopStyle: "none",
  backgroundColor: theme.colors.blue4,

  [theme.breakpoints.mobile]: {
    height: "auto",
  },
}));

export default Card;

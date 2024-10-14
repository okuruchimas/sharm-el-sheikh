// components
import SubTitle from "../../../../layout/subtitle";
import SocialIcon from "../../../../layout/social-icon";
import ReactMarkdown from "react-markdown";
// utils
import styled from "@emotion/styled";
// types
import { AnnouncementFragment } from "../../../../../gql/graphql";
export interface AnnouncementsProps {
  image: string;
  title: string;
  text: string;
  icons: AnnouncementFragment["socialLinks"];
  isFirst: boolean;
}

const Card = ({ image, title, text, icons, isFirst }: AnnouncementsProps) => (
  <Wrap isFirst={isFirst}>
    <AnnounceImage src={image} alt={title} isFirst={isFirst} />
    <BottomSection>
      <div>
        <SubTitle>{title}</SubTitle>
        <Description>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Description>
      </div>
      <IconsWrapper>
        {icons?.map((el, index) => (
          <SocialIcon
            key={index}
            iconSrc={el?.icon.data?.attributes?.url || ""}
            iconAlt={el?.icon.data?.attributes?.alternativeText || ""}
            socialLink={el?.socialLink || ""}
          />
        ))}
      </IconsWrapper>
    </BottomSection>
  </Wrap>
);

const Wrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "isFirst",
})<{ isFirst: boolean }>(({ theme, isFirst }) => ({
  display: "flex",
  flexDirection: "column",
  gridRow: isFirst ? "span 2" : "unset",
  height: "100%",
  backgroundColor: theme.colors.white,
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
    gap: "8px",
  },
}));

export default Card;

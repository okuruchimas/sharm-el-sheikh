// components
import Button from "../../../layout/button";
import LinkButton from "../../../layout/link-button";
import Card from "./children/card";
// utils
import styled from "@emotion/styled";
// types
import type { AnnouncementCardProps } from "./children/types";
import SectionWrapper from "../../../layout/section-wrapper";

const Announcements = ({ announcementsCards }: AnnouncementCardProps) => {
  return (
    <SectionWrapper
      title="Recent Announcements"
      titleChildren={
        <MobLink>
          <LinkButton text="View more" link="/" />
        </MobLink>
      }
    >
      <CardWrap>
        {announcementsCards.map(({ image, title, text, icons }, index) => (
          <Card
            isFirst={index === 0}
            key={index}
            image={image}
            title={title}
            text={text}
            icons={icons}
          />
        ))}
      </CardWrap>
      <ButtonWrap>
        <Button text="View more" color="white" />
      </ButtonWrap>
    </SectionWrapper>
  );
};

const CardWrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  margin: "24px 0",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
  },
}));

const ButtonWrap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.mobile]: {
    display: "none",
  },
}));

const MobLink = styled("div")(({ theme }) => ({
  "a, span": {
    display: "none",
  },

  [theme.breakpoints.mobile]: {
    "a, span": {
      display: "initial",
    },
  },
}));

export default Announcements;

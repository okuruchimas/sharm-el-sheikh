import styled from "@emotion/styled";
import Title from "../../layout/title";
import Button from "../../layout/button";
import LinkButton from "../../layout/link-button";
import Card from "./children/card";
import { AnnouncementCardProps } from "./children/types";

const Announcements = ({ announcementsCards }: AnnouncementCardProps) => {
  return (
    <WrapSection>
      <TopWrap>
        <Title>Recent Announcements</Title>
        <MobLink>
          <LinkButton text="View more" link="/" />
        </MobLink>
      </TopWrap>
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
    </WrapSection>
  );
};

const WrapSection = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const CardWrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  margin: "24px 0",
  gap: "16px",

  [`@media (${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: "1fr",
  },
}));

const ButtonWrap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [`@media (${theme.breakpoints.mobile})`]: {
    display: "none",
  },
}));

const MobLink = styled("div")(({ theme }) => ({
  "a,span": {
    display: "none",
  },

  [`@media (${theme.breakpoints.mobile})`]: {
    "a,span": {
      display: "initial",
    },
  },
}));

const TopWrap = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default Announcements;

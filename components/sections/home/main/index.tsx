// components
import EventCard from "./children/event-card";
import LinkButton from "../../../layout/link-button";
// utils
import styled from "@emotion/styled";
// types
import type { EventCardProps } from "./children/types";

const Main = ({ eventCards }: EventCardProps) => {
  return (
    <WrapSection>
      <TopWrap>
        <SubtitleWrap>
          <Subtitle>City Events</Subtitle>
          <LinkButton text={"More"} link="/" />
        </SubtitleWrap>
        {eventCards.map(({ logo, date, title, price, location }, index) => (
          <EventCard
            key={index}
            logo={logo}
            date={date}
            title={title}
            price={price}
            location={location}
          />
        ))}
      </TopWrap>
      <Title>Explore the sights of the Sharm El Sheikh</Title>
    </WrapSection>
  );
};

const WrapSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  gap: "32px",
  width: "100%",
  padding: "78px 100px 24px",
  backgroundImage: theme.backgrounds.mainSection,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  borderRadius: "0 0 30px 30px",

  [theme.breakpoints.mobile]: {
    height: "100dvh",
    gap: "16px",
    padding: "78px 16px 24px",
    flexDirection: "column-reverse",
    alignItems: "flex-start",
    backgroundAttachment: "scroll",
  },

  [theme.breakpoints.mobileHorizontal]: {
    height: "100%",
  },

  [theme.breakpoints.desktop]: { height: "100vh" },
}));

const TopWrap = styled("div")(({ theme }) => ({
  width: "520px",
  padding: "24px",
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  backgroundColor: theme.colors.grey5,
  backdropFilter: "blur(8px)",

  [theme.breakpoints.mobile]: {
    width: "100%",
    padding: "16px",
    gap: "10px",
  },
}));

const Title = styled("h1")(({ theme }) => ({
  fontWeight: "700",
  color: theme.colors.white,
  fontSize: theme.fontSize.fontS68,
  margin: "0",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS28,
  },
}));

const SubtitleWrap = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const Subtitle = styled("span")(({ theme }) => ({
  fontWeight: "700",
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS32,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS18,
  },
}));

export default Main;

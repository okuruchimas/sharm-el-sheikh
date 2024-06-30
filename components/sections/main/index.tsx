import styled from "@emotion/styled";
import EventCard from "./children/event-card";
import Link from "next/link";
import { EventCardProps } from "./children/types";
import LinkButton from "../../layout/link-button";

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

export default Main;

const WrapSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: 78px 100px 24px;
  background-image: url("images/background/bg-main-section.svg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 32px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    gap: 16px;
    padding: 78px 16px 24px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const TopWrap = styled.div`
  width: 520px;
  padding: 24px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme: { colors } }) => colors.grey5};

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    width: 100%;
    padding: 16px;
    gap: 10px;
  }
`;

const Title = styled.h1`
  font-family: Comfortaa, serif;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS68};
  font-weight: 700;
  margin: 0;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS28};
  }
`;

const SubtitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Subtitle = styled.span`
  font-family: Comfortaa, serif;
  color: ${({ theme: { colors } }) => colors.blue};
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS32};
  font-weight: 700;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS18};
  }
`;
const More = styled.img`
  cursor: pointer;
`;

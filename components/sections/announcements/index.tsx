import React from "react";
import styled from "@emotion/styled";
import { Title } from "../../layout/title";
import Card from "./children/card";
import { AnnouncementCardProps } from "./children/types";
import Button from "../../layout/button";

const Announcements = ({ announcementsCards }: AnnouncementCardProps) => {
  return (
    <WrapSection>
      <Title>Recent Announcements</Title>
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

export default Announcements;

const WrapSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardWrap = styled.div`
  width: 100%;
  margin: 24px 0;
  gap: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: none;
  }
`;

import React from "react";
import styled from "@emotion/styled";
import { Title } from "../../layout/title";
import AnnounceCard from "./children/announce-card";
import { AnnouncementCardProps } from "./children/types";
import Button from "../../layout/button";

const Announcements = ({ announcementsCards }: AnnouncementCardProps) => {
  const { image, title, text, icons } = announcementsCards[0];
  return (
    <WrapSection>
      <Title>Recent Announcements</Title>
      <CardWrapper>
        <AnnounceCard image={image} title={title} text={text} icons={icons} />
        <CardWrap>
          {announcementsCards
            .slice(1)
            .map(({ image, title, text, icons }, index) => (
              <AnnounceCard
                key={index}
                image={image}
                title={title}
                text={text}
                icons={icons}
              />
            ))}
        </CardWrap>
      </CardWrapper>
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
  background-color: deeppink;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    display: none;
  }
`;

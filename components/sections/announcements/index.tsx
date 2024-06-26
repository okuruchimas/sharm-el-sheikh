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
        <FirstCardWrapper>
          <AnnounceCard image={image} title={title} text={text} icons={icons} />
        </FirstCardWrapper>
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
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px 0;
  gap: 16px;
`;

const FirstCardWrapper = styled.div`
  width: 50%;
`;

const CardWrap = styled.div`
  width: 50%;
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

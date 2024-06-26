import React from "react";
import styled from "@emotion/styled";
import { SubTitle } from "../../../layout/subtitle";
import { AnnouncementCardI } from "./types";
import SocialIcons from "../../../layout/social-icons";

const AnnounceCard = ({ image, title, text, icons }: AnnouncementCardI) => {
  return (
    <Wrap>
      <AnnounceImage src={image} alt={title} />
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

export default AnnounceCard;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AnnounceImage = styled.img`
  width: 100%;
  height: 65%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Description = styled.span`
  font-family: Comfortaa, serif;
  font-weight: 400;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS18};
  color: ${({ theme: { colors } }) => colors.black2};
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding: 16px 0 0 388px;
`;

const BottomSection = styled.div`
  background-color: ${({ theme: { colors } }) => colors.blue4};
  border: 1px solid ${({ theme: { colors } }) => colors.blue5};
  border-top-style: none;
  padding: 16px;
  border-radius: 0 0 16px 16px;
`;

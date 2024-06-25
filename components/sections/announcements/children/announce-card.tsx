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
  background-color: yellow;
  height: 50%;
`;

const AnnounceImage = styled.img`
  width: 100%;
  height: 60%;
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
  height: 40%;
  background-color: ${({ theme: { colors } }) => colors.blue4};
  border: 1px solid ${({ theme: { colors } }) => colors.blue5};
  padding: 16px;
`;

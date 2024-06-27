import React from "react";
import styled from "@emotion/styled";
import { SubTitle } from "../../../layout/subtitle";
import { AnnouncementCardI } from "./types";
import SocialIcons from "../../../layout/social-icons";

const Card = ({ image, title, text, icons, isFirst }: AnnouncementCardI) => {
  return (
    <Wrap isFirst={isFirst}>
      <AnnounceImage src={image} alt={title} isFirst={isFirst} />
      <BottomSection isFirst={isFirst}>
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

export default Card;

const Wrap = styled.div<{ isFirst: boolean }>`
  grid-row: ${({ isFirst }) => (isFirst ? "span 2" : "")};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AnnounceImage = styled.img<{ isFirst: boolean }>`
  border-radius: 16px 16px 0 0;
  width: 100%;
  height: ${({ isFirst }) => (isFirst ? " 470px" : "200px")};
  object-fit: cover;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: 300px;
    min-height: 300px;
  }
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
`;

const BottomSection = styled.div<{ isFirst: boolean }>`
  height: inherit;
  background-color: ${({ theme: { colors } }) => colors.blue4};
  border: 1px solid ${({ theme: { colors } }) => colors.blue5};
  border-top-style: none;
  padding: 16px;
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    height: auto;
  }
`;

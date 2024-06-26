import React from "react";
import styled from "@emotion/styled";
import Button from "../../layout/button";

interface Props {
  imgLink: string;
  title: string;
  buttonText: string;
  isBottomContent?: boolean;
}

const Banner = ({ imgLink, title, buttonText, isBottomContent }: Props) => {
  return (
    <Wrap imgLink={imgLink} isBottomContent={isBottomContent}>
      <Title isBottomContent={isBottomContent}>{title}</Title>
      <Button color="yellow" text={buttonText} />
    </Wrap>
  );
};

const Wrap = styled.div<{ imgLink: string; isBottomContent?: boolean }>`
  display: flex;
  flex-direction: ${({ isBottomContent }) =>
    isBottomContent ? "row" : "column"};
  justify-content: ${({ isBottomContent }) =>
    isBottomContent ? "flex-start" : "center"};
  align-items: ${({ isBottomContent }) =>
    isBottomContent ? "flex-end" : "center"};
  height: 340px;
  width: 100%;
  padding: 16px;
  gap: 16px;
  border-radius: 16px;
  background-image: url(${({ imgLink }) => imgLink});
  background-size: cover;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    flex-direction: column;
    justify-content: ${({ isBottomContent }) =>
      isBottomContent ? "flex-end" : "center"};
  }
`;
const Title = styled.h3<{ isBottomContent?: boolean }>`
  font-family: Comfortaa, serif;
  font-size: ${({ theme: { fontSize } }) => fontSize.fontS48};
  color: ${({ theme: { colors } }) => colors.white};
  text-align: ${({ isBottomContent }) => (isBottomContent ? "left" : "center")};
  max-width: 60%;
  margin: 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    font-size: ${({ theme: { fontSize } }) => fontSize.fontS22};
    font-weight: 400;
    align-self: ${({ isBottomContent }) =>
      isBottomContent ? "flex-start" : "initial"};
    max-width: 100%;
  }
`;
export default Banner;

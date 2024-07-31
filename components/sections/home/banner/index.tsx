// components
import Button from "../../../layout/button";
// utils
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface Props {
  imgLink?: string;
  title: string;
  buttonText: string;
  isBottomContent?: boolean;
}

const Banner = ({ imgLink, title, buttonText, isBottomContent }: Props) => {
  const isTextVariant = !imgLink;

  return (
    <Wrap isBottomContent={isBottomContent} isTextVariant={isTextVariant}>
      {imgLink ? <Background imgLink={imgLink} /> : null}
      <Title isBottomContent={isBottomContent} isTextVariant={isTextVariant}>
        {title}
      </Title>
      <Button text={buttonText} />
    </Wrap>
  );
};

const moveBackground = keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(-11%); }
    100% { transform: translateX(0); }
`;

const Wrap = styled("div", {
  shouldForwardProp: (prop) =>
    !["isBottomContent", "isTextVariant"].includes(prop),
})<{ isBottomContent?: boolean; isTextVariant: boolean }>(
  ({ theme, isBottomContent, isTextVariant }) => ({
    position: "relative",
    display: "flex",
    flexDirection: isBottomContent ? "row" : "column",
    justifyContent: isBottomContent ? "flex-start" : "center",
    alignItems: isBottomContent ? "flex-end" : "center",
    height: isTextVariant ? "unset" : "340px",
    width: "100%",
    padding: isTextVariant ? "40px 0 46px" : "16px",
    gap: "16px",
    borderRadius: "16px",
    boxShadow: isTextVariant ? theme.shadows[0] : "none",
    overflow: "hidden",

    ...(isTextVariant ? { background: theme.backgrounds.banner } : {}),

    [theme.breakpoints.mobile]: {
      flexDirection: "column",
      justifyContent: isBottomContent ? "flex-end" : "center",
    },
  }),
);

const Background = styled("div", {
  shouldForwardProp: (prop) => prop !== "imgLink",
})<{ imgLink?: string }>(({ theme, imgLink }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "113%",
  backgroundImage: `url(${imgLink})`,
  backgroundSize: "cover",
  backgroundPosition: "0 50%",
  animation: `${moveBackground} 20s linear infinite`,
}));

const Title = styled("h3", {
  shouldForwardProp: (prop) =>
    !["isBottomContent", "isTextVariant"].includes(prop),
})<{ isBottomContent?: boolean; isTextVariant: boolean }>(
  ({ theme, isBottomContent, isTextVariant }) => ({
    zIndex: 1,
    fontSize: isTextVariant ? theme.fontSize.fontS24 : theme.fontSize.fontS48,
    color: isTextVariant ? theme.colors.blue : theme.colors.white,
    textAlign: isBottomContent ? "left" : "center",
    maxWidth: "60%",
    margin: "0",

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS22,
      fontWeight: "600",
      alignSelf: isBottomContent ? "flex-start" : "initial",
      maxWidth: "100%",
    },
  }),
);

export default Banner;

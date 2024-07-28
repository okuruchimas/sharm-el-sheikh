// components
import Button from "../../../layout/button";
// utils
import styled from "@emotion/styled";

interface Props {
  imgLink?: string;
  title: string;
  buttonText: string;
  isBottomContent?: boolean;
}

const Banner = ({ imgLink, title, buttonText, isBottomContent }: Props) => {
  const isTextVariant = !imgLink;

  return (
    <Wrap
      imgLink={imgLink}
      isBottomContent={isBottomContent}
      isTextVariant={isTextVariant}
    >
      <Title isBottomContent={isBottomContent} isTextVariant={isTextVariant}>
        {title}
      </Title>
      <Button text={buttonText} />
    </Wrap>
  );
};

const Wrap = styled("div", {
  shouldForwardProp: (prop) =>
    !["imgLink", "isBottomContent", "isTextVariant"].includes(prop),
})<{ imgLink?: string; isBottomContent?: boolean; isTextVariant: boolean }>(
  ({ theme, imgLink, isBottomContent, isTextVariant }) => ({
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

    ...(imgLink
      ? { backgroundImage: `url(${imgLink})`, backgroundSize: "cover" }
      : {
          background: theme.backgrounds.banner,
        }),

    [theme.breakpoints.mobile]: {
      flexDirection: "column",
      justifyContent: isBottomContent ? "flex-end" : "center",
    },
  }),
);

const Title = styled("h3", {
  shouldForwardProp: (prop) =>
    !["isBottomContent", "isTextVariant"].includes(prop),
})<{ isBottomContent?: boolean; isTextVariant: boolean }>(
  ({ theme, isBottomContent, isTextVariant }) => ({
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

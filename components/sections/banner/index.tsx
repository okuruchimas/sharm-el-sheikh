//components
import Button from "../../layout/button";
//utils
import styled from "@emotion/styled";

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

const Wrap = styled("div", {
  shouldForwardProp: (prop) => !["imgLink", "isBottomContent"].includes(prop),
})<{ imgLink: string; isBottomContent?: boolean }>(
  ({ theme, imgLink, isBottomContent }) => ({
    display: "flex",
    flexDirection: isBottomContent ? "row" : "column",
    justifyContent: isBottomContent ? "flex-start" : "center",
    alignItems: isBottomContent ? "flex-end" : "center",
    height: "340px",
    width: "100%",
    padding: "16px",
    gap: "16px",
    borderRadius: "16px",
    backgroundImage: `url(${imgLink})`,
    backgroundSize: "cover",

    [theme.breakpoints.mobile]: {
      flexDirection: "column",
      justifyContent: isBottomContent ? "flex-end" : "center",
    },
  }),
);

const Title = styled("h3", {
  shouldForwardProp: (prop) => prop !== "isBottomContent",
})<{ isBottomContent?: boolean }>(({ theme, isBottomContent }) => ({
  fontSize: theme.fontSize.fontS48,
  color: theme.colors.white,
  textAlign: isBottomContent ? "left" : "center",
  maxWidth: "60%",
  margin: "0",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS22,
    fontWeight: "400",
    alignSelf: isBottomContent ? "flex-start" : "initial",
    maxWidth: "100%",
  },
}));

export default Banner;

// hooks
import { useRouter } from "next/router";
// components
import Button from "../../../layout/button";
// utils
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { moveBackground } from "../../../layout/banner/banner";

interface Props {
  imgLink?: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HotspotsBanner = ({
  imgLink,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: Props) => {
  const router = useRouter();

  return (
    <Wrap>
      {imgLink ? <Background imgLink={imgLink} /> : null}
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Button text={buttonText} onClick={() => router.push(buttonLink)} />
      </Content>
    </Wrap>
  );
};

const Wrap = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: "16px",
  width: "100%",
  minHeight: "370px",
  display: "flex",
  alignItems: "end",

  [theme.breakpoints.mobile]: {
    minHeight: "250px",
  },
}));

const Background = styled("div")<{ imgLink?: string }>(
  ({ theme, imgLink }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "113%",
    backgroundImage: `url(${imgLink})`,
    backgroundSize: "cover",
    backgroundPosition: "0 50%",
    animation: `${moveBackground} 20s linear infinite`,
  }),
);

const Title = styled("p")(({ theme }) => ({
  fontWeight: "700",
  width: "100%",
  fontSize: theme.fontSize.fontS32,
  zIndex: 1,
  color: theme.colors.white,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

const SubTitle = styled("p")(({ theme }) => ({
  fontWeight: "400",
  fontSize: theme.fontSize.fontS18,
  zIndex: 1,
  color: theme.colors.white,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

const Content = styled("div")(({ theme }) => ({
  zIndex: 1,
  maxHeight: "50%",
  color: theme.colors.white,
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  gap: "8px",
  padding: "70px 230px 11px 16px",
  backgroundImage: "url(images/banners/hotspots-banner-bg.svg)",
  backgroundSize: "cover",

  [theme.breakpoints.mobile]: {
    padding: "30px 20px 2px 8px",
  },

  button: {
    border: "none",
    marginRight: "50px",
  },
}));

export default HotspotsBanner;

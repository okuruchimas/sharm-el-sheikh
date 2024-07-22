// components
import NextImage from "../../../layout/image";
// utils
import styled from "@emotion/styled";

const Background = () => {
  return (
    <Wrap>
      <NextImage
        src="/images/background/background-prom.svg"
        alt="background"
        width="100%"
        height="50vh"
        mWidth="100%"
        mHeight="25vh"
      />
      <Title>Currently no discounts available</Title>
    </Wrap>
  );
};

const Wrap = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const Title = styled("h3")(({ theme }) => ({
  fontWeight: "700",
  textAlign: "center",
  margin: "24px 288px 0",
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
    margin: "12px 0 0",
  },
}));

export default Background;

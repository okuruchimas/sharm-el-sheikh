import styled from "@emotion/styled";

const Background = () => {
  return (
    <Wrap>
      <Image src="images/background/background-prom.svg" alt="image"></Image>
      <Title>Currently no discounts available</Title>
    </Wrap>
  );
};

const Wrap = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const Image = styled("img")({});

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

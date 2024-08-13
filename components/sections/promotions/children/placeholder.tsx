// components
import NextImage from "../../../layout/image";
// utils
import styled from "@emotion/styled";

type PlaceholderProps = {
  title?: string;
};

const Placeholder = ({ title }: PlaceholderProps) => {
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
      {title ? <Title>{title}</Title> : null}
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
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

export default Placeholder;

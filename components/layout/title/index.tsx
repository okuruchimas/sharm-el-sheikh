import styled from "@emotion/styled";

const Title = styled("h2")(({ theme }) => ({
  margin: "0",
  fontSize: theme.fontSize.fontS40,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS18,
  },
}));

export default Title;

import styled from "@emotion/styled";

export const SubTitle = styled("h3")(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,
  margin: "0",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

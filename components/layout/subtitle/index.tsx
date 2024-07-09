import styled from "@emotion/styled";

export const SubTitle = styled("h4")(({ theme }) => ({
  fontFamily: "Comfortaa, serif",
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,
  margin: "0",

  [`@media (${theme.breakpoints.mobile})`]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

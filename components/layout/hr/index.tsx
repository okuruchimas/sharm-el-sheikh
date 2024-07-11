import styled from "@emotion/styled";

export const Hr = styled("div", {
  shouldForwardProp: (prop) => prop !== "isFooter",
})<{ isFooter?: boolean }>(({ theme, isFooter }) => ({
  height: "1px",
  width: "100%",
  backgroundColor: theme.colors.blue3,

  [theme.breakpoints.mobile]: {
    display: isFooter ? "block" : "none",
  },
}));

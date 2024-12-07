import styled from "@emotion/styled";

export const CardsWrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "16px",
  width: "100%",
  marginBottom: "24px",

  [theme.breakpoints.desktopM]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  [theme.breakpoints.desktopS]: {
    gridTemplateColumns: "1fr 1fr",
  },

  [theme.breakpoints.mobileS]: {
    gridTemplateColumns: "1fr",
  },
}));

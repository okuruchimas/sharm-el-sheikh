export const theme = {
  colors: {
    black: "#191c1e",
    white: "#ffffff",
    white2: "#FAE7D6",
    white3: "#FEFEFE",
    grey1: "#8f9193",
    grey2: "#5c5f61",
    grey3: "#757779",
    grey4: "rgba(255, 255, 255, 0.4)",
    grey5: "rgba(254, 254, 254, 0.4)",
    blue: "#054e5c",
    blue2: "#b6d5db",
    blue3: "#0b7287",
    blue4: "rgba(41, 169, 194, 0.06)",
    blue5: "#29a9c2",
    yellow: "#ffb901",
  },
  fontSize: {
    fontS12: "12px",
    fontS14: "14px",
    fontS16: "16px",
    fontS18: "18px",
    fontS20: "20px",
    fontS22: "22px",
    fontS24: "24px",
    fontS28: "28px",
    fontS32: "32px",
    fontS40: "40px",
    fontS48: "48px",
    fontS68: "68px",
  },
  breakpoints: {
    mobile: "max-width: 1024px",
    mobile1: "max-width: 1380px",
  },
};

export type Theme = typeof theme;

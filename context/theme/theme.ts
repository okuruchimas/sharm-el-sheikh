export const theme = {
  colors: {
    white: "#ffffff",
    white2: "#FAE7D6",
    white3: "#FEFEFE",
    grey: "#8f9193",
    grey2: "#5c5f61",
    grey3: "#757779",
    grey4: "rgba(255, 255, 255, 0.4)",
    grey5: "rgba(254, 254, 254, 0.4)",
    black: "#191c1e",
    black2: "#2E3133",
    blue: "#054e5c",
    blue2: "#b6d5db",
    blue3: "#0b7287",
    blue4: "rgba(41, 169, 194, 0.06)",
    blue5: "#29a9c2",
    peach: "#e8d4c4",
    yellow: "#ffb901",
    yellow2: "#FFC01B",
    yellow3: "rgba(255, 185, 1, 0.2)",
    red: "#ff5449",
  },
  backgrounds: {
    mainSection: "url('images/background/bg-main-section.webp')",
    banner:
      "linear-gradient(180deg, rgba(254, 254, 254, 0.5) -222.92%, rgba(255, 234, 178, 0.5) 263.82%)",
  },
  fontSize: {
    fontS10: "10px",
    fontS12: "12px",
    fontS14: "14px",
    fontS16: "16px",
    fontS18: "18px",
    fontS20: "20px",
    fontS21: "21px",
    fontS22: "22px",
    fontS24: "24px",
    fontS28: "28px",
    fontS32: "32px",
    fontS40: "40px",
    fontS48: "48px",
    fontS68: "68px",
  },
  breakpoints: {
    mobile: "@media (max-width: 1024px)",
    mobile1: "@media (max-width: 1380px)",
    desktop: "@media (min-width: 1024px)",
  },
  shadows: [
    "0 0 20px -14px #757779",
    "1px 1px 10px 1px #054E5C4D",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
};

export type Theme = typeof theme;

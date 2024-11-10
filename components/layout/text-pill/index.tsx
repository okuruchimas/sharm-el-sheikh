import styled from "@emotion/styled";

const TextPill = styled("span")(({ theme }) => ({
  padding: "6px 12px",
  backgroundColor: theme.colors.yellow,
  borderRadius: "8px",
  fontSize: theme.fontSize.fontS16,
  fontWeight: 600,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

export default TextPill;

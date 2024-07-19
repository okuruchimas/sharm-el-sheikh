import React from "react";
import View from "../header/children/type";
import styled from "@emotion/styled";

interface Props {
  children: View;
  title: string;
  titleChildren?: View;
  isColumn?: boolean;
}
const SectionWrapper = ({
  children,
  title,
  titleChildren,
  isColumn,
}: Props) => {
  return (
    <Wrapper>
      <TitleWrap isColumn={!!isColumn}>
        <Title>{title}</Title>
        {titleChildren ? titleChildren : null}
      </TitleWrap>
      {children}
    </Wrapper>
  );
};

export default SectionWrapper;

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",
});

const TitleWrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "isColumn",
})<{ isColumn: boolean }>(({ theme, isColumn }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.mobile]: {
    flexDirection: isColumn ? "column" : "unset",
    alignItems: isColumn ? "normal" : "unset",
    gap: isColumn ? "16px" : "unset",
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS21,
  },
}));

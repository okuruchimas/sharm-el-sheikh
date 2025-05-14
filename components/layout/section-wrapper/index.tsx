import React from "react";
import View from "../header/children/type";
import styled from "@emotion/styled";
import { Title } from "../title";
import Button from "../button";

interface Props {
  children: View;
  title?: string;
  titleChildren?: View;
  isColumn?: boolean;
  buttonText?: string;
  onClick?: () => void;
  mt?: string;
}
const SectionWrapper = ({
  children,
  title,
  titleChildren,
  isColumn,
  buttonText,
  onClick,
  mt = "unset",
}: Props) => {
  return (
    <Wrapper mt={mt}>
      <TopWrapper>
        {title || titleChildren ? (
          <TitleWrap isColumn={!!isColumn}>
            {title ? <Title as="h2">{title}</Title> : null}
            {titleChildren ? titleChildren : null}
          </TitleWrap>
        ) : null}

        {buttonText && onClick ? (
          <ButtonStyled text={"See All"} onClick={() => {}} />
        ) : null}
      </TopWrapper>

      {children}
    </Wrapper>
  );
};

export default SectionWrapper;

const Wrapper = styled("div")<{ mt: string }>(({ theme, mt }) => ({
  marginTop: mt,
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",
}));
const TopWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "24px",
  width: "100%",
});
const ButtonStyled = styled(Button)({
  minWidth: 120,
  padding: "8px 12px",
});
const TitleWrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "isColumn",
})<{ isColumn: boolean }>(({ theme, isColumn }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  [theme.breakpoints.mobile]: {
    flexDirection: isColumn ? "column" : "unset",
    alignItems: isColumn ? "normal" : "unset",
    gap: isColumn ? "16px" : "unset",
  },
}));

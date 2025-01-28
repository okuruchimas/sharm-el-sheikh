import React, { useState } from "react";
import { Arrow } from "../../../../layout/header/children/language-selector";
import styled from "@emotion/styled";

interface Props {
  title: string;
  text: string;
}
const VacancyItem = ({ title, text }: Props) => {
  const [isDescr, setIsDescr] = useState<boolean>(false);

  return (
    <VacancyWrap>
      <ButtonWrap onClick={() => setIsDescr(!isDescr)}>
        <VacancyTitle>{title}</VacancyTitle>
        <VacancyArrow
          src={"/icons/header/dropdown-arrow.svg"}
          alt={"arrow"}
          menuVisible={isDescr}
        />
      </ButtonWrap>
      <VacancyDescriptionWrapper isDescr={isDescr}>
        <VacancyDescription>{text}</VacancyDescription>
      </VacancyDescriptionWrapper>
    </VacancyWrap>
  );
};

const VacancyWrap = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.yellow5,
  padding: "16px",
  borderRadius: "8px",
  border: `1px solid ${theme.colors.yellow}`,
  position: "relative",
}));

const ButtonWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
}));

const VacancyTitle = styled("div")(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  fontWeight: 700,
}));

const VacancyArrow = styled(Arrow)(({ theme }) => ({
  height: 11,
}));

const VacancyDescriptionWrapper = styled("div")<{ isDescr: boolean }>(
  ({ theme, isDescr }) => ({
    maxHeight: isDescr ? "200px" : "0",
    overflow: "hidden",
    transition: "max-height 0.5s ease",
  }),
);

const VacancyDescription = styled("div")(({ theme }) => ({
  marginTop: "16px",
  fontSize: theme.fontSize.fontS18,
  fontWeight: 400,
  color: theme.colors.black,
}));

export default VacancyItem;

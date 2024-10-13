import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "../../components/sections/entertainers-tour-guides/children/container";
import Dropdown from "../../components/layout/filters";
import { selectOption } from "../../components/types/filter";
import styled from "@emotion/styled";
import Button from "../../components/layout/button";
import AnimatorCards from "../../components/sections/entertainers-tour-guides/animators/cards";

const options = [
  { key: "sharm-el-maya", value: "Animation companies" },
  { key: "hadaba-um-sid", value: "Хадаба Ум Сід" },
  { key: "haiy-an-nur", value: "Хай ан-Нур" },
  { key: "naama-bay", value: "Наама Бей" },
];

const options2 = [
  { key: "most-rvw", value: "Most Reviews" },
  { key: "few-rvw", value: "Fewest Reviews" },
  { key: "h-rt", value: "Highest Rating" },
  { key: "l-rt", value: "Lowest Rating" },
];
const Animators = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedArea, setSelectedArea] = useState<selectOption>(options[0]);

  const handleOptionSelect = async (option: selectOption) => {
    setIsLoading(true);
    setSelectedArea(option);

    setIsLoading(false);
  };

  return (
    <Container>
      <FiltersWrap>
        <Dropdown
          options={options}
          onChange={handleOptionSelect}
          isLoading={isLoading}
        />
        <Dropdown
          options={options2}
          onChange={handleOptionSelect}
          isLoading={isLoading}
        />
        <Button
          color="blue"
          backgroundColor="transparent"
          text="Nearest Animator"
        />
      </FiltersWrap>
      <AnimatorCards />
    </Container>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["company-page", "common"])),
    },
  };
}

const FiltersWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  gap: "24px",
  marginBottom: "24px",
  button: {
    marginLeft: "auto",
  },
}));

export default Animators;

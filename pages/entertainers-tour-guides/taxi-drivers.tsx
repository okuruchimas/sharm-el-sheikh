import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "../../components/sections/entertainers-tour-guides/children/container";
import Dropdown from "../../components/layout/filters";
import { selectOption } from "../../components/types/filter";
import styled from "@emotion/styled";
import TaxiCards from "../../components/sections/entertainers-tour-guides/taxi-drivers/cards";
import TaxiStatus, {
  TaxiStatusProps,
} from "../../components/sections/entertainers-tour-guides/taxi-drivers/statuses";
import Image from "next/image";
import FilterTaxiForm from "../../components/sections/entertainers-tour-guides/taxi-drivers/filter";

const options = [
  { key: "most-rvw", value: "Most Reviews" },
  { key: "few-rvw", value: "Fewest Reviews" },
  { key: "h-rt", value: "Highest Rating" },
  { key: "l-rt", value: "Lowest Rating" },
];

const statuses: TaxiStatusProps[] = [
  { text: "Available", status: "available" },
  { text: "Not Available", status: "unavailable" },
  { text: "Doesnt work", status: "notwork" },
];

const TaxiDrivers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [selectedArea, setSelectedArea] = useState<selectOption>(options[0]);

  //async ???
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
          width="100%"
          height="56px"
          color="blue"
        />

        <FilterButton onClick={() => setIsFilter(!isFilter)}>
          <Image
            height={56}
            width={56}
            src={"/icons/filter.svg"}
            alt="icon of a filtre"
          />
        </FilterButton>
        {isFilter ? <FilterTaxiForm onCancel={setIsFilter} /> : null}

        <StatusesWrap>
          {statuses.map(({ status, text }) => (
            <TaxiStatus key={status} text={text} status={status} />
          ))}
        </StatusesWrap>
      </FiltersWrap>
      <TaxiCards />
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
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  gap: "32px",
  marginBottom: "24px",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

const StatusesWrap = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "24px",

  [theme.breakpoints.mobile]: {},
}));

const FilterButton = styled("button")(({ theme }) => ({
  border: "none",
  background: "transparent",
  width: 56,
  height: 56,
  [theme.breakpoints.mobile]: {},
}));

export default TaxiDrivers;

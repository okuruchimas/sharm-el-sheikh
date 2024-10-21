import { REVALIDATE_TIME } from "../../../constants/page.constants";
import { useMemo, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TaxiStatus, {
  TaxiStatusProps,
} from "../../../components/sections/entertainers-tour-guides/taxi-drivers/statuses";
import { selectOption } from "../../../components/types/filter";
import useResponsive from "../../../hooks/useResponsive";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import Dropdown from "../../../components/layout/filters";
import FilterButton from "../../../components/layout/filters/button";
import FilterForm from "../../../components/layout/filters/filter";
import TaxiCards from "../../../components/sections/entertainers-tour-guides/taxi-drivers/cards";
import Pagination from "../../../components/layout/pagination";
import styled from "@emotion/styled";

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

  //pagin
  const [page, setPage] = useState<number>(1);
  const { isMobile } = useResponsive();

  const pageSize = useMemo(() => (isMobile ? 3 : 6), [isMobile]);

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

        <FilterButton onClick={() => setIsFilter(!isFilter)} />
        {isFilter ? <FilterForm onCancel={setIsFilter} /> : null}

        <StatusesWrap>
          {statuses.map(({ status, text }) => (
            <TaxiStatus key={status} text={text} status={status} />
          ))}
        </StatusesWrap>
      </FiltersWrap>
      <TaxiCards />
      <Pagination
        currentPage={page}
        onChangePage={setPage}
        totalItems={40}
        pageSize={pageSize}
      />
    </Container>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["company-page", "common"])),
    },
    revalidate: REVALIDATE_TIME,
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
    alignItems: "flex-start",
  },
}));

const StatusesWrap = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "24px",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export default TaxiDrivers;

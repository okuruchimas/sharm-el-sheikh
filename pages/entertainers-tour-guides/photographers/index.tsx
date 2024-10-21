import { REVALIDATE_TIME } from "../../../constants/page.constants";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { selectOption } from "../../../components/types/filter";
import useResponsive from "../../../hooks/useResponsive";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import Dropdown from "../../../components/layout/filters";
import FilterButton from "../../../components/layout/filters/button";
import FilterForm from "../../../components/layout/filters/filter";
import PhotographCards from "../../../components/sections/entertainers-tour-guides/photographers/cards";
import Pagination from "../../../components/layout/pagination";

const options = [
  { key: "most-rvw", value: "Most Reviews" },
  { key: "few-rvw", value: "Fewest Reviews" },
  { key: "h-rt", value: "Highest Rating" },
  { key: "l-rt", value: "Lowest Rating" },
];
const Photographers = () => {
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
      </FiltersWrap>
      <PhotographCards />
      <Pagination
        currentPage={page}
        onChangePage={setPage}
        totalItems={40}
        pageSize={pageSize}
      />
    </Container>
  );
};

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

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["company-page", "common"])),
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default Photographers;

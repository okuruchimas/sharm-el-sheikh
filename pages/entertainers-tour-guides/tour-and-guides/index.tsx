import { REVALIDATE_TIME } from "../../../constants/page.constants";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMemo, useState } from "react";
import { selectOption } from "../../../components/types/filter";
import useResponsive from "../../../hooks/useResponsive";
import styled from "@emotion/styled";
import Dropdown from "../../../components/layout/filters";
import Pagination from "../../../components/layout/pagination";
import GuidesCards from "../../../components/sections/entertainers-tour-guides/tour-and-guides/cards";

const options = [
  { key: "most-rvw", value: "Most Reviews" },
  { key: "few-rvw", value: "Fewest Reviews" },
  { key: "h-rt", value: "Highest Rating" },
  { key: "l-rt", value: "Lowest Rating" },
];
const TourAndGuides = () => {
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
      </FiltersWrap>
      <GuidesCards />
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
    alignItems: "flex-start",
  },
}));

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "company-page",
        "common",
        "entertainers-tour-guides",
      ])),
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default TourAndGuides;

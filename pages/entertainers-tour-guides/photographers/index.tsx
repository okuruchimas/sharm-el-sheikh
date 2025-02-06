import {
  GetLocationsDocument,
  GetPhotographyStylesDocument,
  GetPhotographersByFiltersDocument,
  type PhotographerFragment,
} from "../../../gql/graphql";
// hooks
import useResponsive from "../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
import { useEffect, useMemo, useState } from "react";
// constants
import { REVALIDATE_TIME } from "../../../constants/page.constants";
import { RATING_FILTER_OPTIONS } from "../../../constants/filter-options";
// utils
import styled from "@emotion/styled";
import { fetchData, fetchDataFromApi } from "../../../utils/fetchApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// components
import Tabs from "../../../components/sections/entertainers-tour-guides/children/tabs";
import Dropdown from "../../../components/layout/filters";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import Pagination from "../../../components/layout/pagination";
import FilterButton from "../../../components/layout/filters/button";
import PhotographCards from "../../../components/sections/entertainers-tour-guides/photographers/cards";
import PhotographersFilters from "../../../components/sections/entertainers-tour-guides/photographers/children/photographers-filter";
// types
import type { selectOption } from "../../../components/types/filter";
import Tabs from "../../../components/sections/entertainers-tour-guides/children/tabs";

type Photographers = { attributes: PhotographerFragment }[];

type PhotographersProps = {
  locations: { attributes: selectOption }[];
  initialTotal: number;
  photographyStyles: { attributes: selectOption }[];
  photographers: Photographers;
};

const Photographers = ({
  locations,
  initialTotal,
  photographers,
  photographyStyles,
}: PhotographersProps) => {
  // result
  const [result, setResult] = useState<Photographers>(photographers);
  // pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(initialTotal);
  // filters
  const [filter, setFilter] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>();
  const [selectedLocations, setSelectedLocations] = useState<string[]>();
  // booleans
  const [isFilter, setIsFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { i18n, t } = useTranslation("entertainers-tour-guides");
  const { isMobile } = useResponsive();
  const pageSize = useMemo(() => (isMobile ? 3 : 6), [isMobile]);
  const filterOptions = RATING_FILTER_OPTIONS.map((el) => ({
    ...el,
    value: t(el.value),
  }));

  const handleGetPhotographers = async ({
    sort,
    pageNum,
    styles,
    locations,
  }: {
    sort: string;
    pageNum: number;
    styles?: string[];
    locations?: string[];
  }) => {
    setIsLoading(true);

    const { photographers } = await fetchDataFromApi(
      GetPhotographersByFiltersDocument,
      {
        locale: i18n.language,
        page: pageNum,
        pageSize: pageSize,
        sort: sort || undefined,
        styles: styles?.length ? styles : undefined,
        locations: locations?.length ? locations : undefined,
      },
    );

    setResult(photographers?.data as Photographers);
    setTotal(photographers?.meta.pagination.total || 0);
    setIsLoading(false);
  };

  useEffect(
    () => {
      if (!isMobile) {
        handleGetPhotographers({
          sort: filter,
          pageNum: 1,
          styles: selectedStyles,
          locations: selectedLocations,
        });
        setPage(1);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize],
  );

  const handleSaveFilters = async ({
    styles,
    locations,
  }: {
    styles?: string[];
    locations?: string[];
  }) => {
    setIsFilter(false);
    setSelectedStyles(styles);
    setSelectedLocations(locations);

    await handleGetPhotographers({
      styles,
      locations,
      sort: filter,
      pageNum: 1,
    });
    setPage(1);
  };

  const handleChangePage = async (pageNumber: number) => {
    setPage(pageNumber);
    await handleGetPhotographers({
      styles: selectedStyles,
      locations: selectedLocations,
      sort: filter,
      pageNum: pageNumber,
    });
  };

  const handleChangeSort = async (option: selectOption) => {
    setFilter(option.key);
    await handleGetPhotographers({
      styles: selectedStyles,
      locations: selectedLocations,
      sort: option.key,
      pageNum: page,
    });
  };

  return (
    <Container>
      <Tabs />
      <FiltersWrap>
        <Dropdown
          options={filterOptions}
          onChange={handleChangeSort}
          isLoading={isLoading}
          height="56px"
          color="blue"
        />
        <FilterButton onClick={() => setIsFilter(!isFilter)} />
        {isFilter ? (
          <PhotographersFilters
            onClose={() => setIsFilter(false)}
            selectedStyles={selectedStyles}
            stylesOptions={photographyStyles.map((el) => el.attributes)}
            locationsOptions={locations.map((el) => el.attributes)}
            selectedLocations={selectedLocations}
            onSave={handleSaveFilters}
          />
        ) : null}
      </FiltersWrap>
      <PhotographCards photographers={result.map((el) => el.attributes)} />
      <Pagination
        currentPage={page}
        onChangePage={handleChangePage}
        totalItems={total}
        pageSize={pageSize}
      />
    </Container>
  );
};

const FiltersWrap = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  gap: "32px",
  marginBottom: "24px",
});

export async function getStaticProps({ locale }: any) {
  const { photographers } = await fetchData(GetPhotographersByFiltersDocument, {
    locale,
    page: 1,
    pageSize: 4,
  });

  const { photographyStyles } = await fetchData(GetPhotographyStylesDocument, {
    locale,
  });
  const { locations } = await fetchData(GetLocationsDocument, { locale });

  return {
    props: {
      photographers: photographers?.data,
      initialTotal: photographers?.meta.pagination.total || 0,
      photographyStyles: photographyStyles?.data,
      locations: locations?.data,

      ...(await serverSideTranslations(locale, [
        "company-page",
        "common",
        "entertainers-tour-guides",
      ])),
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default Photographers;

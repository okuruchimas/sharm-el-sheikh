import {
  type CarClass,
  type Language,
  type TaxiDriverPreviewFragment,
  GetLanguagesDocument,
  GetCarClassesDocument,
  GetDriversByFiltersDocument,
} from "../../../gql/graphql";
import TaxiFilterForm, {
  type TaxiFilterFormI,
} from "../../../components/layout/filters/taxi-filter";
import TaxiStatus, {
  type Status,
  type TaxiStatusProps,
} from "../../../components/sections/entertainers-tour-guides/taxi-drivers/statuses";
// hooks
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
// constants
import { REVALIDATE_TIME } from "../../../constants/page.constants";
// components
import useResponsive from "../../../hooks/useResponsive";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import Dropdown from "../../../components/layout/filters";
import FilterButton from "../../../components/layout/filters/button";
import TaxiCards from "../../../components/sections/entertainers-tour-guides/taxi-drivers/cards";
import Pagination from "../../../components/layout/pagination";
// utils
import styled from "@emotion/styled";
import { getDayAndTime } from "../../../utils/formateDate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchData, fetchDataFromApi } from "../../../utils/fetchApi";
// types
import type { selectOption } from "../../../components/types/filter";

type Drivers = { attributes: TaxiDriverPreviewFragment }[];
export type TimePeriod = {
  day: string;
  from: string;
  to?: string;
};
type TaxiDriversProps = {
  initialTotalDrivers: number;
  initialDrivers: Drivers;
  languages: { attributes: Language }[];
  carClasses: { attributes: CarClass }[];
};

const TaxiDrivers = ({
  languages,
  carClasses,
  initialDrivers,
  initialTotalDrivers,
}: TaxiDriversProps) => {
  // result
  const [result, setResult] = useState<Drivers>(initialDrivers);
  // pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(initialTotalDrivers);
  // filters
  const [sort, setSort] = useState("");
  const [filters, setFilters] = useState<TaxiFilterFormI>();
  // booleans
  const [isFilter, setIsFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { isMobile } = useResponsive();
  const { i18n, t } = useTranslation("entertainers-tour-guides");
  const pageSize = useMemo(() => (isMobile ? 6 : 12), [isMobile]);

  const sortOptions = [
    { key: "", value: t("sortBy") },
    { key: "totalComments:desc", value: t("filters.mostReviews") },
    { key: "totalComments:asc", value: t("filters.fewestReviews") },
    { key: "averageRating:desc", value: t("filters.highestRating") },
    { key: "averageRating:asc", value: t("filters.lowestRating") },
  ];
  const statuses = [
    { text: t("taxiStatus.available"), status: "available" },
    { text: t("taxiStatus.notAvailable"), status: "unavailable" },
    { text: t("taxiStatus.doesntWork"), status: "notwork" },
  ];

  const handleGetDrivers = async ({
    sort,
    pageNum,
    timeLater,
    carClasses,
    availableNow,
    languageKeys,
  }: TaxiFilterFormI & {
    sort: string;
    pageNum: number;
  }) => {
    setIsLoading(true);
    const { dayOfWeek, time } = getDayAndTime();

    const getTimeFilters = () => {
      if (availableNow) {
        return {
          dayOfWeek: { eq: dayOfWeek },
          timeSlots: { startTime: { lte: time }, endTime: { gte: time } },
        };
      }
      if (timeLater) {
        return {
          dayOfWeek: { eq: timeLater.day },
          timeSlots: timeLater.to
            ? {
                startTime: { lte: timeLater.to },
                endTime: { gte: timeLater.from },
              }
            : {
                startTime: { lte: timeLater.from },
                endTime: { gte: timeLater.from },
              },
        };
      }
      return undefined;
    };

    const data = await fetchDataFromApi(GetDriversByFiltersDocument, {
      locale: i18n.language,
      page: pageNum,
      pageSize: pageSize,
      sort: sort || undefined,
      languageKeys: languageKeys?.length ? languageKeys : undefined,
      timeFilters: getTimeFilters(),
      carClasses: carClasses?.length ? carClasses : undefined,
    });

    setResult(data?.taxiDrivers?.data as Drivers);
    setTotal(data.taxiDrivers?.meta.pagination.total || 0);
    setIsLoading(false);
  };

  useEffect(
    () => {
      setPage(1);

      if (!isMobile && pageSize < initialTotalDrivers) {
        handleGetDrivers({ sort: "", pageNum: 1 });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize],
  );

  const handleSortSelect = (option: selectOption) => {
    if (option.key === sort) return;

    setSort(option.key);
    handleGetDrivers({
      sort: option.key,
      pageNum: 1,
      ...filters,
    });
    setPage(1);
  };

  const handleFiltersSubmit = (values: TaxiFilterFormI) => {
    setIsFilter(false);

    const filtersData = {
      languageKeys: values?.languageKeys?.length
        ? values.languageKeys
        : undefined,
      carClasses: values?.carClasses?.length ? values.carClasses : undefined,
      availableNow: values.availableNow,
      timeLater: values.availableLater ? values.timeLater : undefined,
      availableLater: values.availableLater,
    };

    setFilters(filtersData);
    handleGetDrivers({
      sort,
      pageNum: 1,
      ...filtersData,
    });
    setPage(1);
  };

  const handleChangePage = (pageNumber: number) => {
    setPage(pageNumber);
    handleGetDrivers({
      sort,
      pageNum: pageNumber,
      ...filters,
    });
  };

  return (
    <Container>
      <FiltersWrap>
        <Dropdown
          options={sortOptions}
          onChange={handleSortSelect}
          isLoading={isLoading}
          width="100%"
          height="56px"
          color="blue"
        />

        <FilterButton onClick={() => setIsFilter(!isFilter)} />
        {isFilter ? (
          <TaxiFilterForm
            onClose={() => setIsFilter(false)}
            onSubmit={handleFiltersSubmit}
            defaultValues={filters}
            languageOptions={languages?.map((el) => el.attributes)}
            carClassOptions={carClasses?.map((el) => el.attributes)}
          />
        ) : null}

        <StatusesWrap>
          {statuses.map(({ status, text }) => (
            <TaxiStatus key={status} text={text} status={status as Status} />
          ))}
        </StatusesWrap>
      </FiltersWrap>
      <TaxiCards drivers={result?.map((el) => el.attributes) || []} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        totalItems={total}
        onChangePage={handleChangePage}
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

export async function getStaticProps({ locale }: any) {
  const { languages } = await fetchData(GetLanguagesDocument);
  const { carClasses } = await fetchData(GetCarClassesDocument);
  const { taxiDrivers } = await fetchData(GetDriversByFiltersDocument, {
    locale,
    page: 1,
    pageSize: 6,
  });

  return {
    props: {
      languages: languages?.data,
      carClasses: carClasses?.data,
      initialDrivers: taxiDrivers?.data,
      initialTotalDrivers: taxiDrivers?.meta.pagination.total,
      ...(await serverSideTranslations(locale, [
        "company-page",
        "common",
        "entertainers-tour-guides",
      ])),
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default TaxiDrivers;

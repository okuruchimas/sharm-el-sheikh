import {
  type CarClass,
  type Language,
  type TaxiSpotFragment,
  type TaxiDriverPreviewFragment,
  GetLanguagesDocument,
  GetCarClassesDocument,
  GetDriversByFiltersDocument,
  GetTaxiSpotsDocument,
} from "../../../gql/graphql";
import TaxiFilterForm, {
  type TaxiFilterFormI,
} from "../../../components/layout/filters/taxi-filter";
import TaxiStatus from "../../../components/sections/entertainers-tour-guides/taxi-drivers/statuses";
// hooks
import useResponsive from "../../../hooks/useResponsive";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
// constants
import { TAXI_STATUSES } from "../../../constants/taxi-statuses.constants";
import { REVALIDATE_TIME } from "../../../constants/page.constants";
import { RATING_FILTER_OPTIONS } from "../../../constants/filter-options";
// components
import Map from "../../../components/layout/map";
import Tabs from "../../../components/sections/entertainers-tour-guides/children/tabs";
import Modal from "../../../components/layout/modal";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import Dropdown from "../../../components/layout/filters";
import FilterButton from "../../../components/layout/filters/button";
import TaxiCards from "../../../components/sections/entertainers-tour-guides/taxi-drivers/cards";
import Pagination from "../../../components/layout/pagination";
import TaxiSpotPopup from "../../../components/sections/entertainers-tour-guides/taxi-drivers/taxi-spot-popup";
// utils
import styled from "@emotion/styled";
import { mapLocations } from "../../../utils/location-mapper";
import { getCurrentDayAndTime } from "../../../utils/formateDate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchData, fetchDataFromApi } from "../../../utils/fetchApi";
// types
import type { selectOption } from "../../../components/types/filter";
import type { MapCard } from "../../../components/layout/map/children/types";

type Drivers = { attributes: TaxiDriverPreviewFragment }[];

type TaxiDriversProps = {
  initialTotalDrivers: number;
  initialDrivers: Drivers;
  taxiSpots: { attributes: TaxiSpotFragment }[];
  languages: { attributes: Language }[];
  carClasses: { attributes: CarClass }[];
};

const TaxiDrivers = ({
  languages,
  taxiSpots,
  carClasses,
  initialDrivers,
  initialTotalDrivers,
}: TaxiDriversProps) => {
  // result
  const [result, setResult] = useState<Drivers>(initialDrivers);
  const [selectedSpot, setSelectedSpot] = useState<TaxiSpotFragment>();
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
  const { t: tDriver } = useTranslation("driver");
  const { i18n, t } = useTranslation("entertainers-tour-guides");
  const pageSize = useMemo(() => (isMobile ? 6 : 12), [isMobile]);

  const sortOptions = RATING_FILTER_OPTIONS.map((el) => ({
    ...el,
    value: t(el.value),
  }));

  const handleGetDrivers = async ({
    to,
    day,
    from,
    sort,
    pageNum,
    availableLater,
    carClasses,
    availableNow,
    languageKeys,
  }: TaxiFilterFormI & {
    sort: string;
    pageNum: number;
  }) => {
    setIsLoading(true);

    const getTimeFilters = () => {
      if (availableNow) {
        const { dayOfWeek, time } = getCurrentDayAndTime();

        return {
          dayOfWeek: { eq: dayOfWeek },
          timeSlots: { startTime: { lte: time }, endTime: { gte: time } },
        };
      }

      if (availableLater) {
        const toFormatted = to ? to.format("HH:mm:ss.SSS") : undefined;
        const fromFormatted = from ? from.format("HH:mm:ss.SSS") : undefined;

        const dayFilter = { dayOfWeek: { eq: day } };
        const timeFilter = {
          timeSlots: to
            ? {
                startTime: { lte: toFormatted },
                endTime: { gte: fromFormatted },
              }
            : {
                startTime: { lte: fromFormatted },
                endTime: { gte: fromFormatted },
              },
        };

        return {
          ...(day ? dayFilter : {}),
          ...(from ? timeFilter : {}),
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
      if (!isMobile) {
        handleGetDrivers({ sort: "", pageNum: 1 });
        setPage(1);
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
      availableLater: values.availableLater,
      day: values.day,
      from: values.from,
      to: values.to,
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

  const locations = mapLocations(taxiSpots);

  const handleInfoWindowClick = (card: MapCard) => {
    const company = taxiSpots.find((el) => el.attributes.slug === card.slug);

    setSelectedSpot(company?.attributes);
  };

  const handlePopupClose = () => setSelectedSpot(undefined);

  return (
    <Container>
      {locations.length ? (
        <Map onInfoWindowClick={handleInfoWindowClick} locations={locations} />
      ) : null}
      <Tabs />
      <FiltersWrap>
        <ButtonsWrapper>
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
        </ButtonsWrapper>
        <StatusesWrap>
          {TAXI_STATUSES.map(({ status, i18nKey }) => (
            <TaxiStatus key={status} text={tDriver(i18nKey)} status={status} />
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
      {selectedSpot ? (
        <Modal isOpen={!!selectedSpot?.slug} onClose={handlePopupClose}>
          <TaxiSpotPopup data={selectedSpot} onClose={handlePopupClose} />
        </Modal>
      ) : null}
    </Container>
  );
};

const FiltersWrap = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  marginBottom: "24px",

  [theme.breakpoints.mobile]: {
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 16,
  },
}));

const ButtonsWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "32px",
});

const StatusesWrap = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "24px",

  [theme.breakpoints.mobile]: {
    marginLeft: "unset",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
}));

export async function getStaticProps({ locale }: any) {
  const { languages } = await fetchData(GetLanguagesDocument, { locale });
  const { carClasses } = await fetchData(GetCarClassesDocument, { locale });
  const { taxiSpots } = await fetchData(GetTaxiSpotsDocument, { locale });
  const { taxiDrivers } = await fetchData(GetDriversByFiltersDocument, {
    locale,
    page: 1,
    pageSize: 4,
  });

  return {
    props: {
      languages: languages?.data,
      carClasses: carClasses?.data,
      taxiSpots: taxiSpots?.data,
      initialDrivers: taxiDrivers?.data,
      initialTotalDrivers: taxiDrivers?.meta.pagination.total,
      ...(await serverSideTranslations(locale, [
        "driver",
        "common",
        "entertainers-tour-guides",
      ])),
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default TaxiDrivers;

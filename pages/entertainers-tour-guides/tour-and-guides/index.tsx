import {
  GetTourGuidesByFiltersDocument,
  GetToursDocument,
  type TourGuideFragment,
  type TourPreviewFragment,
} from "../../../gql/graphql";
// hooks
import { useEffect, useMemo, useState } from "react";
import useResponsive from "../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
// constants
import { REVALIDATE_TIME } from "../../../constants/page.constants";
import { RATING_FILTER_OPTIONS } from "../../../constants/filter-options";
// components
import Map from "../../../components/layout/map";
import Tabs from "../../../components/sections/entertainers-tour-guides/children/tabs";
import Modal from "../../../components/layout/modal";
import Dropdown from "../../../components/layout/filters";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import Pagination from "../../../components/layout/pagination";
import GuidesCards from "../../../components/sections/entertainers-tour-guides/tour-and-guides/cards";
// utils
import styled from "@emotion/styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchData, fetchDataFromApi } from "../../../utils/fetchApi";
// types
import type { MapCard } from "../../../components/layout/map/children/types";
import type { selectOption } from "../../../components/types/filter";

type TourGuides = { attributes: TourGuideFragment }[];
type TourAndGuidesProps = {
  initialTotal: number;
  tourGuides: TourGuides;
  tours: { attributes: TourPreviewFragment }[];
};
const TourAndGuides = ({
  tours,
  tourGuides,
  initialTotal,
}: TourAndGuidesProps) => {
  // result
  const [result, setResult] = useState<TourGuides>(tourGuides);
  // pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(initialTotal);
  // filters
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTour, setSelectedTour] = useState<MapCard>();
  const { i18n, t } = useTranslation("entertainers-tour-guides");
  const { isMobile } = useResponsive();
  const pageSize = useMemo(() => (isMobile ? 3 : 6), [isMobile]);
  const filterOptions = RATING_FILTER_OPTIONS.map((el) => ({
    ...el,
    value: t(el.value),
  }));

  const handleGetTourGuides = async ({
    sort,
    pageNum,
  }: {
    sort: string;
    pageNum: number;
  }) => {
    setIsLoading(true);

    const { tourGuides } = await fetchDataFromApi(
      GetTourGuidesByFiltersDocument,
      {
        locale: i18n.language,
        page: pageNum,
        pageSize: pageSize,
        sort: sort || undefined,
      },
    );

    setResult(tourGuides?.data as TourGuides);
    setTotal(tourGuides?.meta.pagination.total || 0);
    setIsLoading(false);
  };

  useEffect(
    () => {
      if (!isMobile) {
        handleGetTourGuides({
          sort: filter,
          pageNum: 1,
        });
        setPage(1);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize],
  );

  const handleChangePage = async (pageNumber: number) => {
    setPage(pageNumber);
    await handleGetTourGuides({
      sort: filter,
      pageNum: pageNumber,
    });
  };

  const handleChangeSort = async (option: selectOption) => {
    setFilter(option.key);

    await handleGetTourGuides({
      sort: option.key,
      pageNum: 1,
    });
    setPage(1);
  };

  const locations = tours
    .filter((el) => !!el.attributes.position)
    .map((el) => ({
      slug: el.attributes.slug,
      title: el.attributes.name,
      subTitle: el.attributes.location || "",
      imageSrc:
        el.attributes.images?.data[0]?.attributes?.url ||
        "/images/background/background-prom.svg",
      imageAlt:
        el.attributes.images?.data[0]?.attributes?.alternativeText || "",
      averageRating: el.attributes.averageRating,
      totalComments: el.attributes.totalComments,
      position: {
        lat: el.attributes.position?.lat || 0,
        lng: el.attributes.position?.lng || 0,
      },
    }));

  const handleInfoWindowClick = (data: MapCard) => setSelectedTour(data);
  const handlePopupClose = () => setSelectedTour(undefined);

  return (
    <>
      <Container>
        {locations.length ? (
          <Map
            onInfoWindowClick={handleInfoWindowClick}
            locations={locations}
          />
        ) : null}
        <Tabs />
        <FiltersWrap>
          <Dropdown
            options={filterOptions}
            onChange={handleChangeSort}
            isLoading={isLoading}
            width="100%"
            height="56px"
            color="blue"
          />
        </FiltersWrap>
        <GuidesCards tourGuides={result?.map((el) => el.attributes)} />
        <Pagination
          currentPage={page}
          onChangePage={handleChangePage}
          totalItems={total}
          pageSize={pageSize}
        />
      </Container>
      {selectedTour ? (
        <Modal isOpen={!!selectedTour?.slug} onClose={handlePopupClose}>
          <h2>{selectedTour.title}</h2>
          <p>{selectedTour.subTitle}</p>
        </Modal>
      ) : null}
    </>
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
  const { tourGuides } = await fetchData(GetTourGuidesByFiltersDocument, {
    locale,
    page: 1,
    pageSize: 6,
  });
  const { tours } = await fetchData(GetToursDocument, { locale });

  return {
    props: {
      tourGuides: tourGuides?.data,
      initialTotal: tourGuides?.meta.pagination.total || 0,
      tours: tours?.data,
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

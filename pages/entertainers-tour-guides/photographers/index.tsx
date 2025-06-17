import {
  GetPhotographyStylesDocument,
  GetPhotographyLocationsDocument,
  GetPhotographersByFiltersDocument,
  type PhotographyLocation,
  type PhotographerFragment,
  GetTourGuidesByFiltersDocument,
  GetTourOperatorCompaniesDocument,
  GetDeliveriesDocument,
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
import { mapLocation } from "../../../utils/location-mapper";
import { fetchData, fetchDataFromApi } from "../../../utils/fetchApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// components
import Map from "../../../components/layout/map";
import Tabs from "../../../components/sections/entertainers-tour-guides/children/tabs";
import Modal from "../../../components/layout/modal";
import Dropdown from "../../../components/layout/filters";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import Pagination from "../../../components/layout/pagination";
import FilterButton from "../../../components/layout/filters/button";
import PhotographCards from "../../../components/sections/entertainers-tour-guides/photographers/cards";
import PhotographersFilters from "../../../components/sections/entertainers-tour-guides/photographers/children/photographers-filter";
import PhotographyLocationPopup from "../../../components/sections/entertainers-tour-guides/photographers/photography-location-popup";
// types
import type { selectOption } from "../../../components/types/filter";
import type { MapCard } from "../../../components/layout/map/children/types";

type Photographers = { attributes: PhotographerFragment }[];

type PhotographersProps = {
  initialTotal: number;
  photographyStyles: { attributes: selectOption }[];
  photographers: Photographers;
  photographyLocations: { attributes: PhotographyLocation }[];
};

const Photographers = ({
  initialTotal,
  photographers,
  photographyStyles,
  photographyLocations,
}: PhotographersProps) => {
  // result
  const [result, setResult] = useState<Photographers>(photographers);
  const [selectedSpot, setSelectedSpot] = useState<PhotographyLocation>();
  // pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(initialTotal);
  // filters
  const [filter, setFilter] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>();
  const [selectedLocations, setSelectedLocations] = useState<string[]>();
  const [selectedCategory, setSelectedCategory] = useState<selectOption>({
    value: "all",
    key: "",
  });
  // booleans
  const [isFilter, setIsFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { i18n, t } = useTranslation("entertainers-tour-guides");
  const { t: tCommon } = useTranslation("common");
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

  const locationsOptions = photographyLocations.map((el) => ({
    key: el.attributes.name,
    value: el.attributes.slug,
  }));

  const categories: selectOption[] = [
    {
      value: tCommon("labels.all"),
      key: "",
    },
    {
      value: t("categories.studio"),
      key: "studio",
      iconSrc: "/icons/cosmetics.svg",
      markerIcon: "/icons/location-marker-cosmetics.svg",
    },
    {
      value: t("categories.location"),
      key: "location",
      iconSrc: "/icons/star.svg",
      markerIcon: "/icons/location-marker-star.svg",
    },
  ];

  const getMarker = (type: string) => {
    const category = categories.find((el) => el.key === type);
    return category?.markerIcon;
  };

  const locations = selectedCategory?.key
    ? photographyLocations
        .filter((el) => el.attributes.type === selectedCategory.key)
        .map((el) => mapLocation(el, selectedCategory.markerIcon))
    : photographyLocations.map((el) =>
        mapLocation(el, getMarker(el.attributes.type)),
      );

  const handleInfoWindowClick = (card: MapCard) => {
    const company = photographyLocations.find(
      (el) => el.attributes.slug === card.slug,
    );

    setSelectedSpot(company?.attributes);
  };

  const handlePopupClose = () => setSelectedSpot(undefined);

  const handleCategorySelect = (option: selectOption) =>
    setSelectedCategory(option);

  return (
    <Container>
      <Map
        onInfoWindowClick={handleInfoWindowClick}
        locations={locations}
        categories={categories}
        onCategorySelect={handleCategorySelect}
        selectedCategoryID={selectedCategory?.key}
      />
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
            locationsOptions={locationsOptions}
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
      {selectedSpot ? (
        <Modal isOpen={!!selectedSpot?.slug} onClose={handlePopupClose}>
          <PhotographyLocationPopup
            data={selectedSpot}
            onClose={handlePopupClose}
          />
        </Modal>
      ) : null}
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
  const [{ photographers }, { photographyStyles }, { photographyLocations }] =
    await Promise.all([
      fetchData(GetPhotographersByFiltersDocument, {
        locale,
        page: 1,
        pageSize: 4,
      }),
      fetchData(GetPhotographyStylesDocument, {
        locale,
      }),
      fetchData(GetPhotographyLocationsDocument, {
        locale,
      }),
    ]);

  return {
    props: {
      photographers: photographers?.data,
      initialTotal: photographers?.meta.pagination.total || 0,
      photographyStyles: photographyStyles?.data,
      photographyLocations: photographyLocations?.data,

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

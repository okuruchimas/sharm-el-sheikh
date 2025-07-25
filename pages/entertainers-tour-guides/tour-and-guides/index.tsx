import {
  GetToursDocument,
  GetTourCategoriesDocument,
  GetTourGuidesByFiltersDocument,
  type TourGuideFragment,
  type TourPreviewFragment,
  type TourCategoryFragment,
} from '../../../gql/graphql';
// hooks
import { useEffect, useMemo, useState } from 'react';
import useResponsive from '../../../hooks/useResponsive';
import { useTranslation } from 'next-i18next';
// constants
import { REVALIDATE_TIME } from '../../../constants/page.constants';
import { RATING_FILTER_OPTIONS } from '../../../constants/filter-options';
// components
import Map from '../../../components/layout/map';
import Tabs from '../../../components/sections/entertainers-tour-guides/children/tabs';
import Modal from '../../../components/layout/modal';
import Dropdown from '../../../components/layout/filters';
import TourPopup from '../../../components/sections/entertainers-tour-guides/tour-and-guides/tour-popup';
import Container from '../../../components/sections/entertainers-tour-guides/children/container';
import Pagination from '../../../components/layout/pagination';
import GuidesCards from '../../../components/sections/entertainers-tour-guides/tour-and-guides/cards';
// utils
import styled from '@emotion/styled';
import { mapLocation } from '../../../utils/location-mapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchData, fetchDataFromApi } from '../../../utils/fetchApi';
// types
import type { MapCard } from '../../../components/layout/map/children/types';
import type { selectOption } from '../../../components/types/filter';
import { mapCategory } from '../../../utils/mappers';
import { getLayoutData } from '../../../utils/get-layout-data';
import { GetStaticPropsContext } from 'next';

type TourGuides = { attributes: TourGuideFragment }[];
type TourAndGuidesProps = {
  initialTotal: number;
  tourGuides: TourGuides;
  tours: { attributes: TourPreviewFragment }[];
  tourCategories: { attributes: TourCategoryFragment }[];
};
const TourAndGuides = ({
  tours,
  tourGuides,
  initialTotal,
  tourCategories,
}: TourAndGuidesProps) => {
  // result
  const [result, setResult] = useState<TourGuides>(tourGuides);
  // pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(initialTotal);
  // filters
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTour, setSelectedTour] = useState<MapCard>();
  const [selectedCategory, setSelectedCategory] = useState<selectOption>({
    value: 'all',
    key: '',
  });

  const { t: tCommon } = useTranslation('common');
  const { i18n, t } = useTranslation('entertainers-tour-guides');
  const { isMobile } = useResponsive();
  const pageSize = useMemo(() => (isMobile ? 3 : 6), [isMobile]);
  const filterOptions = RATING_FILTER_OPTIONS.map(el => ({
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

  const locations = selectedCategory.key
    ? tours
        .filter(
          el =>
            el.attributes?.tour_categories?.data[0]?.attributes?.key ===
            selectedCategory.key,
        )
        .map(el => mapLocation(el, selectedCategory.markerIcon))
    : tours.map(el =>
        mapLocation(
          el,
          el.attributes?.tour_categories?.data[0]?.attributes?.markerIcon.data
            ?.attributes?.url,
        ),
      );

  const handleInfoWindowClick = (data: MapCard) => setSelectedTour(data);
  const handlePopupClose = () => setSelectedTour(undefined);

  const categories = tourCategories.map(el => mapCategory(el));
  const handleCategorySelect = (option: selectOption) =>
    setSelectedCategory(option);

  return (
    <>
      <Container>
        <Map
          categories={[
            { key: '', value: tCommon('labels.all') },
            ...categories,
          ]}
          onInfoWindowClick={handleInfoWindowClick}
          onCategorySelect={handleCategorySelect}
          selectedCategoryID={selectedCategory?.key}
          locations={locations}
        />
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
        <GuidesCards tourGuides={result?.map(el => el.attributes)} />
        <Pagination
          currentPage={page}
          onChangePage={handleChangePage}
          totalItems={total}
          pageSize={pageSize}
        />
      </Container>
      {selectedTour ? (
        <Modal isOpen={!!selectedTour?.slug} onClose={handlePopupClose}>
          <TourPopup tourPreview={selectedTour} onClose={handlePopupClose} />
        </Modal>
      ) : null}
    </>
  );
};

const FiltersWrap = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '286px',
  gap: '32px',
  marginBottom: '24px',

  [theme.breakpoints.mobile]: {
    width: '100%',
    alignItems: 'flex-start',
  },
}));

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const layoutDataPromise = getLayoutData(locale!);

  const [
    { tourGuides },
    { tours },
    { tourCategories },
    { headerData, footerData },
  ] = await Promise.all([
    fetchData(GetTourGuidesByFiltersDocument, {
      locale,
      page: 1,
      pageSize: 6,
    }),
    fetchData(GetToursDocument, { locale }),
    fetchData(GetTourCategoriesDocument, { locale }),
    layoutDataPromise,
  ]);

  return {
    props: {
      tourGuides: tourGuides?.data,
      initialTotal: tourGuides?.meta.pagination.total || 0,
      tours: tours?.data,
      tourCategories: tourCategories?.data,
      headerData,
      footerData,
      ...(await serverSideTranslations(locale!, [
        'company-page',
        'common',
        'entertainers-tour-guides',
      ])),
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default TourAndGuides;

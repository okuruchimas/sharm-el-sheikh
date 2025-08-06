import {
  GetDeliveriesDocument,
  GetTourOperatorCompaniesDocument,
  GetTourOperatorByFiltersDocument,
  type DeliveryFragment,
  type TourOperatorCompanyFragment,
  type TourOperatorPreviewFragment,
} from '../../gql/graphql';
// hooks
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
// components
import Map from '../../components/layout/map';
import Modal from '../../components/layout/modal';
import Banners from '../../components/sections/agents/children/banners';
import Delivery from '../../components/sections/agents/delivery';
import SectionWrapper from '../../components/layout/section-wrapper';
import CompanyFullInfo from '../../components/layout/company-full-info';
import SectionsWrapper from '../../components/layout/sections-wrapper';
// constants
import { REVALIDATE_TIME } from '../../constants/page.constants';
// utils
import styled from '@emotion/styled';
import { mapLocation } from '../../utils/location-mapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { fetchData } from '../../utils/fetchApi';
// types
import { MapCard } from '../../components/layout/map/children/types';
import { getLayoutData } from '../../utils/get-layout-data';
import { SwiperCardsWrapper } from '../../components/sections/entertainers-tour-guides/children/cards-wrap';
import GuideOrOperatorCard from '../../components/sections/entertainers-tour-guides/tour-and-guides/card';
import { Pagination } from 'swiper/modules';
import useResponsive from '../../hooks/useResponsive';
import { SwiperSlide } from 'swiper/react';
import { GetStaticPropsContext } from 'next';
import {
  BACKGROUND_GRADIENT,
  BACKGROUND_GRADIENT_MOBILE,
} from '../../constants/images.constants';
import MetaTags from '../../components/layout/seo';

type Props = {
  deliveries: DeliveryFragment[];
  initialTotalDeliveries: number;
  tourOperators: TourOperatorPreviewFragment[];
  tourOperatorCompanies: { attributes: TourOperatorCompanyFragment }[];
};
const Agents = ({
  deliveries,
  initialTotalDeliveries,
  tourOperators,
  tourOperatorCompanies,
}: Props) => {
  const { t: tPage } = useTranslation('agents');
  const [selectedOperatorCompany, setSelectedOperatorCompany] =
    useState<TourOperatorCompanyFragment>();
  const { slidesPerView } = useResponsive();

  const locations = tourOperatorCompanies.map(el =>
    mapLocation(el, '/icons/tour-operator-company-map-marker.svg'),
  );
  const handleInfoWindowClick = (previewData: MapCard) => {
    setSelectedOperatorCompany(
      tourOperatorCompanies.find(el => el.attributes.slug === previewData.slug)
        ?.attributes || undefined,
    );
  };
  const handlePopupClose = () => setSelectedOperatorCompany(undefined);

  return (
    <Wrapper url={BACKGROUND_GRADIENT} mobUrl={BACKGROUND_GRADIENT_MOBILE}>
      <MetaTags
        title="Tourist Agents in Sharm El Sheikh | Contacts & Map Location"
        description="Find our tourist agents and guides in Sharm El Sheikh. Interactive map with locations, contact information and service descriptions of our local representatives."
        imgUrl="https://www.go-go.live/images/business-card.png"
        siteUrl="https://www.go-go.live/agents"
      />
      <Map
        title={tPage('sectionTitles.mapTourCompanies')}
        zoom={3}
        onInfoWindowClick={handleInfoWindowClick}
        locations={locations}
      />

      <SectionWrapper title={tPage('sectionTitles.operatorsForYou')} mt="60px">
        {tourOperators.length ? (
          <SwiperCardsWrapper
            modules={[Pagination]}
            slidesPerView={slidesPerView}
            spaceBetween={12}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            loop
          >
            {tourOperators.map(el => (
              <SwiperSlide key={el.slug}>
                <GuideOrOperatorCard data={el} />
              </SwiperSlide>
            ))}
          </SwiperCardsWrapper>
        ) : null}
      </SectionWrapper>

      <Delivery
        initialDeliveries={deliveries}
        initialTotalDeliveries={initialTotalDeliveries}
      />

      <Banners />

      {selectedOperatorCompany ? (
        <Modal
          isOpen={!!selectedOperatorCompany?.slug}
          onClose={handlePopupClose}
        >
          <CompanyFullInfo
            companyData={selectedOperatorCompany}
            onClose={handlePopupClose}
          />
        </Modal>
      ) : null}
    </Wrapper>
  );
};
export default Agents;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const layoutDataPromise = getLayoutData(locale!);
  const [
    { tourOperators },
    { tourOperatorCompanies },
    { deliveries },
    { headerData, footerData },
  ] = await Promise.all([
    fetchData(GetTourOperatorByFiltersDocument, {
      locale,
      page: 1,
      pageSize: 4,
    }),
    fetchData(GetTourOperatorCompaniesDocument, { locale }),
    fetchData(GetDeliveriesDocument, {
      page: 1,
      pageSize: 4,
      publicationType: 'to',
    }),
    layoutDataPromise,
  ]);

  return {
    props: {
      deliveries: deliveries?.data?.map(el => el.attributes) || [],
      initialTotalDeliveries: deliveries?.meta.pagination.total || 0,
      tourOperators: tourOperators?.data.map(el => el.attributes) || [],
      tourOperatorCompanies: tourOperatorCompanies?.data || [],
      ...(await serverSideTranslations(locale!, [
        'company-page',
        'common',
        'agents',
        'entertainers-tour-guides',
      ])),
      headerData,
      footerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',

  paddingTop: '242px',

  [theme.breakpoints.mobile]: {
    paddingTop: '120px',
  },
}));

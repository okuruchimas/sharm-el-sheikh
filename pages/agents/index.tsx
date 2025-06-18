import {
  GetDeliveriesDocument,
  GetTourGuidesByFiltersDocument,
  GetTourOperatorCompaniesDocument,
  type DeliveryFragment,
  type TourGuideFragment,
  type TourOperatorCompanyFragment,
} from "../../gql/graphql";
// hooks
import { useState } from "react";
import { useTranslation } from "next-i18next";
// components
import Map from "../../components/layout/map";
import Modal from "../../components/layout/modal";
import Banners from "../../components/sections/agents/children/banners";
import Delivery from "../../components/sections/agents/delivery";
import GuidesCards from "../../components/sections/entertainers-tour-guides/tour-and-guides/cards";
import SectionWrapper from "../../components/layout/section-wrapper";
import CompanyFullInfo from "../../components/layout/company-full-info";
import SectionsWrapper from "../../components/layout/sections-wrapper";
// constants
import { REVALIDATE_TIME } from "../../constants/page.constants";
// utils
import styled from "@emotion/styled";
import { mapLocation } from "../../utils/location-mapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchData } from "../../utils/fetchApi";
// types
import { MapCard } from "../../components/layout/map/children/types";
import { SwiperCardsWrapper } from "../../components/sections/entertainers-tour-guides/children/cards-wrap";
import GuideCard from "../../components/sections/entertainers-tour-guides/tour-and-guides/card";
import { Pagination } from "swiper/modules";
import useResponsive from "../../hooks/useResponsive";
import { SwiperSlide } from "swiper/react";

type Props = {
  deliveries: DeliveryFragment[];
  initialTotalDeliveries: number;
  tourGuides: TourGuideFragment[];
  tourOperatorCompanies: { attributes: TourOperatorCompanyFragment }[];
};
const Agents = ({
  deliveries,
  initialTotalDeliveries,
  tourGuides,
  tourOperatorCompanies,
}: Props) => {
  const { t } = useTranslation("common");
  const { t: tPage } = useTranslation("agents");
  const [selectedOperatorCompany, setSelectedOperatorCompany] =
    useState<TourOperatorCompanyFragment>();
  const { slidesPerView } = useResponsive();

  const locations = tourOperatorCompanies.map((el) =>
    mapLocation(el, "/icons/tour-operator-company-map-marker.svg"),
  );
  const handleInfoWindowClick = (previewData: MapCard) => {
    setSelectedOperatorCompany(
      tourOperatorCompanies.find(
        (el) => el.attributes.slug === previewData.slug,
      )?.attributes || undefined,
    );
  };
  const handlePopupClose = () => setSelectedOperatorCompany(undefined);

  return (
    <Wrapper
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <SectionWrapper title={tPage("sectionTitles.mapTourCompanies")}>
        <Map
          zoom={3}
          centerProp={{
            lat: 40.963648072647775,
            lng: 20.399537638329676,
          }}
          onInfoWindowClick={handleInfoWindowClick}
          locations={locations}
        />
      </SectionWrapper>

      <SectionWrapper
        title={tPage("sectionTitles.operatorsForYou")}
        buttonText={t("buttons.seeAll")}
        onClick={() => {}}
        mt="60px"
      >
        <SwiperCardsWrapper
          modules={[Pagination]}
          slidesPerView={slidesPerView}
          isSingleCard={false}
          spaceBetween={12}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          loop
        >
          {tourGuides.map((el) => (
            <SwiperSlide key={el.slug}>
              <GuideCard tourGuide={el} />
            </SwiperSlide>
          ))}
        </SwiperCardsWrapper>
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

export async function getStaticProps({ locale }: any) {
  const { tourGuides } = await fetchData(GetTourGuidesByFiltersDocument, {
    locale,
    page: 1,
    pageSize: 4,
  });

  const { tourOperatorCompanies } = await fetchData(
    GetTourOperatorCompaniesDocument,
    { locale },
  );

  const { deliveries } = await fetchData(GetDeliveriesDocument, {
    page: 1,
    pageSize: 4,
    publicationType: "to",
  });

  return {
    props: {
      deliveries: deliveries?.data?.map((el) => el.attributes),
      initialTotalDeliveries: deliveries?.meta.pagination.total,
      tourGuides: tourGuides?.data?.map((el) => el.attributes),
      tourOperatorCompanies: tourOperatorCompanies?.data,
      initialTotal: tourGuides?.meta.pagination.total || 0,
      ...(await serverSideTranslations(locale, [
        "company-page",
        "common",
        "agents",
        "entertainers-tour-guides",
      ])),
    },
    revalidate: REVALIDATE_TIME,
  };
}

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",

  paddingTop: "242px",

  [theme.breakpoints.mobile]: {
    paddingTop: "120px",
  },
}));

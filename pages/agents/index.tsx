import {
  GetToursDocument,
  GetAdvertisementsDocument,
  GetTourGuidesByFiltersDocument,
  type TourGuideFragment,
  type TourPreviewFragment,
  type AdvertisementFragment,
} from "../../gql/graphql";
// hooks
import { useState } from "react";
import { useTranslation } from "next-i18next";
// components
import Map from "../../components/layout/map";
import Modal from "../../components/layout/modal";
import Banners from "../../components/sections/agents/delivery/children/banners";
import Delivery from "../../components/sections/agents/delivery";
import TourPopup from "../../components/sections/entertainers-tour-guides/tour-and-guides/tour-popup";
import GuidesCards from "../../components/sections/entertainers-tour-guides/tour-and-guides/cards";
import SectionWrapper from "../../components/layout/section-wrapper";
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

type Props = {
  ads: { attributes: AdvertisementFragment }[];
  initialTotalAds: number;
  tourGuides: { attributes: TourGuideFragment }[];
  tours: { attributes: TourPreviewFragment }[];
};
const Agents = ({ ads, initialTotalAds, tourGuides, tours }: Props) => {
  const { t } = useTranslation("common");
  const [selectedTour, setSelectedTour] = useState<MapCard>();

  const locations = tours.map((el) =>
    mapLocation(
      el,
      el.attributes?.tour_categories?.data[0]?.attributes?.markerIcon.data
        ?.attributes?.url,
    ),
  );

  const handleInfoWindowClick = (data: MapCard) => setSelectedTour(data);
  const handlePopupClose = () => setSelectedTour(undefined);

  return (
    <Wrapper
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <SectionWrapper title={"Map of Tour Operator Companies"}>
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
        title={"Tour Operators for You!"}
        buttonText={t("buttons.seeAll")}
        onClick={() => {}}
        mt="60px"
      >
        <GuidesCards tourGuides={tourGuides?.map((el) => el.attributes)} />
      </SectionWrapper>

      <Delivery
        initialAds={ads?.map((el) => el.attributes)}
        initialTotalAds={initialTotalAds}
      />

      <Banners />

      {selectedTour ? (
        <Modal isOpen={!!selectedTour?.slug} onClose={handlePopupClose}>
          <TourPopup tourPreview={selectedTour} onClose={handlePopupClose} />
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
  const { tours } = await fetchData(GetToursDocument, { locale });

  const { advertisements } = await fetchData(GetAdvertisementsDocument, {
    page: 1,
    pageSize: 4,
    publicationType: "to",
  });

  return {
    props: {
      ads: advertisements?.data,
      initialTotalAds: advertisements?.meta.pagination.total,
      tourGuides: tourGuides?.data,
      tours: tours?.data,
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

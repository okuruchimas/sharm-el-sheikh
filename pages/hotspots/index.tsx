import { useMemo } from "react";
import {
  type CategoryEntity,
  type EventCardEntity,
  type HotspotsPageFragment,
  GetEventCardsDocument,
  GetCategoriesDocument,
  GetHotspotsPageDocument,
} from "../../gql/graphql";
// components
import Map from "../../components/sections/home/map";
import ClubsContainer from "../../components/sections/hotspots/clubs-container";
import EventsContainer from "../../components/sections/hotspots/events-container";
import SectionsWrapper from "../../components/layout/sections-wrapper";
import HotspotsBanner from "../../components/sections/hotspots/hotspots-banner";
// utils
import styled from "@emotion/styled";
import { fetchData } from "../../utils/fetchApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type HotspotsPageProps = {
  totalEvents: number;
  categories: CategoryEntity[];
  pageData: HotspotsPageFragment;
  initialEvents: EventCardEntity[];
};

const HotspotsPage = ({
  pageData: { bottomBanner, eventsTitle, clubsTitle, clubsInfo },
  totalEvents,
  initialEvents,
  categories,
}: HotspotsPageProps) => {
  const categoriesMapped = useMemo(
    () =>
      categories.map((el) => ({
        key: el.attributes?.key || "",
        value: el.attributes?.value || "",
        iconSrc: el.attributes?.icon.data?.attributes?.url || "",
        markerIcon: el.attributes?.markerIcon.data?.attributes?.url,
      })),
    [categories],
  );

  return (
    <Wrapper
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <EventsContainer
        title={eventsTitle}
        initialEvents={initialEvents}
        totalItems={totalEvents}
      />
      <ClubsContainer
        title={clubsTitle}
        clubsInfo={clubsInfo}
        totalItems={40}
      />
      <Map
        title="Find the necessary location quickly"
        categories={categoriesMapped}
      />
      {bottomBanner ? (
        <HotspotsBanner
          title={bottomBanner.title || ""}
          buttonText={bottomBanner.buttonText || ""}
          buttonLink={bottomBanner.buttonLink || ""}
          imgLink={bottomBanner.bannerImage?.data?.attributes?.url || ""}
          subtitle={bottomBanner.subtitle || ""}
        />
      ) : null}
    </Wrapper>
  );
};

export default HotspotsPage;

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  paddingTop: "236px",

  [theme.breakpoints.mobile]: {
    paddingTop: "80px",
  },
}));

export async function getStaticProps({ locale }: any) {
  const { hotspotsPage } = await fetchData(GetHotspotsPageDocument, { locale });
  const { eventCards } = await fetchData(GetEventCardsDocument, {
    locale,
    page: 1,
    pageSize: 3,
  });
  const { categories } = await fetchData(GetCategoriesDocument, { locale });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      pageData: hotspotsPage?.data?.attributes,
      initialEvents: eventCards?.data,
      categories: categories?.data,
      totalEvents: eventCards?.meta.pagination.total || 0,
    },
  };
}

import {
  type CategoryEntity,
  type EventCardEntity,
  type HotspotsPageFragment,
  type CompanyPreviewFragment,
  GetEventCardsDocument,
  GetCategoriesDocument,
  GetHotspotsPageDocument,
  GetCompaniesByFilterDocument,
} from "../../gql/graphql";
// hooks
import { useMemo } from "react";
import { useTranslation } from "next-i18next";
// components
import Map from "../../components/sections/home/map";
import ClubsContainer from "../../components/sections/hotspots/clubs-container";
import EventsContainer from "../../components/sections/hotspots/events-container";
import SectionsWrapper from "../../components/layout/sections-wrapper";
import HotspotsBanner from "../../components/sections/hotspots/hotspots-banner";
import ClubOptionsTable from "../../components/sections/hotspots/table";
// constants
import { CLUBS } from "../../constants/page-company-categories";
import { REVALIDATE_TIME } from "../../constants/page.constants";
// utils
import styled from "@emotion/styled";
import { fetchData } from "../../utils/fetchApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type HotspotsPageProps = {
  totalEvents: number;
  categories: CategoryEntity[];
  pageData: HotspotsPageFragment;
  initialEvents: EventCardEntity[];
  totalClubs: number;
  initialClubs: { attributes: CompanyPreviewFragment }[];
};

const HotspotsPage = ({
  pageData: { bottomBanner, eventsTitle, clubsTitle, clubsInfo, mapTitle },
  totalEvents,
  initialEvents,
  totalClubs,
  initialClubs,
  categories,
}: HotspotsPageProps) => {
  const { t } = useTranslation("common");

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

  const allCategories =
    categories?.map((el) => el.attributes?.key || "").join("***") || "";

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
        totalItems={totalClubs}
        initialClubs={initialClubs.map((el) => el.attributes)}
      />
      <ClubOptionsTable />
      <Map
        title={mapTitle || ""}
        categories={[
          { key: allCategories, value: t("labels.all") },
          ...(categoriesMapped || []),
        ]}
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
  const commonParams = {
    locale,
    page: 1,
    pageSize: 3,
  };
  const { eventCards } = await fetchData(GetEventCardsDocument, commonParams);
  const { companies } = await fetchData(GetCompaniesByFilterDocument, {
    ...commonParams,
    category: CLUBS,
  });
  const { categories } = await fetchData(GetCategoriesDocument, { locale });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      pageData: hotspotsPage?.data?.attributes,
      initialEvents: eventCards?.data,
      categories: categories?.data,
      totalEvents: eventCards?.meta.pagination.total || 0,
      initialClubs: companies?.data,
      totalClubs: companies?.meta.pagination.total || 0,
    },
    revalidate: REVALIDATE_TIME,
  };
}

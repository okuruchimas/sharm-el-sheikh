// mock
import {
  dataPromCards,
  dataPromCardsDeprecated,
  type PromCardProps,
} from "./api/prom-cards";
// components
import Head from "next/head";
import Main from "../components/sections/home/main";
import Loader from "../components/layout/loader";
import Promotions from "../components/sections/promotions";
import FeedbackForm from "../components/sections/home/feedback";
import SectionsWrapper from "../components/layout/sections-wrapper";
import LazyWrapper from "../components/layout/lazy-wrapper";
// utils
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { fetchData } from "../utils/fetchApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// types
import type { EventCardProps } from "../components/sections/home/main/children/types";
import { GetHomePageDocument, type HomePageFragment } from "../gql/graphql";

const DynamicBanner = dynamic(
  () => import("../components/sections/home/banner"),
  {
    loading: () => <Loader />,
  },
);
const DynamicAnnouncements = dynamic(
  () => import("../components/sections/home/announcements"),
  {
    loading: () => <Loader />,
  },
);
const DynamicMap = dynamic(() => import("../components/sections/home/map"), {
  ssr: true,
  loading: () => <Loader />,
});

type Props = EventCardProps &
  PromCardProps & { homePageData: HomePageFragment };

const Home = ({ promCards, homePageData }: Props) => {
  return (
    <Wrap id="/">
      <Head>
        <title>Sharm El Sheikh</title>
      </Head>
      <Main
        eventCards={homePageData.event_cards}
        eventCardsTitle={homePageData.eventCardsTitle}
        heroTitle={homePageData.heroTitle || ""}
      />
      <SectionsWrapper
        url="images/background/background-gradient.svg"
        mobUrl="images/background/mobile-background-gradient.svg"
      >
        <Promotions
          promCards={promCards}
          title={homePageData.promotionsTitle}
        />
        <LazyWrapper>
          <DynamicBanner
            imgLink={homePageData.banner1.bannerImage?.data?.attributes?.url}
            title={homePageData.banner1.title}
            buttonText={homePageData.banner1.buttonText || ""}
            buttonLink={homePageData.banner1.buttonLink || ""}
            isBottomContent
          />
        </LazyWrapper>
        <LazyWrapper minHeight={600}>
          <DynamicAnnouncements
            title={homePageData.announcementsTitle}
            announcementsCards={homePageData.announcements}
          />
        </LazyWrapper>
        <LazyWrapper>
          <DynamicBanner
            imgLink={homePageData.banner2.bannerImage?.data?.attributes?.url}
            title={homePageData.banner2.title}
            buttonText={homePageData.banner2.buttonText || ""}
            buttonLink={homePageData.banner2.buttonLink || ""}
          />
        </LazyWrapper>
        <LazyWrapper>
          <DynamicMap
            title={homePageData.mapTitle}
            promCards={dataPromCardsDeprecated}
          />
        </LazyWrapper>
        <FeedbackForm />
      </SectionsWrapper>
    </Wrap>
  );
};

export async function getStaticProps({ locale }: any) {
  const promCards = dataPromCards;
  const homePageData = await fetchData(GetHomePageDocument, { locale });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home-page"])),
      promCards,
      homePageData: homePageData.home?.data?.attributes,
    },
  };
}

const Wrap = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export default Home;

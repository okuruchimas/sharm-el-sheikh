import { REVALIDATE_TIME } from "../constants/page.constants";
import { useMemo } from "react";
import { useTranslation } from "next-i18next";
// components
import Head from "next/head";
import Main from "../components/sections/home/main";
import Loader from "../components/layout/loader";
import Promotions from "../components/sections/promotions";
import HomeNavMenu from "../components/sections/home/home-nav-menu";
import FeedbackForm from "../components/sections/home/feedback";
import SectionsWrapper from "../components/layout/sections-wrapper";
import LazyWrapper from "../components/layout/lazy-wrapper";
// utils
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { fetchData } from "../utils/fetchApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// types
import {
  GetAreasDocument,
  GetHomePageDocument,
  GetCategoriesDocument,
  GetCompaniesByFilterDocument,
  type AreaEntity,
  type CategoryEntity,
  type HomePageFragment,
  type CompanyPreviewFragment,
} from "../gql/graphql";

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

type Props = {
  areas: AreaEntity[];
  categories: CategoryEntity[];
  homePageData: HomePageFragment;
  initialPromotions: { attributes: CompanyPreviewFragment }[];
  totalInitialPromotions: number;
};

const Home = ({
  areas,
  categories,
  homePageData,
  initialPromotions,
  totalInitialPromotions,
}: Props) => {
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

  const areasMapped = useMemo(
    () =>
      areas.map((el) => ({
        key: el.attributes?.key || "",
        value: el.attributes?.value || "",
      })),
    [areas],
  );

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
          totalInitialCards={totalInitialPromotions}
          options={areasMapped}
          title={homePageData.promotionsTitle}
          initialPromotions={initialPromotions?.map((el) => el.attributes)}
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
            categories={[
              { key: allCategories, value: t("labels.all") },
              ...(categoriesMapped || []),
            ]}
          />
        </LazyWrapper>
        <HomeNavMenu menu={homePageData.homeNavMenu} />
        <FeedbackForm />
      </SectionsWrapper>
    </Wrap>
  );
};

export async function getStaticProps({ locale }: any) {
  // const { home } = await fetchData(GetHomePageDocument, { locale });
  const areasPromise = fetchData(GetAreasDocument, { locale });
  // const { categories } = await fetchData(GetCategoriesDocument, { locale });

  const companiesPromise = areasPromise.then(({ areas }) =>
    fetchData(GetCompaniesByFilterDocument, {
      locale,
      areaKey: areas?.data[0]?.attributes?.key,
      page: 1,
      pageSize: 3,
      discountFilter: { title: { ne: null } },
    }),
  );
  // const { companies } = await fetchData(GetCompaniesByFilterDocument, {
  //   locale,
  //   areaKey: areas?.data[0]?.attributes?.key,
  //   page: 1,
  //   pageSize: 3,
  //   discountFilter: { title: { ne: null } },
  // });

  const [{ home }, { areas }, { categories }, { companies }] =
    await Promise.all([
      fetchData(GetHomePageDocument, { locale }),
      areasPromise,
      fetchData(GetCategoriesDocument, { locale }),
      companiesPromise,
    ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home-page",
        "entertainers-tour-guides",
      ])),
      areas: areas?.data,
      categories: categories?.data,
      homePageData: home?.data?.attributes,
      initialPromotions: companies?.data,
      totalInitialPromotions: companies?.meta.pagination.total || 0,
    },
    revalidate: REVALIDATE_TIME,
  };
}

const Wrap = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export default Home;

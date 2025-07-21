import { REVALIDATE_TIME } from '../constants/page.constants';
import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';
// components
import Head from 'next/head';
import Main from '../components/sections/home/main';
import Loader from '../components/layout/loader';
import Promotions from '../components/sections/promotions';
import HomeNavMenu from '../components/sections/home/home-nav-menu';
import FeedbackForm from '../components/sections/home/feedback';
import SectionsWrapper from '../components/layout/sections-wrapper';
import LazyWrapper from '../components/layout/lazy-wrapper';
// utils
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { fetchData } from '../utils/fetchApi';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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
  GetAdvertisementsDocument,
  AdvertisementFragment,
} from '../gql/graphql';
import { getLayoutData } from '../utils/get-layout-data';
import { GetStaticPropsContext } from 'next';
import {
  BACKGROUND_GRADIENT,
  BACKGROUND_GRADIENT_MOBILE,
} from '../constants/images.constants';
import SectionWrapper from '../components/layout/section-wrapper';
import { useRouter } from 'next/router';
import MetaTags from '../components/layout/seo';

const DynamicBanner = dynamic(
  () => import('../components/sections/home/banner'),
  {
    loading: () => <Loader />,
  },
);

const DynamicAdvertisements = dynamic(
  () => import('../components/sections/advertisements/new/index'),
  {
    loading: () => <Loader />,
  },
);

const DynamicNecessaryLocations = dynamic(
  () => import('../components/layout/necessary-locations'),
  {
    ssr: true,
    loading: () => <Loader />,
  },
);

type Props = {
  areas: AreaEntity[];
  categories: CategoryEntity[];
  homePageData: HomePageFragment;
  initialPromotions: { attributes: CompanyPreviewFragment }[];
  advertisements: AdvertisementFragment[];
  totalInitialPromotions: number;
  allCompanies: { attributes: CompanyPreviewFragment }[];
};

const Home = ({
  areas,
  categories,
  allCompanies,
  homePageData,
  advertisements,
  initialPromotions,
  totalInitialPromotions,
}: Props) => {
  const { t } = useTranslation('common');
  const { push } = useRouter();

  const areasMapped = useMemo(
    () =>
      areas.map(el => ({
        key: el.attributes?.key || '',
        value: el.attributes?.value || '',
      })),
    [areas],
  );

  return (
    <Wrap id="/">
      <Head>
        <title>Sharm El Sheikh</title>
      </Head>

      <MetaTags
        title="Discover the Best of Sharm El Sheikh"
        description="Helping travelers find top places to eat, relax, and explore in Sharm El Sheikh."
        imgUrl="https://www.go-go.live/images/business-card.png"
        siteUrl="https://www.go-go.live"
      />
      <Main
        eventCards={homePageData.event_cards}
        eventCardsTitle={homePageData.eventCardsTitle}
        heroTitle={homePageData.heroTitle || ''}
      />
      <SectionsWrapper
        url={BACKGROUND_GRADIENT}
        mobUrl={BACKGROUND_GRADIENT_MOBILE}
      >
        <Promotions
          totalInitialCards={totalInitialPromotions}
          options={areasMapped}
          title={homePageData.promotionsTitle}
          initialPromotions={initialPromotions?.map(el => el.attributes)}
        />
        <LazyWrapper>
          <DynamicBanner
            imgLink={homePageData.banner1.bannerImage?.data?.attributes?.url}
            title={homePageData.banner1.title}
            buttonText={homePageData.banner1.buttonText || ''}
            buttonLink={homePageData.banner1.buttonLink || ''}
            isBottomContent
          />
        </LazyWrapper>
        <LazyWrapper minHeight={476}>
          <SectionWrapper
            title={t('text.newAds')}
            buttonText={t('buttons.viewMore')}
            onClick={() => push('/advertisements')}
          >
            <DynamicAdvertisements
              onElementClick={() => {}}
              advertisements={advertisements}
            />
          </SectionWrapper>
        </LazyWrapper>
        <LazyWrapper>
          <DynamicBanner
            imgLink={homePageData.banner2.bannerImage?.data?.attributes?.url}
            title={homePageData.banner2.title}
            buttonText={homePageData.banner2.buttonText || ''}
            buttonLink={homePageData.banner2.buttonLink || ''}
          />
        </LazyWrapper>
        <LazyWrapper>
          <DynamicNecessaryLocations
            title={homePageData.mapTitle}
            categories={categories}
            companies={allCompanies}
          />
        </LazyWrapper>
        <HomeNavMenu menu={homePageData.homeNavMenu} />
        <FeedbackForm />
      </SectionsWrapper>
    </Wrap>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const areasPromise = fetchData(GetAreasDocument, { locale });

  const companiesPromise = areasPromise.then(({ areas }) =>
    fetchData(GetCompaniesByFilterDocument, {
      locale,
      areaKey: areas?.data[0]?.attributes?.key,
      page: 1,
      pageSize: 3,
      discountFilter: { title: { ne: null } },
    }),
  );

  const layoutDataPromise = getLayoutData(locale!);

  const [
    { home },
    { areas },
    { categories },
    promotionsResult,
    { advertisements },
    { headerData, footerData },
    allCompaniesResult,
  ] = await Promise.all([
    fetchData(GetHomePageDocument, { locale }),
    areasPromise,
    fetchData(GetCategoriesDocument, { locale }),
    companiesPromise,
    fetchData(GetAdvertisementsDocument, {
      page: 1,
      pageSize: 10,
    }),
    layoutDataPromise,
    fetchData(GetCompaniesByFilterDocument, {
      locale,
      positionFilter: { not: null },
    }),
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'home-page',
        'entertainers-tour-guides',
      ])),
      areas: areas?.data,
      categories: categories?.data,
      homePageData: home?.data?.attributes,
      initialPromotions: promotionsResult.companies?.data,
      totalInitialPromotions:
        promotionsResult.companies?.meta.pagination.total || 0,
      allCompanies: allCompaniesResult.companies?.data,
      advertisements: advertisements?.data?.map(el => el.attributes),
      headerData,
      footerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

const Wrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export default Home;

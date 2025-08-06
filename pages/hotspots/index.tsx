import {
  type CategoryEntity,
  type EventCardEntity,
  type HotspotsPageFragment,
  type CompanyPreviewFragment,
  GetEventCardsDocument,
  GetCategoriesDocument,
  GetHotspotsPageDocument,
  GetCompaniesByFilterDocument,
} from '../../gql/graphql';
// components
import ClubsContainer from '../../components/sections/hotspots/clubs-container';
import EventsContainer from '../../components/sections/hotspots/events-container';
import SectionsWrapper from '../../components/layout/sections-wrapper';
import HotspotsBanner from '../../components/sections/hotspots/hotspots-banner';
import NecessaryLocations from '../../components/layout/necessary-locations';
// constants
import { CLUBS } from '../../constants/page-company-categories';
import { REVALIDATE_TIME } from '../../constants/page.constants';
// utils
import styled from '@emotion/styled';
import { fetchData } from '../../utils/fetchApi';
import { getCurrentDayAndTime } from '../../utils/formateDate';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getLayoutData } from '../../utils/get-layout-data';
import { GetStaticPropsContext } from 'next';
import {
  BACKGROUND_GRADIENT,
  BACKGROUND_GRADIENT_MOBILE,
} from '../../constants/images.constants';
import MetaTags from '../../components/layout/seo';
import AllCompanies from '../../components/sections/hotspots/companies';

type HotspotsPageProps = {
  totalEvents: number;
  categories: CategoryEntity[];
  pageData: HotspotsPageFragment;
  initialEvents: EventCardEntity[];
  totalClubs: number;
  initialClubs: { attributes: CompanyPreviewFragment }[];
  allCompanies: { attributes: CompanyPreviewFragment }[];
};

const HotspotsPage = ({
  pageData: { bottomBanner, eventsTitle, clubsTitle, clubsInfo, mapTitle },
  totalEvents,
  initialEvents,
  totalClubs,
  initialClubs,
  categories,
  allCompanies,
}: HotspotsPageProps) => (
  <Wrapper url={BACKGROUND_GRADIENT} mobUrl={BACKGROUND_GRADIENT_MOBILE}>
    <MetaTags
      title="Sharm El Sheikh Nightlife | Clubs, Bars & Events Tonight"
      description="Latest nightlife information in Sharm El Sheikh. Popular clubs, bars, upcoming events and parties. Find the best entertainment spots for your evening fun."
      imgUrl="https://www.go-go.live/images/business-card.png"
      siteUrl="https://www.go-go.live/hotspots"
    />
    <EventsContainer
      title={eventsTitle}
      initialEvents={initialEvents}
      totalItems={totalEvents}
    />
    <ClubsContainer
      title={clubsTitle}
      clubsInfo={clubsInfo}
      totalItems={totalClubs}
      initialClubs={initialClubs.map(el => el.attributes)}
    />
    <NecessaryLocations
      title={mapTitle || ''}
      categories={categories}
      companies={allCompanies}
    />
    {allCompanies ? (
      <AllCompanies
        categories={categories?.map(el => el.attributes)}
        companies={allCompanies.map(el => el.attributes)}
      />
    ) : null}

    {bottomBanner ? (
      <HotspotsBanner
        title={bottomBanner.title || ''}
        buttonText={bottomBanner.buttonText || ''}
        buttonLink={bottomBanner.buttonLink || ''}
        imgLink={bottomBanner.bannerImage?.data?.attributes?.url || ''}
        subtitle={bottomBanner.subtitle || ''}
      />
    ) : null}
  </Wrapper>
);

export default HotspotsPage;

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  paddingTop: '236px',

  [theme.breakpoints.mobile]: {
    paddingTop: '80px',
  },
}));

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const commonParams = {
    locale,
    page: 1,
    pageSize: 3,
  };
  const { dayOfWeek } = getCurrentDayAndTime();

  const layoutDataPromise = getLayoutData(locale!);
  const [
    { hotspotsPage },
    { eventCards },
    { companies },
    { categories },
    { headerData, footerData },
    allCompaniesResult,
  ] = await Promise.all([
    fetchData(GetHotspotsPageDocument, { locale }),
    fetchData(GetEventCardsDocument, commonParams),
    fetchData(GetCompaniesByFilterDocument, {
      ...commonParams,
      day: dayOfWeek,
      category: CLUBS,
    }),
    fetchData(GetCategoriesDocument, { locale }),
    layoutDataPromise,
    fetchData(GetCompaniesByFilterDocument, {
      locale,
      positionFilter: { not: null },
    }),
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      pageData: hotspotsPage?.data?.attributes,
      initialEvents: eventCards?.data,
      categories: categories?.data,
      totalEvents: eventCards?.meta.pagination.total || 0,
      initialClubs: companies?.data,
      totalClubs: companies?.meta.pagination.total || 0,
      allCompanies: allCompaniesResult.companies?.data,
      headerData,
      footerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

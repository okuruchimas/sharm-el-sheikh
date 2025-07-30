import TourGuidePage from '../../../entertainers-tour-guides/tour-and-guides/[slug]';
import { fetchData } from '../../../../utils/fetchApi';
import {
  GetTourGuidesSlugsDocument,
  GetTourOperatorByFiltersDocument,
  GetTourOperatorBySlugDocument,
} from '../../../../gql/graphql';
import { getLocalizedPaths } from '../../../../utils/get-loocalized-paths';
import { GetStaticPropsContext } from 'next';
import { getLayoutData } from '../../../../utils/get-layout-data';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { REVALIDATE_TIME } from '../../../../constants/page.constants';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const TourOperator = ({ tourOperator, similarSuggestions }: any) => {
  return (
    <TourGuidePage
      tourGuide={tourOperator}
      similarSuggestions={similarSuggestions}
      backRoute="/agents"
    />
  );
};

export default TourOperator;

export async function getStaticPaths() {
  const { tourGuides } = await fetchData(GetTourGuidesSlugsDocument);

  const paths = getLocalizedPaths(tourGuides);

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({
  params,
  locale,
}: GetStaticPropsContext) {
  if (!params || typeof params.slug !== 'string') {
    return { notFound: true };
  }

  const { slug } = params;

  const layoutDataPromise = getLayoutData(locale!);

  const tourGuidePromise = fetchData(GetTourOperatorBySlugDocument, {
    slug,
    locale,
  });

  const suggestionsPromise = fetchData(GetTourOperatorByFiltersDocument, {
    locale,
    page: 1,
    pageSize: 4,
    sort: ['averageRating:desc'],
    slugToExclude: slug,
  });

  const [
    { tourOperators },
    { tourOperators: suggestions },
    { footerData, headerData },
  ] = await Promise.all([
    tourGuidePromise,
    suggestionsPromise,
    layoutDataPromise,
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'entertainers-tour-guides',
        'common',
      ])),
      tourOperator: tourOperators?.data?.[0]?.attributes,
      similarSuggestions: suggestions?.data,
      footerData,
      headerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

import TourPersonPage from '../../../entertainers-tour-guides/tour-and-guides/[slug]';
import { fetchData } from '../../../../utils/fetchApi';
import {
  GetTourOperatorByFiltersDocument,
  GetTourOperatorBySlugDocument,
  GetTourOperatorSlugsDocument,
  TourOperatorFragment,
} from '../../../../gql/graphql';
import { getLocalizedPaths } from '../../../../utils/get-loocalized-paths';
import { GetStaticPropsContext } from 'next';
import { getLayoutData } from '../../../../utils/get-layout-data';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { REVALIDATE_TIME } from '../../../../constants/page.constants';

interface Props {
  tourOperator: TourOperatorFragment;
  similarSuggestions: TourOperatorFragment[];
}
const TourOperator = ({ tourOperator, similarSuggestions }: Props) => {
  return (
    <TourPersonPage
      person={tourOperator}
      similarSuggestions={similarSuggestions}
      backRoute="/agents"
    />
  );
};

export default TourOperator;

export async function getStaticPaths() {
  const { tourOperators } = await fetchData(GetTourOperatorSlugsDocument);

  const paths = getLocalizedPaths(tourOperators);

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

  const tourOperatorPromise = fetchData(GetTourOperatorBySlugDocument, {
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
    tourOperatorPromise,
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
      similarSuggestions: suggestions?.data?.map(el => el.attributes),
      footerData,
      headerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

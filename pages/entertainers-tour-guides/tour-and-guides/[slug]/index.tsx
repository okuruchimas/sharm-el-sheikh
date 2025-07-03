import {
  GetTourGuidesSlugsDocument,
  GetTourGuideBySlugDocument,
  GetTourGuidesByFiltersDocument,
  type TourGuideFragment,
  type TourPreviewFragment,
} from '../../../../gql/graphql';
import { toast, ToastContainer } from 'react-toastify';
// hooks
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
// components
import Modal from '../../../../components/layout/modal';
import { Title } from '../../../../components/layout/title';
import Reviews from '../../../../components/sections/company/reviews';
import TourPopup from '../../../../components/sections/entertainers-tour-guides/tour-and-guides/tour-popup';
import BackRoute from '../../../../components/sections/entertainers-tour-guides/children/back-route';
import GuideCard from '../../../../components/sections/entertainers-tour-guides/tour-and-guides/card';
import ReviewForm from '../../../../components/sections/company/review';
import { CardsWrap } from '../../../../components/sections/entertainers-tour-guides/children/cards-wrap';
import Placeholder from '../../../../components/sections/promotions/children/placeholder';
import SectionWrapper from '../../../../components/layout/section-wrapper';
import SectionsWrapper from '../../../../components/layout/sections-wrapper';
import WorkerInfoSection from '../../../../components/layout/worker-info';
// constants
import { REVALIDATE_TIME } from '../../../../constants/page.constants';
// utils
import styled from '@emotion/styled';
import { addComment } from '../../../../utils/add-comment';
import { fetchData } from '../../../../utils/fetchApi';
import { getLocalizedPaths } from '../../../../utils/get-loocalized-paths';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// styles
import 'react-toastify/dist/ReactToastify.css';
import type { MapCard } from '../../../../components/layout/map/children/types';
import UniversalCard from '../../../../components/layout/universal-card';
import { getLayoutData } from '../../../../utils/get-layout-data';
import { GetStaticPropsContext } from 'next';
import {
  BACKGROUND_GRADIENT,
  BACKGROUND_GRADIENT_MOBILE,
  DEFAULT_IMAGE,
} from '../../../../constants/images.constants';

interface TourGuidePageProps {
  tourGuide: TourGuideFragment;
  similarSuggestions: { attributes: TourGuideFragment }[];
}

const TourGuidePage = ({
  tourGuide: {
    name,
    slug,
    comments,
    languages,
    profileImg,
    description,
    socialLinks,
    averageRating,
    totalComments,
    tours,
  },
  similarSuggestions,
}: TourGuidePageProps) => {
  const [selectedTour, setSelectedTour] = useState<MapCard>();

  const { t } = useTranslation('entertainers-tour-guides');
  const { t: tCommon } = useTranslation('common');

  const categories = [
    { name: 'service', label: tCommon('reviewForm.categories.service') },
    { name: 'price', label: tCommon('reviewForm.categories.price') },
    { name: 'quality', label: tCommon('reviewForm.categories.programQuality') },
    { name: 'comm', label: tCommon('reviewForm.categories.communication') },
    { name: 'prof', label: tCommon('reviewForm.categories.professionalism') },
  ];

  const languagesMapped = languages?.data.map(el => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || '',
    alt: el.attributes?.value || '',
  }));

  const handleAddComment = async (
    rating: number,
    text: string,
    email: string,
  ) => {
    try {
      await addComment({
        slug,
        comment: { rating, text, email },
        collectionType: 'tour-guides',
      });
      toast.success(tCommon('toasts.feedbackSuccess'));
    } catch (error) {
      console.error('Error adding comment:', error);
      toast.error(tCommon('toasts.feedbackError'));
    }
  };

  const handlePopupClose = () => setSelectedTour(undefined);

  const handleTourClick =
    ({
      slug,
      name,
      location,
      images,
      averageRating,
      totalComments,
      position,
    }: TourPreviewFragment) =>
    () =>
      setSelectedTour({
        slug,
        title: name,
        subTitle: location || '',
        imageSrc: images?.data[0]?.attributes?.url || DEFAULT_IMAGE,
        imageAlt: images?.data[0]?.attributes?.alternativeText || '',
        averageRating,
        totalComments,
        position: {
          lat: position?.lat || 0,
          lng: position?.lng || 0,
        },
      });

  return (
    <>
      <Wrapper url={BACKGROUND_GRADIENT} mobUrl={BACKGROUND_GRADIENT_MOBILE}>
        <div style={{ width: '100%' }}>
          <BackRoute
            href={'/entertainers-tour-guides/tour-and-guides'}
            baseRoute={`${tCommon('text.entertainersTourGuides')} / `}
            subRoute={`${t('tabs.tourOperators')} / `}
            name={name}
          />
          <WorkerInfoSection
            imgSrs={profileImg.data?.attributes?.url || ''}
            name={name}
            languages={languagesMapped || []}
            description={description || ''}
            socialLinks={socialLinks}
            totalComments={totalComments}
            averageRating={averageRating}
          />
          {tours ? (
            <>
              <Title style={{ marginBottom: '24px' }}>
                {t('tourGuide.tours')}
              </Title>
              <CardsWrap>
                {tours?.data.map(el => (
                  <UniversalCard
                    key={el.attributes?.name}
                    title={el?.attributes?.name || ''}
                    price={el?.attributes?.price || ''}
                    place={el?.attributes?.location || ''}
                    groupSize={el.attributes?.groupSize}
                    duration={el?.attributes?.duration || ''}
                    imgSrc={el?.attributes?.images?.data?.[0]?.attributes?.url}
                    onClick={
                      el?.attributes
                        ? handleTourClick(el.attributes)
                        : undefined
                    }
                  />
                ))}
              </CardsWrap>
            </>
          ) : null}
        </div>
        <Reviews
          title={tCommon('text.reviews')}
          comments={comments?.data || []}
        />
        <ReviewForm
          title={t('tourGuide.reviewFormTitle')}
          categories={categories}
          handleAddComment={handleAddComment}
        />
        <SectionWrapper title={tCommon('text.similarSuggestions')}>
          {similarSuggestions.length ? (
            <SuggestionsWrapper>
              {similarSuggestions.map(el => (
                <GuideCard key={el.attributes.slug} tourGuide={el.attributes} />
              ))}
            </SuggestionsWrapper>
          ) : (
            <Placeholder />
          )}
        </SectionWrapper>
      </Wrapper>
      <ToastContainer />
      {selectedTour ? (
        <Modal isOpen={!!selectedTour?.slug} onClose={handlePopupClose}>
          <TourPopup tourPreview={selectedTour} onClose={handlePopupClose} />
        </Modal>
      ) : null}
    </>
  );
};

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  paddingTop: '236px',

  [theme.breakpoints.mobile]: {
    paddingTop: '80px',
  },
}));

const SuggestionsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '16px',

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: '1fr',
  },
}));

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

  const tourGuidePromise = fetchData(GetTourGuideBySlugDocument, {
    slug,
    locale,
  });
  const suggestionsPromise = fetchData(GetTourGuidesByFiltersDocument, {
    locale,
    page: 1,
    pageSize: 4,
    sort: ['averageRating:desc'],
    slugToExclude: slug,
  });
  const [
    { tourGuides },
    { tourGuides: suggestions },
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
      tourGuide: tourGuides?.data?.[0]?.attributes,
      similarSuggestions: suggestions?.data,
      footerData,
      headerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default TourGuidePage;

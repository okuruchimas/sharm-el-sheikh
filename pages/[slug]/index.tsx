import { PAGE_CATEGORIES } from '../../constants/page-company-categories';
import { REVALIDATE_TIME } from '../../constants/page.constants';
import {
  type CompanyFragment,
  type CompanyPreviewFragment,
  GetCompanyDocument,
  GetCompaniesSlugsDocument,
  GetCompaniesByFilterDocument,
} from '../../gql/graphql';
import { toast, ToastContainer } from 'react-toastify';
// hooks
import { useRouter } from 'next/router';
import useCompanyCard from '../../hooks/useCompanyCard';
import { useTranslation } from 'next-i18next';
// components
import Promo from '../../components/sections/company/promo';
import Banner from '../../components/sections/home/banner';
import Button from '../../components/layout/button';
import Reviews from '../../components/sections/company/reviews';
import Services from '../../components/sections/company/services';
import ReviewForm from '../../components/sections/company/review';
import Placeholder from '../../components/sections/promotions/children/placeholder';
import YouTubePlayer from '../../components/layout/player';
import SectionWrapper from '../../components/layout/section-wrapper';
import SectionsWrapper from '../../components/layout/sections-wrapper';
// utils
import styled from '@emotion/styled';
import { addComment } from '../../utils/add-comment';
import { fetchData } from '../../utils/fetchApi';
import { getLocalizedPaths } from '../../utils/get-loocalized-paths';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// styles
import 'react-toastify/dist/ReactToastify.css';
import { getLayoutData } from '../../utils/get-layout-data';
import { GetStaticPropsContext } from 'next';
import {
  BACKGROUND_GRADIENT,
  BACKGROUND_GRADIENT_MOBILE,
} from '../../constants/images.constants';
import EventCard from '../../components/sections/hotspots/events-container/children/event-card';
import { Pagination } from 'swiper/modules';
import { SwiperCardsWrapper } from '../../components/sections/entertainers-tour-guides/children/cards-wrap';
import useResponsive from '../../hooks/useResponsive';
import { SwiperSlide } from 'swiper/react';
import MetaTags from '../../components/layout/seo';

interface Props {
  card: CompanyFragment;
  similarSuggestions: { attributes: CompanyPreviewFragment }[];
}

const CompanyPage = ({
  card: {
    slug,
    title,
    images,
    position,
    discount,
    services,
    location,
    comments,
    pageData,
    schedule,
    description,
    averageRating,
    totalComments,
    event_cards,
  },
  similarSuggestions,
}: Props) => {
  const router = useRouter();
  const { t } = useTranslation('company-page');
  const { t: tCommon } = useTranslation('common');
  const { renderCard, renderDiscountPopup, handleOpenDiscount } =
    useCompanyCard();
  const { isMobile } = useResponsive();
  const slidesPerView = isMobile ? 1 : 2;

  const categories = [
    { name: 'service', label: tCommon('reviewForm.categories.service') },
    { name: 'price', label: tCommon('reviewForm.categories.price') },
    { name: 'food', label: tCommon('reviewForm.categories.food') },
    { name: 'clean', label: tCommon('reviewForm.categories.cleanliness') },
  ];

  const handleAddComment = async (
    rating: number,
    text: string,
    email: string,
  ) => {
    try {
      await addComment({
        slug,
        comment: { rating, text, email },
        collectionType: 'companies',
      });

      router.reload();
      console.log({ rating, text, email });
      toast.success(tCommon('toasts.feedbackSuccess'));
    } catch (error) {
      console.error('Error adding comment:', error);
      toast.error(tCommon('toasts.feedbackError'));
    }
  };
  const preview = {
    slug,
    title,
    images,
    schedule,
    location,
    discount,
    position,
    totalComments,
    averageRating,
  };

  return (
    <>
      <MetaTags
        title={title}
        description={description || ''}
        imgUrl={images?.data?.[0].attributes?.url || ''}
        siteUrl={`https://www.go-go.live/${slug}`}
      />
      <Wrap url={BACKGROUND_GRADIENT} mobUrl={BACKGROUND_GRADIENT_MOBILE}>
        <Promo
          totalComments={totalComments}
          averageRating={averageRating}
          discount={discount}
          images={images}
          title={title}
          position={position}
          location={location ?? ''}
          onOpenDiscount={handleOpenDiscount(preview)}
        />
        {pageData?.youTubeVideoId ? (
          <YouTubePlayer videoId={pageData.youTubeVideoId} />
        ) : null}
        {discount ? (
          <Banner
            title={t('toReceiveDiscount')}
            buttonText={t('openCard')}
            onClick={handleOpenDiscount(preview)}
          />
        ) : null}
        {description ? (
          <DescriptionSection>
            <span>{tCommon('labels.description')}</span>
            <p>{description}</p>
          </DescriptionSection>
        ) : null}
        {event_cards?.data?.length ? (
          <SectionWrapper title={tCommon('labels.events')}>
            <SwiperCardsWrapper
              modules={[Pagination]}
              slidesPerView={slidesPerView}
              spaceBetween={12}
              navigation={false}
              pagination={{
                clickable: true,
              }}
              loop
            >
              {event_cards.data.map(({ attributes }, index) => (
                <SwiperSlide key={index}>
                  <EventCard
                    key={attributes?.title}
                    logo={attributes?.image.data?.attributes?.url || ''}
                    date={attributes?.date || ''}
                    title={attributes?.title || ''}
                    price={attributes?.price || ''}
                    location={attributes?.location || ''}
                    onClick={() => {}}
                  />
                </SwiperSlide>
              ))}
            </SwiperCardsWrapper>
          </SectionWrapper>
        ) : null}
        {services?.data.length ? <Services services={services?.data} /> : null}
        <Reviews
          title={t('reviewsSectionTitle')}
          comments={comments?.data || []}
        />
        <ReviewForm
          title={tCommon('text.howRateEstablishment')}
          categories={categories}
          handleAddComment={handleAddComment}
        />
        <SectionWrapper title={tCommon('text.similarSuggestions')}>
          {similarSuggestions.length ? (
            <SuggestionsWrapper>
              {similarSuggestions.map(({ attributes }) =>
                attributes ? renderCard(attributes) : null,
              )}
            </SuggestionsWrapper>
          ) : (
            <Placeholder title={tCommon('noDiscounts')} />
          )}
        </SectionWrapper>
        <ContactSection>
          <span>
            {pageData?.contactText
              ? pageData?.contactText
              : `${t('getInTouchSection.title')} ${title}`}
          </span>
          <Button
            text={t('getInTouchSection.buttonText')}
            backgroundColor="white"
            onClick={() => router.push(pageData?.contactLink ?? '/')}
          />
        </ContactSection>
      </Wrap>
      <ToastContainer />
      {renderDiscountPopup()}
    </>
  );
};

const Wrap = styled(SectionsWrapper)(({ theme }) => ({
  minHeight: '100vh',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',

  [theme.breakpoints.mobile]: {
    paddingTop: '80px',
  },
}));

const ContactSection = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: 600,
  fontSize: theme.fontSize.fontS21,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
    gap: '44px',
  },
}));

const DescriptionSection = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '16px',

  span: {
    fontSize: theme.fontSize.fontS32,
    fontWeight: 700,
    lineHeight: 1.25,
    color: theme.colors.blue,
  },

  p: {
    fontSize: theme.fontSize.fontS21,
    lineHeight: 1.5,
    letterSpacing: '0.5px',
  },

  [theme.breakpoints.mobile]: {
    span: {
      fontSize: theme.fontSize.fontS24,
    },

    p: { fontSize: theme.fontSize.fontS14, lineHeight: 1.42 },
  },
}));

const SuggestionsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: '1fr',
  },
}));

export async function getStaticPaths() {
  const { companies } = await fetchData(GetCompaniesSlugsDocument, {
    category: PAGE_CATEGORIES,
  });

  const paths = getLocalizedPaths(companies);

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

  const { headerData, footerData } = await getLayoutData(locale!);
  const companyPromise = fetchData(GetCompanyDocument, {
    slug,
    locale,
  });

  const suggestionsPromise = companyPromise.then(({ companies }) => {
    const category =
      companies?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
        ?.key || '';

    return fetchData(GetCompaniesByFilterDocument, {
      locale,
      category: [category],
      page: 1,
      pageSize: 3,
      slugToExclude: slug,
    });
  });

  const [{ companies }, { companies: suggestions }] = await Promise.all([
    companyPromise,
    suggestionsPromise,
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['company-page', 'common'])),
      card: companies?.data[0]?.attributes || {},
      similarSuggestions: suggestions?.data,
      headerData,
      footerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default CompanyPage;

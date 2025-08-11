// components
import Rating from '../../../layout/rating';
import LocationLink from '../../../layout/location-link';
// utils
import styled from '@emotion/styled';
// types
import { Title } from '../../../layout/title';
import type { CompanyFragment } from '../../../../gql/graphql';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { SwiperCardsWrapper } from '../../entertainers-tour-guides/children/cards-wrap';

type PromoI = Pick<
  CompanyFragment,
  | 'images'
  | 'discount'
  | 'title'
  | 'position'
  | 'location'
  | 'totalComments'
  | 'averageRating'
> & {
  onOpenDiscount: () => void;
};

const Promo = ({
  images,
  title,
  location,
  position,
  totalComments,
  averageRating,
}: PromoI) => (
  <SectionWrapper>
    <ContentWrapper>
      <ImageWrapper>
        {images?.data.length <= 1 ? (
          <StyledImage
            src={images?.data?.[0].attributes?.url ?? ''}
            alt={images?.data?.[0].attributes?.alternativeText ?? ''}
            layout="fill"
            priority
          />
        ) : (
          <SwiperStyled
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={12}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            loop
          >
            {images?.data?.map((el, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={el.attributes?.url || ''}
                  alt={el.attributes?.alternativeText || ''}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: '16px' }}
                  className="photo"
                />
              </SwiperSlide>
            ))}
          </SwiperStyled>
        )}
      </ImageWrapper>
      <TopWrapper>
        <TitleStyled>{title}</TitleStyled>
        <RatingWrapper>
          <Rating points={averageRating || 0} users={totalComments || 0} />
        </RatingWrapper>
      </TopWrapper>
      <Location>
        <LocationLink
          text={location || '-'}
          position={position}
          iconSize="40px"
          iconSizeMobile="20px"
        />
      </Location>
    </ContentWrapper>
  </SectionWrapper>
);

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
  height: '100%',
  padding: '24px',
  backgroundColor: theme.colors.white,
  borderRadius: '30px',
  boxShadow: theme.shadows[0],

  [theme.breakpoints.mobile]: {
    gap: '16px',
    padding: '10px',
    borderRadius: '20px',
  },
}));

const SwiperStyled = styled(SwiperCardsWrapper)(({ theme }) => ({
  height: '616px',

  [theme.breakpoints.mobile]: {
    height: '242px',

    marginLeft: 0,
    minWidth: 'auto',
  },
}));

const SectionWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 280px)',
  margin: '122px 0 10px',

  [theme.breakpoints.mobile]: {
    height: '364px',
    margin: '12px 0 0',
  },
}));

const TopWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  [theme.breakpoints.mobile]: {
    flexDirection: 'column',
    gap: '8px',
  },
}));

const RatingWrapper = styled('div')(({ theme }) => ({
  span: { fontSize: theme.fontSize.fontS32 },

  '& .image-wrapper': {
    width: '33px',
    height: '33px',
  },

  [theme.breakpoints.mobile]: {
    span: { fontSize: theme.fontSize.fontS12 },

    '& .image-wrapper': {
      width: '16px',
      height: '16px',
    },
  },
}));

const TitleStyled = styled(Title)(({ theme }) => ({
  fontWeight: 700,
  paddingTop: 42,

  [theme.breakpoints.mobile]: {
    fontWeight: 600,
  },
}));

const Location = styled('div')(({ theme }) => ({
  maxWidth: 'max-content',

  '.icon-text': {
    fontWeight: 500,
    fontSize: theme.fontSize.fontS24,
    color: theme.colors.black,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS12,
      fontWeight: 400,
    },
  },
}));

const ImageWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '572px',
  width: '100%',
  minHeight: '198px',

  img: {
    borderRadius: '30px',
  },

  [theme.breakpoints.mobile]: {
    img: {
      borderRadius: '12px',
    },
  },
}));

const StyledImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default Promo;

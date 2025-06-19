import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import OfferCard from './card';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import useResponsive from '../../../../hooks/useResponsive';
import { SwiperCardsWrapper } from '../../entertainers-tour-guides/children/cards-wrap';
import { AdvertisementFragment } from '../../../../gql/graphql';
import Placeholder from '../../promotions/children/placeholder';
import { useTranslation } from 'next-i18next';

interface Props {
  advertisements?: AdvertisementFragment[];
  onElementClick: (ad: AdvertisementFragment) => void;
}

const Hot = ({ advertisements, onElementClick }: Props) => {
  const { isMobile } = useResponsive();
  const slidesPerView = isMobile ? 1 : 2;
  const { t } = useTranslation('agents');
  const { t: tAds } = useTranslation('advertisements');

  return (
    <Wrapper>
      <MarqueeWrapper>
        <TextTrack>
          {Array.from({ length: 22 }, (_, i) => (
            <TextItem key={i}>{tAds('hotOffers')}</TextItem>
          ))}
        </TextTrack>
      </MarqueeWrapper>

      {advertisements?.length ? (
        <CardsWrapper>
          <SwiperCardsWrapper
            modules={[Pagination]}
            slidesPerView={slidesPerView}
            spaceBetween={12}
            navigation={false}
            pagination={{ clickable: true }}
            loop
          >
            {advertisements.map((item, i) => (
              <SwiperSlide key={i}>
                <OfferCard {...item} onClick={() => onElementClick(item)} />
              </SwiperSlide>
            ))}
          </SwiperCardsWrapper>
        </CardsWrapper>
      ) : (
        <Placeholder title={t('noAddsFound')} />
      )}
    </Wrapper>
  );
};

export default Hot;

const scrollText = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Wrapper = styled.div({
  position: 'relative',
  width: '100%',
});

const CardsWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  paddingTop: 64,
  gap: 16,
  [theme.breakpoints.mobile]: {
    // maxHeight: 556,
    paddingTop: 72,
  },
}));

const MarqueeWrapper = styled.div(({ theme }) => ({
  position: 'absolute',
  left: -100,
  backgroundColor: '#ffc800',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100vw',
  height: 40,
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.mobile]: {
    left: -16,
  },
}));

const TextTrack = styled.div({
  display: 'inline-flex',
  animation: `${scrollText} 30s linear infinite`,
});

const TextItem = styled.div({
  display: 'inline-block',
  fontWeight: 'bold',
  fontSize: 'clamp(14px, 2.5vw, 22px)',
  color: 'black',
  padding: '0 2vw',
  whiteSpace: 'nowrap',
});

import React from 'react';
import { Title } from '../../../../layout/title';
import { SwiperCardsWrapper } from '../../children/cards-wrap';
import UniversalCard from '../../../../layout/universal-card';
import { useTranslation } from 'next-i18next';
import { Tour, TourPreviewFragment } from '../../../../../gql/graphql';
import { Pagination } from 'swiper/modules';
import useResponsive from '../../../../../hooks/useResponsive';
import { SwiperSlide } from 'swiper/react';

interface Props {
  tours: Tour[];
  onClick?: ({
    slug,
    name,
    location,
    images,
    averageRating,
    totalComments,
    position,
  }: TourPreviewFragment) => void;
}
const Tours = ({ tours, onClick }: Props) => {
  const { t } = useTranslation('entertainers-tour-guides');
  const { slidesPerView } = useResponsive();

  return (
    <div>
      <Title style={{ marginBottom: '24px' }}>{t('tourGuide.tours')}</Title>

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
        {tours.map(el => (
          <SwiperSlide key={el?.name}>
            <UniversalCard
              title={el?.name || ''}
              price={el?.price || ''}
              place={el?.location || ''}
              groupSize={el?.groupSize}
              duration={el?.duration || ''}
              imgSrc={el?.images?.data?.[0]?.attributes?.url}
              onClick={
                onClick
                  ? () =>
                      onClick({
                        slug: el.slug,
                        name: el?.name,
                        location: el?.location,
                        price: el?.price,
                        duration: el?.duration,
                        groupSize: el?.groupSize,
                        averageRating: el?.averageRating,
                        totalComments: el?.totalComments,
                      })
                  : undefined
              }
            />
          </SwiperSlide>
        ))}
      </SwiperCardsWrapper>
    </div>
  );
};

export default Tours;

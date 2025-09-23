import React, { Dispatch, SetStateAction } from 'react';
import { Title } from '../../../../layout/title';
import { SwiperCardsWrapper } from '../../children/cards-wrap';
import { useTranslation } from 'next-i18next';
import { TourOperatorDirection } from '../../../../../gql/graphql';
import { Pagination } from 'swiper/modules';
import useResponsive from '../../../../../hooks/useResponsive';
import { SwiperSlide } from 'swiper/react';
import UniversalCard from '../../../../layout/universal-card';

interface Props {
  directions: TourOperatorDirection[];
  onClick: Dispatch<SetStateAction<TourOperatorDirection | undefined>>;
}
const Directions = ({ directions, onClick }: Props) => {
  const { t } = useTranslation('entertainers-tour-guides');
  const { slidesPerView } = useResponsive();

  return (
    <div>
      <Title style={{ marginBottom: '24px' }}>
        {t('tourGuide.destinations')}
      </Title>

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
        {directions.map(el => (
          <SwiperSlide key={el?.title}>
            <UniversalCard
              title={el?.title || ''}
              price={el?.price || ''}
              place={el?.location || ''}
              imgSrc={el?.media?.data?.[0]?.attributes?.url}
              description={el?.description || ''}
              type={el?.type || ''}
              onClick={() => onClick(el)}
            />
          </SwiperSlide>
        ))}
      </SwiperCardsWrapper>
    </div>
  );
};

export default Directions;

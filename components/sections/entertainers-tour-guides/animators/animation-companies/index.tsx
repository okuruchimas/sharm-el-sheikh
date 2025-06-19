// hooks
import { useTranslation } from 'next-i18next';
// components
import { Title } from '../../../../layout/title';
import AnimationCompanyCard from '../animation-company-card';
// utils
import styled from '@emotion/styled';
// types
import type { AnimationCompanyPreviewFragment } from '../../../../../gql/graphql';
import type { Dispatch } from 'react';
import useResponsive from '../../../../../hooks/useResponsive';
import { Pagination } from 'swiper/modules';
import { SwiperCardsWrapper } from '../../children/cards-wrap';
import { SwiperSlide } from 'swiper/react';
import { DEFAULT_IMAGE } from '../../../../../constants/images.constants';

type AnimationCompaniesProps = {
  companies: AnimationCompanyPreviewFragment[];
  setSelectedCompany: Dispatch<AnimationCompanyPreviewFragment | undefined>;
};

const AnimationCompanies = ({
  companies,
  setSelectedCompany,
}: AnimationCompaniesProps) => {
  const { t } = useTranslation('entertainers-tour-guides');
  const { slidesPerView } = useResponsive();

  const handleCardClick = (data: AnimationCompanyPreviewFragment) => () => {
    setSelectedCompany(data);
  };

  return (
    <Wrapper>
      <Title>{t('animationCompanies')}</Title>
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
        {companies.map((el, index) => (
          <SwiperSlide key={index}>
            <AnimationCompanyCard
              key={el.name}
              imgSrc={el.image?.data?.attributes?.url || DEFAULT_IMAGE}
              title={el.name}
              averageRating={el.averageRating || 0}
              totalComments={el.totalComments || 0}
              onClick={handleCardClick(el)}
            />
          </SwiperSlide>
        ))}
      </SwiperCardsWrapper>
    </Wrapper>
  );
};

export default AnimationCompanies;

const Wrapper = styled('div')(({ theme }) => ({
  margin: '80px 0 0 ',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  width: '100%',
  [theme.breakpoints.mobile]: {
    gap: 24,
  },
}));

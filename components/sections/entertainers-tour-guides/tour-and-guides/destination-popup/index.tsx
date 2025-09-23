import React from 'react';
import Image from 'next/image';
import TextAndIcon from '../../../../layout/text-and-icon';
import { SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import useResponsive from '../../../../../hooks/useResponsive';
import { Name } from '../../../../layout/name-and-rating';
import { Promotion } from '../../../promotions/children/swiper';
import { TourOperatorDirection } from '../../../../../gql/graphql';
import { Section } from '../tour-popup/full-data';
import { Text } from '../../../../layout/event-popup';
import Button from '../../../../layout/button';
import { ButtonWrap } from '../../../advertisements/children/adv-form';
import { useTranslation } from 'next-i18next';
import { Pagination } from 'swiper/modules';
import { SwiperCardsWrapper } from '../../children/cards-wrap';

interface Props {
  direction: TourOperatorDirection;
  onClose: () => void;
}
const DestinationPopUp = ({
  direction: { media, type, title, price, description, location, highlights },
  onClose,
}: Props) => {
  const { t: tCommon } = useTranslation('common');
  // const { push } = useRouter();

  const { slidesPerView } = useResponsive();

  // const handleClick = () => {
  //   if (phoneNumber && window) {
  //     return (window.location.href = 'tel:+380931234567');
  //   }
  // };
  return (
    <Wrapper>
      <SwiperStyled
        modules={[Pagination]}
        slidesPerView={slidesPerView}
        spaceBetween={12}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        loop
      >
        {media?.data?.length ? (
          media?.data.map((el, index) => (
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
          ))
        ) : (
          <SwiperSlide>
            <Image
              src={media?.data[0].attributes?.url || ''}
              alt={media?.data[0].attributes?.alternativeText || ''}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: '16px' }}
              className="photo"
            />
          </SwiperSlide>
        )}
      </SwiperStyled>
      <RowWrap>
        <Name>{title}</Name> <Type>{type}</Type>
      </RowWrap>
      <RowWrap>
        <TextAndIcon
          src={'/icons/cash.svg'}
          text={price || ''}
          fontSize="21px"
          fontSizeMobile="16px"
          iconSize="36px"
          iconSizeMobile="30px"
        />
        <TextAndIcon
          src={'/icons/location-marker.svg'}
          text={location || ''}
          fontSize="21px"
          fontSizeMobile="16px"
          iconSize="36px"
          iconSizeMobile="30px"
        />
      </RowWrap>
      <Section>
        <h2>{tCommon('text.about')}</h2>
        <Text>{description}</Text>
      </Section>
      <Section>
        <h2>{tCommon('text.about')}</h2>

        <ul>{highlights?.map(el => <li key={el?.id}>{el?.value}</li>)}</ul>
      </Section>
      <ButtonWrap>
        <Button
          text={'Back'}
          backgroundColor="white"
          color="black"
          onClick={onClose}
        />
        <Button backgroundColor="yellow" color="black" text={'Contact'} />
      </ButtonWrap>
    </Wrapper>
  );
};

export default DestinationPopUp;

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '24px',
  position: 'relative',

  [theme.breakpoints.mobile]: {
    gap: '16px',
  },
}));

const SwiperStyled = styled(SwiperCardsWrapper)({
  width: '100%',
  height: '330px',
});

const RowWrap = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Type = styled(Promotion)({
  position: 'unset',
});

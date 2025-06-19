import TextAndIcon from '../../../layout/text-and-icon';
import { Title } from '../../../layout/title';
import Image from 'next/image';
import styled from '@emotion/styled';
import { formatDate } from '../../../../utils/formateDate';
import FullAdd from './full-add';
import { useState } from 'react';
import { type DeliveryFragment } from '../../../../gql/graphql';
import { ContactRow } from './seller-info';
import { DEFAULT_IMAGE } from '../../../../constants/images.constants';

interface Props {
  isEven: boolean;
  add: DeliveryFragment;
}
const ShortAdd = ({ isEven, add }: Props) => {
  const [isFull, setIsFull] = useState(false);
  const { title, price, location, createdAt, images, ...rest } = add;

  const date = formatDate(createdAt);

  const image = images?.data[0]?.attributes;
  const imageUrl = image?.url || DEFAULT_IMAGE;
  const imageAlt = image?.alternativeText || 'photo of add';

  const handlePopupClick = () => setIsFull(prev => !prev);

  return (
    <Wrapper isEven={isEven}>
      <Content onClick={handlePopupClick}>
        <ImageStyled
          even={isEven.toString()}
          width={240}
          height={210}
          src={imageUrl}
          alt={imageAlt}
        />
        <Info>
          <TitleStyled as="h3">{title}</TitleStyled>
          <FlexContainer>
            <TextAndIcon
              src="/icons/promotions-section/location.svg"
              text={location}
              iconSize="30px"
              iconSizeMobile="30px"
              fontSize="21px"
              fontSizeMobile="18px"
            />
            <TextAndIcon
              src="/icons/cash.svg"
              text={price}
              iconSize="30px"
              iconSizeMobile="30px"
              fontSize="21px"
              fontSizeMobile="18px"
            />
            <TextAndIcon
              src="/icons/time.svg"
              text={date}
              iconSize="30px"
              iconSizeMobile="30px"
              fontSize="21px"
              fontSizeMobile="18px"
            />
          </FlexContainer>
          <ContactRow email={add.email} mobile={add.mobile} />
        </Info>
      </Content>

      <FullAdd
        title={title}
        price={price}
        location={location}
        date={date}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        isOpen={isFull}
        otherAddInfo={rest}
        onClose={handlePopupClick}
      />
    </Wrapper>
  );
};

const Wrapper = styled('div')<{ isEven: boolean }>(({ theme, isEven }) => ({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid',
  borderColor: theme.colors.blue5,
  borderRadius: '12px',
  borderTopLeftRadius: isEven ? '0' : '12px',
  borderTopRightRadius: isEven ? '12px' : '0',
  width: '100%',
  maxWidth: 'calc(50% - 40px)',
  backgroundColor: 'rgba(41, 169, 194, 0.06)',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  [theme.breakpoints.mobile]: {
    maxWidth: '100%',
  },
}));

export const FlexContainer = styled('div')<{ gap?: string }>(({ gap = 8 }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: gap,

  '.text-and-icon': {
    width: 'max-content',
  },
}));

const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  cursor: 'pointer',

  img: {
    objectFit: 'cover',
  },

  [theme.breakpoints.mobile]: {
    flexDirection: 'column',
  },
}));

const ImageStyled = styled(Image)<{ even: string }>(({ theme, even }) => ({
  borderBottomLeftRadius: '12px',
  borderTopLeftRadius: even === 'true' ? '' : '12px',
  borderTopRightRadius: even === 'true' ? '12px' : '',

  [theme.breakpoints.mobile]: {
    borderBottomLeftRadius: 'unset',
  },
}));

const Info = styled('div')({
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const TitleStyled = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
}));

export default ShortAdd;

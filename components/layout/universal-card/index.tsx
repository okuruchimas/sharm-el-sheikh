// components
import Image from 'next/image';
// utils
import styled from '@emotion/styled';
import TextAndIcon from '../text-and-icon';

type PromCardProps = {
  title: string;
  price: string;
  place: string;
  imgSrc: string;
  duration: string;
  groupSize?: string;
  onClick?: () => void;
};
const UniversalCard = ({
  price,
  title,
  place,
  imgSrc,
  duration,
  groupSize,
  onClick,
}: PromCardProps) => {
  return (
    <Wrap onClick={onClick}>
      <ImgWrapper>
        <Image
          src={imgSrc || '/images/background/background-prom.svg'}
          alt="placeholder"
          layout="fill"
        />
      </ImgWrapper>
      <DownWrap>
        <CardTitle>{title}</CardTitle>
        <Down>
          <TextAndIcon
            fontSize="18px"
            iconSize="30px"
            src="/icons/time.svg"
            text={duration || ''}
          />
          <TextAndIcon
            fontSize="18px"
            iconSize="30px"
            src="/icons/cash.svg"
            text={price || ''}
          />
          <TextAndIcon
            fontSize="18px"
            iconSize="30px"
            src="/icons/promotions-section/location.svg"
            text={place || ''}
          />
          {groupSize ? (
            <TextAndIcon
              fontSize="18px"
              iconSize="30px"
              src="/icons/team.svg"
              text={groupSize}
            />
          ) : null}
        </Down>
      </DownWrap>
    </Wrap>
  );
};

const CardTitle = styled('h3')(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  color: theme.colors.blue,
  margin: '0',

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },

  '@media (max-width: 1250px)': {
    fontSize: theme.fontSize.fontS20,
    lineHeight: 1,
  },
}));

const Wrap = styled('div')(({ theme }) => ({
  height: '420px',
  boxShadow: theme.shadows[0],
  backgroundColor: theme.colors.white,
  borderRadius: '16px',
  minWidth: '404px',
  border: `1px solid ${theme.colors.blue5}`,

  [theme.breakpoints.mobile]: {
    height: '364px',
    minWidth: '344px',
  },
}));

const ImgWrapper = styled('div')({
  height: '60%',
  width: '100%',
  borderRadius: '16px 16px 0 0',
  position: 'relative',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },
});

const DownWrap = styled('div')(({ theme }) => ({
  height: '40%',
  borderRadius: '0 0 16px 16px',
  backgroundColor: theme.colors.blue4,
  borderTopStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '8px',
  padding: '24px 16px',
  overflow: 'hidden',

  [theme.breakpoints.mobile]: {
    padding: '12px',
    gap: '4px',

    img: {
      alignSelf: 'end',
    },
  },
}));

const Down = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
});

export default UniversalCard;

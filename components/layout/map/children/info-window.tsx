// components
import Image from 'next/image';
import Rating from '../../../layout/rating';
// utils
import styled from '@emotion/styled';
// types
import type { MapCard } from './types';
import type { KeyboardEvent } from 'react';

type InfoWindowProps = {
  location: MapCard;
  onClick: () => void;
};

const InfoWindow = ({ location, onClick }: InfoWindowProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && onClick) {
      onClick();
    }
  };

  return (
    <InfoWindowContent onClick={onClick} onKeyDown={handleKeyDown} tabIndex={0}>
      <Image
        src={location.imageSrc}
        alt={location.imageAlt}
        width={172}
        height={113}
        objectFit="cover"
      />
      <DetailsWrapper>
        <NameRatingWrapper>
          <Name>{location.title}</Name>
          <RatingWrapper>
            <Rating
              points={location.averageRating}
              users={location.totalComments}
            />
          </RatingWrapper>
        </NameRatingWrapper>
        <LocationWrapper>
          <LocIcon
            src="/icons/promotions-section/location.svg"
            alt="location-icon"
          />
          <LocationText>{location.subTitle}</LocationText>
        </LocationWrapper>
      </DetailsWrapper>
    </InfoWindowContent>
  );
};

const InfoWindowContent = styled('div')(({ theme }) => ({
  maxWidth: '172px',
  height: '190px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  scrollbarWidth: 'none',
  cursor: 'pointer',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  borderRadius: '8px',
  boxShadow: `1px 1px 16px ${theme.colors.black}, 0px -4px 5px -3px inset ${theme.colors.grey}`,
  backgroundColor: theme.colors.white3,

  [theme.breakpoints.mobile]: {
    borderRadius: '12px',
    maxWidth: '152px',
  },
}));

const DetailsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 8px',
  justifyContent: 'space-between',
  gap: '12px',

  [theme.breakpoints.mobile]: {
    gap: '4px',
    padding: '4px 8px',
  },
}));

const NameRatingWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',

  [theme.breakpoints.mobile]: {
    flexDirection: 'column',
    gap: '4px',
  },
}));

const Name = styled('div')(({ theme }) => ({
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS14,
  fontWeight: 600,
  letterSpacing: '0.1px',
}));

const LocationWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  gap: '4px',
});

const LocIcon = styled('img')({
  height: '14px',
  width: '14px',
});

const LocationText = styled('span')(({ theme }) => ({
  fontSize: theme.fontSize.fontS10,
  color: theme.colors.black1,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

const RatingWrapper = styled('div')(({ theme }) => ({
  span: { fontSize: theme.fontSize.fontS10 },

  [theme.breakpoints.mobile]: {
    span: { fontSize: theme.fontSize.fontS12 },
  },

  '& .image-wrapper': {
    width: '12px',
    height: '12px',
  },
}));

export default InfoWindow;

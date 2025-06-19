import 'swiper/css';
import 'swiper/css/pagination';
import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const CardsWrap = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '16px',
  width: '100%',
  marginBottom: '24px',

  [theme.breakpoints.desktopM]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  [theme.breakpoints.desktopS]: {
    gridTemplateColumns: '1fr 1fr',
  },

  [theme.breakpoints.mobileS]: {
    gridTemplateColumns: '1fr',
  },
}));

export const SwiperCardsWrapper = styled(Swiper)(({ theme }) => ({
  width: '100%',
  paddingBottom: 44,

  [theme.breakpoints.mobile]: {
    marginLeft: 0,
    minWidth: 346,
  },

  '.swiper-wrapper': {
    alignItems: 'center',
  },

  '.swiper': {
    [theme.breakpoints.mobile]: {},
  },

  '.swiper-slide': {
    padding: '0 2px',

    [theme.breakpoints.mobile]: {},
  },

  '.swiper-pagination-bullets': {
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    gap: 6,
  },

  '.swiper-pagination-bullet': {
    width: 12,
    height: 12,
    background: theme.colors.white,
    borderRadius: '50%',
    border: '1px solid',
    borderColor: theme.colors.yellow,
    opacity: 1,
    transition: 'background 0.3s ease',
  },

  '.swiper-pagination-bullet-active': {
    background: theme.colors.yellow,
  },
}));

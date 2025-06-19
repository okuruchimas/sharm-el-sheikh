// components
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const moveBackground = keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(-11%); }
    100% { transform: translateX(0); }
`;
export const BannerWrap = styled('div')<{ bg?: string }>(({ theme, bg }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '16px',
  backgroundColor: bg ? theme.colors[bg] : '',
  width: '100%',
  minHeight: '370px',
  display: 'flex',
  alignItems: 'end',

  [theme.breakpoints.mobile]: {
    flexDirection: 'column',
    minHeight: '300px',
  },
}));

export const BannerTitle = styled('h2')(({ theme }) => ({
  fontSize: theme.fontSize.fontS32,
  fontWeight: 700,
  marginBottom: '12px',

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
    marginBottom: 0,
    paddingTop: 16,
  },
}));

export const BannerSubTitle = styled('p')(({ theme }) => ({
  fontWeight: '400',
  fontSize: theme.fontSize.fontS18,
  zIndex: 1,
  color: theme.colors.white,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

export const BannerBackground = styled('div', {
  shouldForwardProp: prop => prop !== 'imgLink',
})<{ imgLink?: string }>(({ imgLink }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '113%',
  backgroundImage: `url(${imgLink})`,
  backgroundSize: 'cover',
  backgroundPosition: '0 50%',
  animation: `${moveBackground} 20s linear infinite`,
}));

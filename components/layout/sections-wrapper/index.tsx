import styled from '@emotion/styled';

const SectionsWrapper = styled('div', {
  shouldForwardProp: prop => !['url', 'mobUrl'].includes(prop),
})<{ url: string; mobUrl: string }>(({ theme, url, mobUrl }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  padding: '80px 100px',
  gap: '80px',
  backgroundImage: `url("${url}")`,
  backgroundSize: 'cover',

  [theme.breakpoints.mobile]: {
    padding: '32px 16px',
    gap: '32px',
    backgroundImage: `url("${mobUrl}")`,
  },
}));

export default SectionsWrapper;

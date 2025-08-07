import type { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '235px 100px 80px',
  backgroundImage: theme.backgrounds.guides,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  [theme.breakpoints.mobile]: {
    padding: '110px 16px 32px',
    backgroundImage: theme.backgrounds.guidesMob,
  },
}));
export default Container;

import { useTranslation } from 'next-i18next';
import type { ReactNode } from 'react';
import { Title } from '../../../layout/title';
import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  const { t } = useTranslation('entertainers-tour-guides');

  return (
    <Wrap>
      <StyledTitle>{t('pageTitle')}</StyledTitle>
      {children}
    </Wrap>
  );
};

const StyledTitle = styled(Title)(({ theme }) => ({
  marginBottom: 40,

  [theme.breakpoints.mobile]: {
    marginBottom: 24,
  },
}));

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

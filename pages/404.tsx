import { useTranslation } from 'next-i18next';
// components
import Image from '../components/layout/image';
// utils
import styled from '@emotion/styled';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getLayoutData } from '../utils/get-layout-data';
import { GetStaticPropsContext } from 'next';
import { DEFAULT_IMAGE } from '../constants/images.constants';

const NotFoundPage = () => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Image
        width="300px"
        height="120px"
        alt="placeholder image"
        src={DEFAULT_IMAGE}
        priority
      />
      <h1>{t('404')}</h1>
    </Wrapper>
  );
};
export default NotFoundPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { headerData, footerData } = await getLayoutData(locale!);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'entertainers-tour-guides',
      ])),
      headerData,
      footerData,
    },
  };
}

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',

  height: 'calc(100vh - 55px)',

  h1: {
    color: theme.colors.blue,
    textAlign: 'center',
  },
}));

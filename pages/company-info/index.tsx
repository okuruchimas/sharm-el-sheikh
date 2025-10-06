import { GetStaticPropsContext } from 'next';
import { getLayoutData } from '../../utils/get-layout-data';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { REVALIDATE_TIME } from '../../constants/page.constants';
import styled from '@emotion/styled';
import MainDescription from '../../components/sections/company-info/description';
import Info from '../../components/sections/company-info/info';
import Pay from '../../components/sections/company-info/pay';
import Questions from '../../components/sections/company-info/questions';
import Documents from '../../components/sections/company-info/documents';
import Team from '../../components/sections/company-info/team';
import AdditionalInfo from '../../components/sections/company-info/additional-info';
import SectionsWrapper from '../../components/layout/sections-wrapper';
import {
  BACKGROUND_GRADIENT,
  BACKGROUND_GRADIENT_MOBILE,
} from '../../constants/images.constants';

const CompanyInfo = () => {
  return (
    <Wrap url={BACKGROUND_GRADIENT} mobUrl={BACKGROUND_GRADIENT_MOBILE}>
      <MainDescription />
      <Pay />
      <Questions />
      <Info />
      <Documents />
      <Team />
      <AdditionalInfo />
    </Wrap>
  );
};

export default CompanyInfo;

const Wrap = styled(SectionsWrapper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '236px',

  [theme.breakpoints.mobile]: {
    paddingTop: '80px',
  },
}));

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const layoutDataPromise = getLayoutData(locale!);
  const [{ headerData, footerData }] = await Promise.all([layoutDataPromise]);

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      headerData,
      footerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

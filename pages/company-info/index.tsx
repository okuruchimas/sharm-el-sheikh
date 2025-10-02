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

const CompanyInfo = () => {
  return (
    <Wrap>
      <MainDescription />
      <Info />
      <Pay />
      <Questions />
      <Documents />
      <Team />
      <AdditionalInfo />
    </Wrap>
  );
};

export default CompanyInfo;

const Wrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

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

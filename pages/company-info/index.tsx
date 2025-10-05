import {
  type CompanyInfoPageFragment,
  GetCompanyInfoPageDocument,
} from '../../gql/graphql';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { REVALIDATE_TIME } from '../../constants/page.constants';
// components
import Pay from '../../components/sections/company-info/pay';
import Info from '../../components/sections/company-info/info';
import Team from '../../components/sections/company-info/team';
import Questions from '../../components/sections/company-info/questions';
import Documents from '../../components/sections/company-info/documents';
import AdditionalInfo from '../../components/sections/company-info/additional-info';
import MainDescription from '../../components/sections/company-info/description';
// utils
import styled from '@emotion/styled';
import { fetchData } from '../../utils/fetchApi';
import { getLayoutData } from '../../utils/get-layout-data';

type Props = { pageData: CompanyInfoPageFragment };

const CompanyInfo = ({ pageData }: Props) => {
  console.log(pageData);

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

  const [{ headerData, footerData }, { companyInfoPage }] = await Promise.all([
    layoutDataPromise,
    fetchData(GetCompanyInfoPageDocument, { locale }),
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      headerData,
      footerData,
      pageData: companyInfoPage?.data?.attributes,
    },
    revalidate: REVALIDATE_TIME,
  };
}

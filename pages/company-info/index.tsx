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
import SectionsWrapper from '../../components/layout/sections-wrapper';
import {
  BACKGROUND_GRADIENT,
  BACKGROUND_GRADIENT_MOBILE,
} from '../../constants/images.constants';
import MainDescription from '../../components/sections/company-info/description';
// utils
import styled from '@emotion/styled';
import { fetchData } from '../../utils/fetchApi';
import { getLayoutData } from '../../utils/get-layout-data';

type TeamMember = NonNullable<
  NonNullable<CompanyInfoPageFragment['team']>[number]
>;
type Props = { pageData: CompanyInfoPageFragment };

const CompanyInfo = ({ pageData }: Props) => {
  const {
    pageTitle,
    companyDescription,
    image,
    paymentFormTitle,
    paymentFormDescription,
    submitPaymentButton,
    questionsTitle,
    questions,
    documents,
    team,
  } = pageData;
  console.log(pageData, 'pageData');
  return (
    <Wrap url={BACKGROUND_GRADIENT} mobUrl={BACKGROUND_GRADIENT_MOBILE}>
      <MainDescription
        title={pageTitle}
        description={companyDescription}
        src={image.data?.attributes?.url || ''}
        alt={image.data?.attributes?.alternativeText || ''}
      />
      <Pay
        title={paymentFormTitle}
        formDescription={paymentFormDescription}
        submitButton={submitPaymentButton || ''}
      />
      <Questions title={questionsTitle} questions={questions} />
      <Info />
      {documents ? (
        <Documents
          documents={documents.data.map(
            ({ attributes }) => attributes?.url || '',
          )}
        />
      ) : null}
      {team ? (
        <Team team={(team ?? []).filter((m): m is TeamMember => m != null)} />
      ) : null}
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

  '.section-title': {
    fontWeight: 700,
  },

  [theme.breakpoints.mobile]: {
    paddingTop: '80px',
  },
}));

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

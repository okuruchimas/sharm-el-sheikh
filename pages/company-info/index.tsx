import {
  type CompanyInfoPageFragment,
  GetCompanyInfoPageDocument,
} from '../../gql/graphql';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { REVALIDATE_TIME } from '../../constants/page.constants';
// components
import Pay from '../../components/sections/company-info/pay';
import Info, {
  type Location,
} from '../../components/sections/company-info/info';
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
    companyName,
    contactPerson,
    phoneNumber,
    footerLocation,
    footerText,
    companyInfoTitle,
    locations,
    registrationNum,
    dateOfIssuance,
    taxpayerIdNum,
  } = pageData;

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
      <Info
        title={companyInfoTitle}
        phoneNumber={phoneNumber}
        contactPerson={contactPerson}
        locations={(locations ?? []).filter((m): m is Location => m != null)}
        registrationNum={registrationNum}
        dateOfIssuance={dateOfIssuance}
        taxpayerIdNum={taxpayerIdNum}
      />
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
      <AdditionalInfo
        title={companyName}
        contactPerson={contactPerson}
        footerLocation={footerLocation}
        footerText={footerText}
        phoneNumber={phoneNumber}
      />
    </Wrap>
  );
};

export default CompanyInfo;

const Wrap = styled(SectionsWrapper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '236px',
  paddingBottom: 40,

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
      ...(await serverSideTranslations(locale!, [
        'common',
        'company-info-page',
      ])),
      headerData,
      footerData,
      pageData: companyInfoPage?.data?.attributes,
    },
    revalidate: REVALIDATE_TIME,
  };
}

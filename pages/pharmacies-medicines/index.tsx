import {
  type PharmaciesPageFragment,
  type MedicationPreviewFragment,
  GetPharmaciesPageDocument,
  GetMedicationsByFilterDocument,
  GetMedicationCategoriesDocument,
} from '../../gql/graphql';
import { REVALIDATE_TIME } from '../../constants/page.constants';
import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';
// components
import Map from '../../components/sections/home/map';
import SectionsWrapper from '../../components/layout/sections-wrapper';
import MedicationsContainer from '../../components/sections/pharmacies-medicines/medications-container';
import EmergencyServicesContainer from '../../components/sections/pharmacies-medicines/emergency-services-container';
// utils
import styled from '@emotion/styled';
import { fetchData } from '../../utils/fetchApi';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// types
import type { selectOption } from '../../components/types/filter';
import { mapCategory } from '../../utils/mappers';
import { getLayoutData } from '../../utils/get-layout-data';
import { GetStaticPropsContext } from 'next';
import {
  BACKGROUND_GRADIENT,
  BACKGROUND_GRADIENT_MOBILE,
} from '../../constants/images.constants';

type PharmaciesPageProps = {
  pageData: PharmaciesPageFragment;
  totalMedications: number;
  initialMedications: { attributes: MedicationPreviewFragment }[];
  medicationCategories: { attributes: selectOption }[];
};

const PharmaciesPage = ({
  pageData: {
    mapTitle,
    filterTitle,
    medicationsTitle,
    supportServicesTitle,
    emergencyDescription,
    embassiesDescription,
    assistanceDescription,
    categories,
  },
  totalMedications,
  initialMedications,
  medicationCategories,
}: PharmaciesPageProps) => {
  const { t } = useTranslation('common');

  const categoriesMapped = useMemo(
    () => categories?.data.map(mapCategory),
    [categories],
  );

  const allCategories =
    categories?.data.map(el => el.attributes?.key || '').join('***') || '';

  return (
    <Wrapper url={BACKGROUND_GRADIENT} mobUrl={BACKGROUND_GRADIENT_MOBILE}>
      <Map
        title={mapTitle}
        categories={[
          { key: allCategories, value: t('labels.all') },
          ...(categoriesMapped || []),
        ]}
      />

      <MedicationsContainer
        title={medicationsTitle}
        filterTitle={filterTitle}
        initialTotalItems={totalMedications}
        initialMedications={initialMedications?.map(el => el.attributes)}
        categoriesOptions={medicationCategories?.map(el => el.attributes)}
      />
      <EmergencyServicesContainer
        title={supportServicesTitle}
        emergencyDescription={emergencyDescription}
        embassiesDescription={embassiesDescription}
        assistanceDescription={assistanceDescription}
      />
    </Wrapper>
  );
};

export default PharmaciesPage;

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  paddingTop: '236px',

  [theme.breakpoints.mobile]: {
    paddingTop: '80px',
  },
}));

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { pharmaciesPage } = await fetchData(GetPharmaciesPageDocument, {
    locale,
  });

  const { headerData, footerData } = await getLayoutData(locale!);
  const { medicationCategories } = await fetchData(
    GetMedicationCategoriesDocument,
    {
      locale,
    },
  );

  const commonParams = {
    locale,
    page: 1,
    pageSize: 3,
  };

  const { medications } = await fetchData(
    GetMedicationsByFilterDocument,
    commonParams,
  );

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'medications'])),
      pageData: pharmaciesPage?.data?.attributes,
      initialMedications: medications?.data,
      totalMedications: medications?.meta.pagination.total || 0,
      medicationCategories: medicationCategories?.data,
      headerData,
      footerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

import {
  type CompanyPreviewFragment,
  type PharmaciesPageFragment,
  type MedicationPreviewFragment,
  GetPharmaciesPageDocument,
  GetCompaniesByFilterDocument,
  GetMedicationsByFilterDocument,
  GetMedicationCategoriesDocument,
} from '../../gql/graphql';
import { REVALIDATE_TIME } from '../../constants/page.constants';
import useCompanyCard from '../../hooks/useCompanyCard';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';
// components
import Map from '../../components/layout/map';
import SectionsWrapper from '../../components/layout/sections-wrapper';
import MedicationsContainer from '../../components/sections/pharmacies-medicines/medications-container';
import EmergencyServicesContainer from '../../components/sections/pharmacies-medicines/emergency-services-container';
// utils
import styled from '@emotion/styled';
import { fetchData } from '../../utils/fetchApi';
import { getLocationWithMarker } from '../../utils/location-mapper';
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
import type { MapCard } from '../../components/layout/map/children/types';

type PharmaciesPageProps = {
  pageData: PharmaciesPageFragment;
  totalMedications: number;
  initialMedications: { attributes: MedicationPreviewFragment }[];
  medicationCategories: { attributes: selectOption }[];
  medicalFacilities: { attributes: CompanyPreviewFragment }[];
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
  medicalFacilities,
}: PharmaciesPageProps) => {
  const { t } = useTranslation('common');
  const [selectedCategory, setSelectedCategory] = useState('');

  const { renderPopup, handleInfoWindowClick } = useCompanyCard();

  const categoriesMapped = useMemo(
    () => categories?.data.map(mapCategory),
    [categories],
  );

  const locationsToShow = useMemo(() => {
    const filteredCompanies = !selectedCategory.length
      ? medicalFacilities
      : medicalFacilities?.filter(company =>
          company?.attributes?.categories?.data.some(
            cat => cat?.attributes?.key === selectedCategory,
          ),
        );

    return filteredCompanies?.map(getLocationWithMarker);
  }, [selectedCategory, medicalFacilities]);

  const onInfoWindowClick = (card: MapCard) => {
    const company = medicalFacilities?.find(
      el => el.attributes.slug === card.slug,
    );

    if (company) {
      handleInfoWindowClick(company.attributes);
    }
  };

  const handleCategorySelect = (category: selectOption) => {
    if (category.key === selectedCategory) return;
    setSelectedCategory(category.key);
  };

  return (
    <Wrapper url={BACKGROUND_GRADIENT} mobUrl={BACKGROUND_GRADIENT_MOBILE}>
      <Map
        title={mapTitle}
        onInfoWindowClick={onInfoWindowClick}
        categories={[
          { key: '', value: t('labels.all') },
          ...(categoriesMapped || []),
        ]}
        onCategorySelect={handleCategorySelect}
        locations={locationsToShow}
        selectedCategoryID={selectedCategory}
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
      {renderPopup()}
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
  const layoutDataPromise = getLayoutData(locale!);

  const [
    { pharmaciesPage },
    { medicationCategories },
    { medications },
    { headerData, footerData },
  ] = await Promise.all([
    fetchData(GetPharmaciesPageDocument, { locale }),
    fetchData(GetMedicationCategoriesDocument, { locale }),
    fetchData(GetMedicationsByFilterDocument, {
      locale,
      page: 1,
      pageSize: 3,
    }),
    layoutDataPromise,
  ]);

  const allCategories = pharmaciesPage?.data?.attributes?.categories?.data.map(
    el => el.attributes?.key || '',
  );

  const { companies } = await fetchData(GetCompaniesByFilterDocument, {
    locale,
    category: allCategories,
  });

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'medications'])),
      pageData: pharmaciesPage?.data?.attributes,
      initialMedications: medications?.data,
      totalMedications: medications?.meta.pagination.total || 0,
      medicationCategories: medicationCategories?.data,
      medicalFacilities: companies?.data,
      headerData,
      footerData,
    },
    revalidate: REVALIDATE_TIME,
  };
}

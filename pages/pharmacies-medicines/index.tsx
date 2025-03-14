import {
  type PharmaciesPageFragment,
  type MedicationPreviewFragment,
  GetPharmaciesPageDocument,
  GetMedicationsByFilterDocument,
  GetMedicationCategoriesDocument,
  GetSupportServicesDocument,
} from "../../gql/graphql";
import { REVALIDATE_TIME } from "../../constants/page.constants";
import { useMemo } from "react";
import { useTranslation } from "next-i18next";
// components
import Map from "../../components/sections/home/map";
import SectionsWrapper from "../../components/layout/sections-wrapper";
import MedicationsContainer from "../../components/sections/pharmacies-medicines/medications-container";
import EmergencyServicesContainer from "../../components/sections/pharmacies-medicines/emergency-services-container";
// utils
import styled from "@emotion/styled";
import { fetchData } from "../../utils/fetchApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// types
import type { selectOption } from "../../components/types/filter";

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
  const { t } = useTranslation("common");

  const categoriesMapped = useMemo(
    () =>
      categories?.data.map((el) => ({
        key: el.attributes?.key || "",
        value: el.attributes?.value || "",
        iconSrc: el.attributes?.icon.data?.attributes?.url || "",
        markerIcon: el.attributes?.markerIcon.data?.attributes?.url,
      })),
    [categories],
  );

  const allCategories =
    categories?.data.map((el) => el.attributes?.key || "").join("***") || "";

  return (
    <Wrapper
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <Map
        title={mapTitle}
        categories={[
          { key: allCategories, value: t("labels.all") },
          ...(categoriesMapped || []),
        ]}
      />
      <MedicationsContainer
        title={medicationsTitle}
        filterTitle={filterTitle}
        initialTotalItems={totalMedications}
        initialMedications={initialMedications?.map((el) => el.attributes)}
        categoriesOptions={medicationCategories?.map((el) => el.attributes)}
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
  minHeight: "100vh",
  backgroundRepeat: "no-repeat",
  paddingTop: "236px",

  [theme.breakpoints.mobile]: {
    paddingTop: "80px",
  },
}));

export async function getStaticProps({ locale }: any) {
  const { pharmaciesPage } = await fetchData(GetPharmaciesPageDocument, {
    locale,
  });

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
      ...(await serverSideTranslations(locale, ["common", "medications"])),
      pageData: pharmaciesPage?.data?.attributes,
      initialMedications: medications?.data,
      totalMedications: medications?.meta.pagination.total || 0,
      medicationCategories: medicationCategories?.data,
    },
    revalidate: REVALIDATE_TIME,
  };
}

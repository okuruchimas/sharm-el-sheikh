import {
  GetMedicationsByFilterDocument,
  GetMedicationsNamesDocument,
  type MedicationPreviewFragment,
} from "../../../../gql/graphql";
// hooks
import useResponsive from "../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
import { useEffect, useMemo, useState } from "react";
// components
import Modal from "../../../layout/modal";
import SearchBar from "../../../layout/search-bar";
import Pagination from "../../../layout/pagination";
import Placeholder from "../../promotions/children/placeholder";
import FilterButton from "../../../layout/filters/button";
import SectionWrapper from "../../../layout/section-wrapper";
import MedicationCard from "../children/medication-card";
import MedicationsFilter from "../children/medications-filter";
import MedicationContainer from "../medication-container";
// utils
import styled from "@emotion/styled";
import { fetchDataFromApi } from "../../../../utils/fetchApi";
// types
import type { selectOption } from "../../../types/filter";

type Medications = MedicationPreviewFragment[] | undefined;
type MedicationsContainerProps = {
  title: string;
  filterTitle: string;
  initialTotalItems: number;
  initialMedications: Medications;
  categoriesOptions: selectOption[];
};

const MedicationsContainer = ({
  title,
  filterTitle,
  initialTotalItems,
  initialMedications,
  categoriesOptions,
}: MedicationsContainerProps) => {
  // result
  const [result, setResult] = useState<Medications>(initialMedications);
  // pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(initialTotalItems);
  // filters
  const [query, setQuery] = useState("");
  const [filterOptions, setFilterOptions] = useState<selectOption[]>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>();
  const [selectedMedication, setSelectedMedication] =
    useState<MedicationPreviewFragment>();
  // booleans
  const [isLoading, setIsLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const { t, i18n } = useTranslation("common");
  const { isMobile } = useResponsive();

  const pageSize = useMemo(() => (isMobile ? 3 : 6), [isMobile]);

  const handleGetMedications = async ({
    filter,
    pageNum,
    categories,
  }: {
    pageNum: number;
    filter?: string;
    categories?: string[];
  }) => {
    setIsLoading(true);

    const { medications } = await fetchDataFromApi(
      GetMedicationsByFilterDocument,
      {
        page: pageNum,
        pageSize,
        locale: i18n.language,
        nameFilter: filter || undefined,
        categories,
      },
    );

    setResult(medications?.data?.map((el) => el.attributes) as Medications);
    setTotal(medications?.meta?.pagination?.total || 0);
    setIsLoading(false);
  };

  useEffect(
    () => {
      setPage(1);

      if (!isMobile) {
        handleGetMedications({
          pageNum: page,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize],
  );

  const handleSelectMedication = (club: MedicationPreviewFragment) => () => {
    if (!selectedMedication?.slug) {
      setSelectedMedication(club);
    }
  };

  const handleClose = () => setSelectedMedication(undefined);

  const handleChangePage = async (pageNumber: number) => {
    setPage(pageNumber);

    await handleGetMedications({
      pageNum: pageNumber,
      filter: query,
    });
  };

  const handleFiltersSubmit = async (categories?: string[]) => {
    setSelectedCategories(categories);
    setIsFilter(false);
    setQuery("");

    await handleGetMedications({
      pageNum: 1,
      categories: categories?.length ? categories : undefined,
    });

    setPage(1);
  };

  const handleInputChange = async (value: string) => {
    setQuery(value);

    if (value.length) {
      const { medications } = await fetchDataFromApi(
        GetMedicationsNamesDocument,
        {
          locale: i18n.language,
          nameFilter: value || undefined,
        },
      );

      const options = medications?.data.map((el) => ({
        key: el.attributes?.slug || "",
        value: el.attributes?.name || "",
      }));

      setFilterOptions(options);
    } else {
      setFilterOptions(undefined);
    }
  };

  const handleSearch = async (query: string) => {
    setPage(1);

    await handleGetMedications({
      pageNum: page,
      filter: query,
    });
  };

  return (
    <SectionWrapper title={title}>
      <Filters>
        <SearchBar
          value={query}
          onSetValue={setQuery}
          options={filterOptions}
          placeholder={t("labels.searchByName")}
          debounceDelay={600}
          onChange={handleInputChange}
          onSearch={handleSearch}
        />
        <FilterButton onClick={() => setIsFilter(!isFilter)} />
      </Filters>
      {isFilter ? (
        <MedicationsFilter
          title={filterTitle}
          selectedCategories={selectedCategories}
          categoriesOptions={categoriesOptions}
          onClose={() => setIsFilter(false)}
          onSave={handleFiltersSubmit}
        />
      ) : null}
      {result?.length ? (
        <CardsWrapper>
          {result?.map((el) => (
            <MedicationCard
              key={el?.slug}
              title={el.name}
              price={el.price}
              category={
                el.medication_categories?.data[0]?.attributes?.value || "-"
              }
              analogs={el.analogs || "-"}
              imgSrc={el?.image?.data?.attributes?.url || ""}
              onClick={handleSelectMedication(el)}
            />
          ))}
        </CardsWrapper>
      ) : (
        <Placeholder />
      )}
      <Pagination
        isDisabled={isLoading}
        currentPage={page}
        onChangePage={handleChangePage}
        totalItems={total}
        pageSize={pageSize}
      />
      <Modal
        onClose={handleClose}
        isOpen={!!selectedMedication?.slug}
        width="60%"
        mWidth="90%"
      >
        {selectedMedication?.slug ? (
          <MedicationContainer
            medicationPreview={selectedMedication}
            onClose={() => setSelectedMedication(undefined)}
            isLoading={isLoading}
          />
        ) : null}
      </Modal>
    </SectionWrapper>
  );
};

export default MedicationsContainer;

const CardsWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",

  [theme.breakpoints.desktopS]: {
    gridTemplateColumns: "1fr 1fr",
  },

  [theme.breakpoints.mobileS]: {
    gridTemplateColumns: "1fr",
  },
}));

const Filters = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "40px",
});

import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import SectionWrapper from '../../../layout/section-wrapper';
import { SwiperCardsWrapper } from '../../entertainers-tour-guides/children/cards-wrap';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Placeholder from '../../promotions/children/placeholder';
import useResponsive from '../../../../hooks/useResponsive';
import useCompanyCard from '../../../../hooks/useCompanyCard';
import {
  Category,
  CompanyPreviewFragment,
  GetMedicationsByFilterDocument,
  GetMedicationsNamesDocument,
  Maybe,
} from '../../../../gql/graphql';
import SearchBar from '../../../layout/search-bar';
import FilterButton from '../../../layout/filters/button';
import styled from '@emotion/styled';
import { selectOption } from '../../../types/filter';
import { fetchDataFromApi } from '../../../../utils/fetchApi';
import MedicationsFilter from '../../pharmacies-medicines/children/medications-filter';

interface Props {
  companies: CompanyPreviewFragment[];
  categories: (Maybe<Category> | undefined)[];
}
const AllCompanies = ({ companies, categories }: Props) => {
  const [query, setQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState<selectOption[]>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>();

  const { t, i18n } = useTranslation('common');
  const { slidesPerView } = useResponsive();
  const { renderCard, renderDiscountPopup } = useCompanyCard();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CompanyPreviewFragment[]>(companies);
  const [isFilter, setIsFilter] = useState(false);

  const handleGetCompanies = async ({
    filter,
    categories,
  }: {
    filter?: string;
    categories?: string[];
  }) => {
    setIsLoading(true);

    const { medications } = await fetchDataFromApi(
      //TODO: Need GetCompanies
      GetMedicationsByFilterDocument,
      {
        locale: i18n.language,
        nameFilter: filter || undefined,
        categories,
      },
    );

    setResult(medications?.data?.map(el => el.attributes) as any);
    setIsLoading(false);
  };

  const handleInputChange = async (value: string) => {
    setQuery(value);

    if (value.length) {
      //TODO: Need companies except medications
      const { medications } = await fetchDataFromApi(
        //TODO: Need GetCompaniesNames
        GetMedicationsNamesDocument,
        {
          locale: i18n.language,
          nameFilter: value || undefined,
        },
      );

      const options = medications?.data.map(el => ({
        key: el.attributes?.slug || '',
        value: el.attributes?.name || '',
      }));

      setFilterOptions(options);
    } else {
      setFilterOptions(undefined);
    }
  };

  const handleSearch = async (query: string) => {
    await handleGetCompanies({
      filter: query,
    });
  };
  const handleFiltersSubmit = async (categories?: string[]) => {
    setSelectedCategories(categories);
    setIsFilter(false);
    setQuery('');

    await handleGetCompanies({
      categories: categories?.length ? categories : undefined,
    });
  };
  return (
    <SectionWrapper title={t('text.allCompanies')}>
      <Filters>
        <SearchBar
          value={query}
          onSetValue={setQuery}
          options={filterOptions}
          placeholder={t('labels.searchByName')}
          debounceDelay={600}
          onChange={handleInputChange}
          onSearch={handleSearch}
        />
        <FilterButton onClick={() => setIsFilter(!isFilter)} />
      </Filters>
      {isFilter && categories ? (
        <MedicationsFilter
          title={'Companies'}
          selectedCategories={selectedCategories}
          // TODO: Need to fix types for categories here
          // @ts-ignore
          categoriesOptions={categories}
          onClose={() => setIsFilter(false)}
          onSave={handleFiltersSubmit}
        />
      ) : null}

      {/*TODO: Need result here except companies*/}
      {companies?.length ? (
        <SwiperCardsWrapper
          modules={[Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={12}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          loop
        >
          {/*TODO: Need result here except companies*/}
          {companies?.map((el, index) =>
            el ? <SwiperSlide key={index}>{renderCard(el)}</SwiperSlide> : null,
          )}
        </SwiperCardsWrapper>
      ) : (
        <Placeholder title={t('noAddsFound')} />
      )}
      {renderDiscountPopup()}
    </SectionWrapper>
  );
};

export default AllCompanies;

const Filters = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
});

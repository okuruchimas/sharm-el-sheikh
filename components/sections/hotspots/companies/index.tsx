// hooks
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import useCompanyCard from '../../../../hooks/useCompanyCard';
// components
import Loader from '../../../layout/loader';
import SearchBar from '../../../layout/search-bar';
import Placeholder from '../../promotions/children/placeholder';
import FilterButton from '../../../layout/filters/button';
import { Pagination } from 'swiper/modules';
import useResponsive from '../../../../hooks/useResponsive';
import { SwiperSlide } from 'swiper/react';
import SectionWrapper from '../../../layout/section-wrapper';
import CategoriesFilter from '../../../layout/categories-filter';
import { SwiperCardsWrapper } from '../../entertainers-tour-guides/children/cards-wrap';
import {
  type CompanyPreviewFragment,
  GetCompaniesTitlesDocument,
  GetCompaniesByFilterDocument,
} from '../../../../gql/graphql';
import styled from '@emotion/styled';
import type { selectOption } from '../../../types/filter';
import { fetchDataFromApi } from '../../../../utils/fetchApi';

interface Props {
  companies: CompanyPreviewFragment[];
  categories: selectOption[];
}
const AllCompanies = ({ companies, categories }: Props) => {
  const [query, setQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState<selectOption[]>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>();

  const { t, i18n } = useTranslation('common');
  const { slidesPerView } = useResponsive();
  const { renderCard, renderDiscountPopup, renderPopup } = useCompanyCard();
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

    try {
      const { companies } = await fetchDataFromApi(
        GetCompaniesByFilterDocument,
        {
          locale: i18n.language,
          titleFilter: filter || undefined,
          category: categories,
        },
      );

      const data = companies?.data?.map(
        el => el.attributes,
      ) as CompanyPreviewFragment[];
      setResult(data);
    } catch (error) {
      console.error('Error fetching companies:', error);
      setResult([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = async (value: string) => {
    setQuery(value);

    if (value.length) {
      const { companies } = await fetchDataFromApi(GetCompaniesTitlesDocument, {
        locale: i18n.language,
        titleFilter: value || undefined,
      });

      const options = companies?.data.map(el => ({
        key: el.attributes?.slug || '',
        value: el.attributes?.title || '',
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
        <CategoriesFilter
          title={t('text.categories')}
          selectedCategories={selectedCategories}
          categoriesOptions={categories}
          onClose={() => setIsFilter(false)}
          onSave={handleFiltersSubmit}
        />
      ) : null}

      {result?.length ? (
        <SwiperCardsWrapper
          modules={[Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={12}
          navigation={false}
          pagination={{ clickable: true }}
          loop
        >
          {isLoading ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ) : (
            result.map((el, index) =>
              el ? (
                <SwiperSlide key={index}>{renderCard(el)}</SwiperSlide>
              ) : null,
            )
          )}
        </SwiperCardsWrapper>
      ) : (
        <Placeholder title={t('text.noCompanies')} />
      )}
      {renderPopup()}
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

const LoaderWrapper = styled('div')(({ theme }) => ({
  height: '420px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.mobile]: {
    height: '384px',
  },
}));

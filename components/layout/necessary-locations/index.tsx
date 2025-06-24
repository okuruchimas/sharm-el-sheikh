// hooks
import useCompanyCard from '../../../hooks/useCompanyCard';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';
// components
import Map from '../map';
// utils
import { mapCategory } from '../../../utils/mappers';
import { getLocationWithMarker } from '../../../utils/location-mapper';
// types
import type {
  CategoryEntity,
  CompanyPreviewFragment,
} from '../../../gql/graphql';
import type { MapCard } from '../map/children/types';
import type { selectOption } from '../../types/filter';

type Props = {
  title: string;
  categories: CategoryEntity[];
  companies: { attributes: CompanyPreviewFragment }[];
};

const NecessaryLocations = ({ title, categories, companies }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { t } = useTranslation('common');
  const { renderPopup, handleInfoWindowClick } = useCompanyCard();

  const categoriesMapped = useMemo(
    () => categories.map(mapCategory),
    [categories],
  );

  const locationsToShow = useMemo(() => {
    const filteredCompanies = !selectedCategory.length
      ? companies
      : companies?.filter(company =>
          company?.attributes?.categories?.data.some(
            cat => cat?.attributes?.key === selectedCategory,
          ),
        );

    return filteredCompanies?.map(getLocationWithMarker);
  }, [selectedCategory, companies]);

  const onInfoWindowClick = (card: MapCard) => {
    const company = companies?.find(el => el.attributes.slug === card.slug);

    if (company) {
      handleInfoWindowClick(company.attributes);
    }
  };

  const handleCategorySelect = (category: selectOption) => {
    if (category.key === selectedCategory) return;
    setSelectedCategory(category.key);
  };

  return (
    <>
      <Map
        title={title}
        onInfoWindowClick={onInfoWindowClick}
        categories={[
          { key: '', value: t('labels.all') },
          ...(categoriesMapped || []),
        ]}
        onCategorySelect={handleCategorySelect}
        locations={locationsToShow}
        selectedCategoryID={selectedCategory}
      />
      {renderPopup()}
    </>
  );
};

export default NecessaryLocations;

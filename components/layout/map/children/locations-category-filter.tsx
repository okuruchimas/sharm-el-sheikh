import { useCallback } from 'react';
// components
import Dropdown from '../../../layout/filters';
import NextImage from '../../../layout/image';
// utils
import styled from '@emotion/styled';
// types
import type { selectOption } from '../../../types/filter';

type LocationsCategoryFilterProps = {
  options: selectOption[];
  selectedID?: string;
  onSelect: (option: selectOption) => void;
};

const LocationsCategoryFilter = ({
  options,
  selectedID,
  onSelect,
}: LocationsCategoryFilterProps) => {
  const handleClick = useCallback(
    (category: selectOption) => () => onSelect(category),
    [onSelect],
  );

  return (
    <>
      <DropdownWrapper>
        <Dropdown options={options} onChange={onSelect} />
      </DropdownWrapper>
      <ItemsWrapper>
        {options.map(option => (
          <CategoryItem
            key={option.key}
            isSelected={option.key === selectedID}
            onClick={handleClick(option)}
          >
            {option.iconSrc ? (
              <NextImage src={option.iconSrc} width="18px" height="18px" />
            ) : null}
            <span>{option.value}</span>
          </CategoryItem>
        ))}
      </ItemsWrapper>
    </>
  );
};

const ItemsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',

  [theme.breakpoints.mobile]: {
    display: 'none',
  },
}));

const DropdownWrapper = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.mobile]: {
    display: 'block',
  },
}));

export const CategoryItem = styled('div', {
  shouldForwardProp: prop => prop !== 'isSelected',
})<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '9px 16px',
  borderRadius: '8px',
  backgroundColor: isSelected ? theme.colors.peach : theme.colors.white2,
  backgroundSize: 'cover',
  fontSize: theme.fontSize.fontS16,
  color: isSelected ? theme.colors.blue3 : theme.colors.blue,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'transform 0.3s ease',

  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export default LocationsCategoryFilter;

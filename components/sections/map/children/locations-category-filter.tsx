import { useCallback, type FC } from "react";
// components
import Filters from "../../../layout/filters";
// utils
import styled from "@emotion/styled";
// constants

// types
import type { selectOption } from "../../../types/filter";
import { categoriesOptions } from "./constants";

type LocationsCategoryFilterProps = {
  options: selectOption[];
  selectedID: string;
  onSelect: (option: selectOption) => void;
};

const LocationsCategoryFilter: FC<LocationsCategoryFilterProps> = ({
  options,
  selectedID,
  onSelect,
}) => {
  const handleClick = useCallback(
    (category: selectOption) => () => onSelect(category),
    [onSelect],
  );

  return (
    <>
      <DropdownWrapper>
        <Filters options={categoriesOptions} onChange={onSelect} />
      </DropdownWrapper>
      <ItemsWrapper>
        {options.map((option) => (
          <CategoryItem
            key={option.key}
            isSelected={option.key === selectedID}
            onClick={handleClick(option)}
          >
            {option.display_value}
          </CategoryItem>
        ))}
      </ItemsWrapper>
    </>
  );
};

const ItemsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",

  [`@media (${theme.breakpoints.mobile})`]: {
    display: "none",
  },
}));

const DropdownWrapper = styled("div")(({ theme }) => ({
  display: "none",

  [`@media (${theme.breakpoints.mobile})`]: {
    display: "block",
  },
}));

export const CategoryItem = styled("div", {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  padding: "9px 16px",
  borderRadius: "8px",
  backgroundColor: isSelected ? theme.colors.peach : theme.colors.white2,
  backgroundSize: "cover",
  fontSize: theme.fontSize.fontS16,
  color: isSelected ? theme.colors.blue3 : theme.colors.blue,
  fontFamily: "Comfortaa, sans-serif",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export default LocationsCategoryFilter;

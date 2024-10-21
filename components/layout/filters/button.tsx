import styled from "@emotion/styled";

import Image from "next/image";

interface Props {
  onClick: () => void;
}
const FilterButton = ({ onClick }: Props) => {
  return (
    <FilterButtonStyled onClick={onClick}>
      <Image
        height={56}
        width={56}
        src={"/icons/filter.svg"}
        alt="icon of a filtre"
      />
    </FilterButtonStyled>
  );
};

export default FilterButton;

const FilterButtonStyled = styled("button")(({ theme }) => ({
  border: "none",
  background: "transparent",
  width: 56,
  height: 56,
  minWidth: 56,
  minHeight: 56,
  [theme.breakpoints.mobile]: {},
}));

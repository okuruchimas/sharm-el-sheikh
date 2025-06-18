import { useMemo, useState } from "react";
import styled from "@emotion/styled";
import UniversalCard from "../../../layout/universal-card";
import SearchBar from "../../../layout/search-bar";
import { selectOption } from "../../../types/filter";
import Button from "../../../layout/button";
import Dropdown from "../../../layout/filters";
import { categoryOptions } from "../children/adv-form";
import { formatDate } from "../../../../utils/formateDate";
import Pagination from "../../../layout/pagination";
import useResponsive from "../../../../hooks/useResponsive";
import type { AdvertisementFragment } from "../../../../gql/graphql";

interface Props {
  buttonClick: () => void;
  advertisements: AdvertisementFragment[];
}
const All = ({ buttonClick, advertisements }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<selectOption[]>();
  const [isLoading, setIsLoading] = useState(false);

  //pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(10);
  const { isMobile } = useResponsive();

  const handleChangePage = async (pageNumber: number) => {
    // setPage(pageNumber);
  };
  const pageSize = useMemo(() => (isMobile ? 6 : 2), [isMobile]);

  const handleSearchChange = async (query: string) => {
    setSearchValue(query);

    if (query.length) {
    } else {
      setFilterOptions(undefined);
    }
  };

  const handleSearch = async (query: string) => {};

  const handleOptionSelect = async (option: selectOption) => {};

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBar
          value={searchValue}
          onSetValue={setSearchValue}
          options={filterOptions}
          placeholder="Type To Search"
          debounceDelay={600}
          onChange={handleSearchChange}
          onSearch={handleSearch}
        />
        <Dropdown
          options={categoryOptions}
          onChange={handleOptionSelect}
          isLoading={isLoading}
        />
        <Button onClick={buttonClick} text={"Add Advertisement"} />
      </SearchWrapper>
      <AdvertisementsWrap>
        {[...advertisements, ...advertisements]?.map((el, index) => (
          <UniversalCard
            key={index}
            title={el.title}
            price={el.price}
            place={el.location}
            duration={formatDate(el.createdAt)}
            imgSrc={el.images?.data[0]?.attributes?.url || ""}
            // onClick={handleServiceClick(el)}
          />
        ))}
      </AdvertisementsWrap>
      <Pagination
        isDisabled={isLoading}
        currentPage={page}
        onChangePage={handleChangePage}
        totalItems={total}
        pageSize={pageSize}
      />
    </Wrapper>
  );
};

export default All;

const Wrapper = styled("div")(({ theme }) => ({}));

const AdvertisementsWrap = styled("div")(({ theme }) => ({
  padding: "40px 0",
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

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    gap: 16,
    button: {
      width: "100%",
    },
  },
}));

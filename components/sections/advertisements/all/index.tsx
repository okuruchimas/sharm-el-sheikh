import React, { useState } from "react";
import styled from "@emotion/styled";
import UniversalCard from "../../../layout/universal-card";
import SearchBar from "../../../layout/search-bar";
import { selectOption } from "../../../types/filter";
import Button from "../../../layout/button";
import Dropdown from "../../../layout/filters";
import { categoryOptions } from "../children/adv-form";

interface Props {
  buttonClick: () => void;
}
const All = ({ buttonClick }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<selectOption[]>();
  const [isLoading, setIsLoading] = useState(false);

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
          placeholder={"typeToSearch"}
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
      {/*Map here*/}
      {/*<UniversalCard />*/}
    </Wrapper>
  );
};

export default All;

const Wrapper = styled("div")(({ theme }) => ({}));

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

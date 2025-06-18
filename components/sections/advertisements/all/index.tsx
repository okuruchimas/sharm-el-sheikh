import {
  GetAdvertisementsDocument,
  GetAdvertisementsTitlesDocument,
  type AdvertisementFragment,
} from "../../../../gql/graphql";
// hooks
import useResponsive from "../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
import { useMemo, useState } from "react";
// components
import Button from "../../../layout/button";
import Dropdown from "../../../layout/filters";
import SearchBar from "../../../layout/search-bar";
import Pagination from "../../../layout/pagination";
import Placeholder from "../../promotions/children/placeholder";
import UniversalCard from "../../../layout/universal-card";
// utils
import styled from "@emotion/styled";
import { formatDate } from "../../../../utils/formateDate";
import { fetchDataFromApi } from "../../../../utils/fetchApi";
// types
import type { selectOption } from "../../../types/filter";

interface Props {
  buttonClick: () => void;
  totalAdvertisements: number;
  initialAdvertisements: AdvertisementFragment[];
  advertisementCategories: selectOption[];
  onElementClick: (ad: AdvertisementFragment) => void;
}
const All = ({
  buttonClick,
  initialAdvertisements,
  totalAdvertisements,
  advertisementCategories,
  onElementClick,
}: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<selectOption[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AdvertisementFragment[] | undefined>(
    initialAdvertisements,
  );
  const [selectedCategory, setSelectedCategory] = useState<selectOption>();
  //pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(totalAdvertisements);
  const { isMobile } = useResponsive();

  const { t } = useTranslation("agents");

  const pageSize = useMemo(() => (isMobile ? 4 : 12), [isMobile]);

  const handleGetAds = async ({
    pageNum,
    query,
    category,
  }: {
    pageNum: number;
    query?: string;
    category?: string;
  }) => {
    setIsLoading(true);
    const data = await fetchDataFromApi(GetAdvertisementsDocument, {
      page: pageNum,
      pageSize: pageSize,
      titleFilter: query || undefined,
      categoryKey: category || undefined,
    });

    setResult(
      data?.advertisements?.data.map((el) => el.attributes) as
        | AdvertisementFragment[]
        | undefined,
    );
    setTotal(data.advertisements?.meta.pagination.total || 0);
    setIsLoading(false);
  };

  const handleChangePage = async (pageNumber: number) => {
    setPage(pageNumber);
    await handleGetAds({
      pageNum: pageNumber,
      category: selectedCategory?.key,
    });
  };

  const handleSearchChange = async (query: string) => {
    setSearchValue(query);

    if (query.length) {
      const { advertisements } = await fetchDataFromApi(
        GetAdvertisementsTitlesDocument,
        {
          titleFilter: query,
        },
      );

      const options = advertisements?.data.map((el) => ({
        key: el.attributes?.title || "",
        value: el.attributes?.title || "",
      }));

      setFilterOptions(options);
    } else {
      setFilterOptions(undefined);
    }
  };

  const handleSearch = async (query: string) => {
    setPage(1);

    await handleGetAds({
      query,
      pageNum: 1,
    });
  };

  const handleCategorySelect = async (option: selectOption) => {
    setPage(1);

    await handleGetAds({
      category: option.key,
      pageNum: 1,
    });
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBar
          value={searchValue}
          onSetValue={setSearchValue}
          options={filterOptions}
          placeholder={t("typeToSearch")}
          debounceDelay={600}
          onChange={handleSearchChange}
          onSearch={handleSearch}
        />
        <Dropdown
          options={advertisementCategories}
          onChange={handleCategorySelect}
          isLoading={isLoading}
        />
        <Button onClick={buttonClick} text={t("addAdvertisement")} />
      </SearchWrapper>
      {result?.length ? (
        <>
          <AdvertisementsWrap>
            {result?.map((el, index) => (
              <UniversalCard
                key={index}
                title={el.title}
                price={el.price}
                place={el.location}
                duration={formatDate(el.createdAt)}
                imgSrc={el.images?.data[0]?.attributes?.url || ""}
                onClick={() => onElementClick(el)}
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
        </>
      ) : (
        <Placeholder title={t("noAddsFound")} />
      )}
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

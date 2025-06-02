import {
  type DeliveryFragment,
  GetDeliveriesDocument,
  GetDeliveriesTitlesDocument,
} from "../../../../gql/graphql";
import { useState } from "react";
// icons
import Car from "../../../../public/icons/agents/car.svg";
import Box from "../../../../public/icons/agents/box.svg";
import Member from "../../../../public/icons/agents/member.svg";
// components
import Button from "../../../layout/button";
import SearchBar from "../../../layout/search-bar";
import Pagination from "../../../layout/pagination";
import Deliveries from "./children/deliveries";
import Placeholder from "../../promotions/children/placeholder";
import TypeSwitcher from "../../home/feedback/children/type-switcher";
import SectionWrapper from "../../../layout/section-wrapper";
import AddAdvertisementForm from "./children/ad-form";
// utils
import styled from "@emotion/styled";
import { fetchDataFromApi } from "../../../../utils/fetchApi";
// types
import type { selectOption } from "../../../types/filter";
import { useTranslation } from "next-i18next";

const PAGE_SIZE = 4;

type DeliveryProps = {
  initialDeliveries?: DeliveryFragment[];
  initialTotalDeliveries: number;
};

const Delivery = ({
  initialDeliveries,
  initialTotalDeliveries,
}: DeliveryProps) => {
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(initialTotalDeliveries);
  const [type, setType] = useState<string>("to");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DeliveryFragment[] | undefined>(
    initialDeliveries,
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const [isAddFrom, setAddFrom] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<selectOption[]>();

  const { t } = useTranslation("agents");

  const types = [
    {
      icon: <Member />,
      type: "member",
      value: t("memberOffers"),
    },
    {
      icon: <Car />,
      type: "to",
      value: t("orderToEgypt"),
    },
    {
      icon: <Box />,
      type: "from",
      value: t("receiveFromEgypt"),
    },
  ];

  const handleSearchChange = async (query: string) => {
    setSearchValue(query);

    if (query.length) {
      const { deliveries } = await fetchDataFromApi(
        GetDeliveriesTitlesDocument,
        {
          titleFilter: query,
        },
      );

      const options = deliveries?.data.map((el) => ({
        key: el.attributes?.title || "",
        value: el.attributes?.title || "",
      }));

      setFilterOptions(options);
    } else {
      setFilterOptions(undefined);
    }
  };

  const handleIsForm = () => {
    setAddFrom((prev) => !prev);
  };

  const handleGetAds = async ({
    publicationType,
    pageNum,
    query,
  }: {
    pageNum: number;
    publicationType?: string;
    query?: string;
  }) => {
    setIsLoading(true);
    const data = await fetchDataFromApi(GetDeliveriesDocument, {
      page: pageNum,
      pageSize: PAGE_SIZE,
      titleFilter: query || undefined,
      publicationType: publicationType || undefined,
    });

    setResult(
      data?.deliveries?.data.map((el) => el.attributes) as
        | DeliveryFragment[]
        | undefined,
    );
    setTotal(data.deliveries?.meta.pagination.total || 0);
    setIsLoading(false);
  };

  const handleChangeType = (type: string) => {
    setType(type);
    setSearchValue("");
    handleGetAds({
      pageNum: page,
      publicationType: type,
    });
  };

  const handleChangePage = async (pageNumber: number) => {
    setPage(pageNumber);
    await handleGetAds({
      pageNum: pageNumber,
      publicationType: type,
    });
  };

  const handleSearch = async (query: string) => {
    setPage(1);

    await handleGetAds({
      query,
      pageNum: 1,
    });
  };
  console.log(result);
  return (
    <SectionWrapper title={"Bring from Egypt or Send there? Easy!"} mt="60px">
      <TypeSwitcher
        currentType={type}
        setType={handleChangeType}
        typesProp={types}
      />
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
        <AddButton onClick={handleIsForm} text={t("addAdvertisement")} />
        {isAddFrom ? <AddAdvertisementForm cancelClick={handleIsForm} /> : null}
      </SearchWrapper>
      {result?.length ? (
        <>
          <Deliveries deliveries={result} />
          <Pagination
            isDisabled={isLoading}
            currentPage={page}
            onChangePage={handleChangePage}
            totalItems={total}
            pageSize={PAGE_SIZE}
          />
        </>
      ) : (
        <Placeholder title={t("noAddsFound")} />
      )}
    </SectionWrapper>
  );
};

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    gap: 16,
  },
}));

const Input = styled("input")(({ theme }) => ({
  width: "100%",
  maxWidth: "800px",
  height: 56,
  padding: "12px 16px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "12px",
  outline: "none",
  transition: "border-color 0.2s ease-in-out",
  "&:focus": {
    borderColor: theme.colors.yellow,
  },

  [theme.breakpoints.mobile]: {
    maxWidth: "100%",
    flexDirection: "column",
    gap: 16,
  },
}));

const AddButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.mobile]: {
    width: "100%",
  },
}));

export default Delivery;

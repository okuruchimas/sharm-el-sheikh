import {
  type CompanyCardPreviewFragment,
  GetCompanyPromotionCardsByFilterDocument,
} from "../../../gql/graphql";
// hooks
import { useState } from "react";
import { useTranslation } from "next-i18next";
// components
import Button from "../../layout/button";
import Dropdown from "../../layout/filters";
import PromCard from "./children/prom-card";
import Placeholder from "./children/placeholder";
import SectionWrapper from "../../layout/section-wrapper";
// utils
import styled from "@emotion/styled";
import { fetchDataFromApi } from "../../../utils/fetchApi";
// types
import type { selectOption } from "../../types/filter";

const PAGE_SIZE = 3;

type Cards = (CompanyCardPreviewFragment | undefined | null)[] | undefined;

interface PromotionsProps {
  title: string;
  options: selectOption[];
  initialPromotions: Cards;
  totalInitialCards: number;
}

const Promotions = ({
  title,
  options,
  totalInitialCards,
  initialPromotions,
}: PromotionsProps) => {
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(totalInitialCards);
  const [result, setResult] = useState<Cards>(initialPromotions);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedArea, setSelectedArea] = useState<selectOption>(options[0]);

  const { t, i18n } = useTranslation("common");

  const isShowMore = page * PAGE_SIZE < total;

  const handleGetCardByArea = async (option: selectOption, page: number) => {
    const data = await fetchDataFromApi(
      GetCompanyPromotionCardsByFilterDocument,
      {
        locale: i18n.language,
        areaKey: option.key,
        page,
        pageSize: 3,
      },
    );

    setTotal(data.companyPromotionCards?.meta.pagination.total || 0);
    return data.companyPromotionCards?.data.map((el) => el.attributes);
  };

  const handleOptionSelect = async (option: selectOption) => {
    setPage(1);
    setIsLoading(true);
    setSelectedArea(option);

    const data = await handleGetCardByArea(option, page);

    setResult(data);
    setIsLoading(false);
  };

  const handleShowMore = async () => {
    setIsLoading(true);

    const data = await handleGetCardByArea(selectedArea, page + 1);

    setResult((prev) => [...(prev || []), ...(data || [])]);
    setPage((prev) => prev + 1);
    setIsLoading(false);
  };

  return (
    <SectionWrapper
      title={title}
      titleChildren={
        <FiltersWrap>
          <Dropdown
            options={options}
            onChange={handleOptionSelect}
            isLoading={isLoading}
          />
        </FiltersWrap>
      }
      isColumn
    >
      {result?.length ? (
        <DownWrap>
          {result.map((card, index) => (
            <PromCard
              slug={card?.slug || ""}
              discount={card?.discount}
              images={card?.images}
              title={card?.title || ""}
              location={card?.location}
              averageRating={card?.averageRating || 0}
              totalComments={card?.totalComments || 0}
              key={index}
            />
          ))}
        </DownWrap>
      ) : (
        <Placeholder title={t("noDiscounts")} />
      )}
      {isShowMore ? (
        <ButtonWrap>
          <Button
            text={t("buttons.viewMore")}
            backgroundColor="white"
            onClick={handleShowMore}
            isLoading={isLoading}
          />
        </ButtonWrap>
      ) : null}
    </SectionWrapper>
  );
};

const FiltersWrap = styled("div")({
  display: "flex",
  alignItems: "center",
});

const DownWrap = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: "1fr",
  },
}));

const ButtonWrap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default Promotions;

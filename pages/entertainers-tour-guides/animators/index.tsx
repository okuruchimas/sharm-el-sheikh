import {
  type AnimationCompany,
  type AnimatorPreviewFragment,
  GetAnimatorsByFilterDocument,
  GetAnimationCompaniesDocument,
} from "../../../gql/graphql";
import { REVALIDATE_TIME } from "../../../constants/page.constants";
// hooks
import useResponsive from "../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
import { useEffect, useMemo, useState } from "react";
// components
import Button from "../../../components/layout/button";
import Dropdown from "../../../components/layout/filters";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import Pagination from "../../../components/layout/pagination";
import AnimatorCards from "../../../components/sections/entertainers-tour-guides/animators/cards";
// utils
import styled from "@emotion/styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchData, fetchDataFromApi } from "../../../utils/fetchApi";
// types
import type { selectOption } from "../../../components/types/filter";

type Animators = { attributes: AnimatorPreviewFragment }[];
type PageProps = {
  animators: Animators;
  initialTotalAnimators: number;
  animationCompanies: { attributes: AnimationCompany }[];
};
const Animators = ({
  animators,
  animationCompanies,
  initialTotalAnimators,
}: PageProps) => {
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(initialTotalAnimators);
  const [filter, setFilter] = useState("");
  const [companyKey, setCompanyKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Animators>(animators);

  const { i18n, t } = useTranslation("entertainers-tour-guides");
  const { isMobile } = useResponsive();

  const pageSize = useMemo(() => (isMobile ? 4 : 12), [isMobile]);

  const handleGetAnimators = async ({
    sort,
    pageNum,
    company,
  }: {
    sort: string;
    pageNum: number;
    company: string;
  }) => {
    setIsLoading(true);
    const data = await fetchDataFromApi(GetAnimatorsByFilterDocument, {
      page: pageNum,
      sort: sort || undefined,
      locale: i18n.language,
      pageSize,
      companyKey: company || undefined,
    });
    setResult(data?.animators?.data as Animators);
    setTotal(data.animators?.meta.pagination.total || 0);
    setIsLoading(false);
  };

  useEffect(
    () => {
      setPage(1);

      if (!isMobile) {
        handleGetAnimators({ sort: filter, pageNum: 1, company: "" });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize],
  );

  const filterOptions = [
    { key: "", value: t("sortBy") },
    { key: "totalComments:desc", value: t("filters.mostReviews") },
    { key: "totalComments:asc", value: t("filters.fewestReviews") },
    { key: "averageRating:desc", value: t("filters.highestRating") },
    { key: "averageRating:asc", value: t("filters.lowestRating") },
  ];

  const animationCompaniesMapped = animationCompanies.map((el) => ({
    key: el.attributes.key,
    value: el.attributes.value,
  }));

  const handleCompanySelect = async (option: selectOption) => {
    setPage(1);
    setCompanyKey(option.key);
    await handleGetAnimators({
      sort: filter,
      pageNum: page,
      company: option.key,
    });
  };

  const handleChangePage = async (pageNumber: number) => {
    setPage(pageNumber);
    await handleGetAnimators({
      sort: filter,
      pageNum: pageNumber,
      company: companyKey,
    });
  };

  const handleFilterSelect = async (option: selectOption) => {
    setPage(1);
    setFilter(option.key);
    await handleGetAnimators({
      sort: option.key,
      pageNum: page,
      company: companyKey,
    });
  };

  return (
    <Container>
      <FiltersWrap>
        <Dropdown
          options={[
            { key: "", value: t("animationCompanies") },
            ...animationCompaniesMapped,
          ]}
          onChange={handleCompanySelect}
          isLoading={isLoading}
          width="100%"
          height="56px"
          color="blue"
        />
        <Dropdown
          options={filterOptions}
          onChange={handleFilterSelect}
          isLoading={isLoading}
          width="100%"
          height="56px"
          color="blue"
        />
        <Button
          color="blue"
          backgroundColor="transparent"
          text={t("buttons.nearestAnimator")}
        />
      </FiltersWrap>
      <AnimatorCards animators={result.map((el) => el.attributes)} />
      <Pagination
        isDisabled={isLoading}
        currentPage={page}
        onChangePage={handleChangePage}
        totalItems={total}
        pageSize={pageSize}
      />
    </Container>
  );
};

const FiltersWrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  gap: "24px",
  marginBottom: "24px",

  button: {
    marginLeft: "auto",
  },

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    alignItems: "flex-end",

    button: {
      height: 56,
      width: "100%",
    },
  },
}));

export async function getStaticProps({ locale }: any) {
  const { animationCompanies } = await fetchData(GetAnimationCompaniesDocument);
  const { animators } = await fetchData(GetAnimatorsByFilterDocument, {
    locale,
    page: 1,
    pageSize: 4,
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "entertainers-tour-guides",
        "common",
      ])),
      animators: animators?.data,
      initialTotalAnimators: animators?.meta.pagination.total,
      animationCompanies: animationCompanies?.data,
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default Animators;

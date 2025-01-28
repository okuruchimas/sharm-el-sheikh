import {
  type AnimatorPreviewFragment,
  type AnimationCompanyPreviewFragment,
  GetAnimatorsByFilterDocument,
  GetAnimationCompaniesDocument,
} from "../../../gql/graphql";
// constants
import { REVALIDATE_TIME } from "../../../constants/page.constants";
import { RATING_FILTER_OPTIONS } from "../../../constants/filter-options";
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
import AnimationCompanies from "../../../components/sections/entertainers-tour-guides/animators/animation-companies";
// utils
import styled from "@emotion/styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchData, fetchDataFromApi } from "../../../utils/fetchApi";
// types
import type { selectOption } from "../../../components/types/filter";
import { Title } from "../../../components/layout/title";
import Map from "../../../components/sections/home/map";
import Tabs from "../../../components/sections/entertainers-tour-guides/children/tabs";

const cat = [
  {
    key: "pharmacy***clubs***restaurants***supermarket***shops",
    value: "Усі",
  },
  {
    key: "pharmacy",
    value: "Аптеки",
    iconSrc:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/pharmacy_79ee9e5bb4.svg",
    markerIcon:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/pharmacy_marker_deea5dae67.svg",
  },
  {
    key: "clubs",
    value: "Clubs",
    iconSrc:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/shops_c5f2c42dfa.svg",
    markerIcon:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/restaurants_marker_3223cd0ad9.svg",
  },
  {
    key: "restaurants",
    value: "Restaurants",
    iconSrc:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/restaurants_ca02f1a187.svg",
    markerIcon:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/restaurants_marker_3223cd0ad9.svg",
  },
  {
    key: "supermarket",
    value: "Супермаркет",
    iconSrc:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/Supermarket_a455414d09.svg",
    markerIcon:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/supermarket_marker_89ff3f46a0.svg",
  },
  {
    key: "shops",
    value: "Магазини",
    iconSrc:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/shops_c5f2c42dfa.svg",
    markerIcon:
      "https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/shops_marker_6ed83042bc.svg",
  },
];

type Animators = { attributes: AnimatorPreviewFragment }[];
type PageProps = {
  animators: Animators;
  initialTotalAnimators: number;
  animationCompanies: { attributes: AnimationCompanyPreviewFragment }[];
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
      if (!isMobile) {
        handleGetAnimators({ sort: filter, pageNum: 1, company: "" });
        setPage(1);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize],
  );

  const filterOptions = RATING_FILTER_OPTIONS.map((el) => ({
    ...el,
    value: t(el.value),
  }));

  const animationCompaniesMapped = animationCompanies.map((el) => ({
    key: el.attributes.slug,
    value: el.attributes.value,
  }));

  const handleCompanySelect = async (option: selectOption) => {
    if (option.key === companyKey) return;

    setPage(1);
    setCompanyKey(option.key);
    await handleGetAnimators({
      sort: filter,
      pageNum: 1,
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
    if (option.key === filter) return;

    setPage(1);
    setFilter(option.key);
    await handleGetAnimators({
      sort: option.key,
      pageNum: 1,
      company: companyKey,
    });
  };

  return (
    <Container>
      <Map categories={cat} />
      <AnimationCompanies
        companies={animationCompanies.map((el) => el.attributes)}
      />
      <Tabs />
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

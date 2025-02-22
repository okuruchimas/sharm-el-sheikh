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
import Map from "../../../components/layout/map";
import Tabs from "../../../components/sections/entertainers-tour-guides/children/tabs";
import Modal from "../../../components/layout/modal";
import Button from "../../../components/layout/button";
import Dropdown from "../../../components/layout/filters";
import Container from "../../../components/sections/entertainers-tour-guides/children/container";
import Pagination from "../../../components/layout/pagination";
import AnimatorCards from "../../../components/sections/entertainers-tour-guides/animators/cards";
import AnimationCompanies from "../../../components/sections/entertainers-tour-guides/animators/animation-companies";
import AnimationCompanyPopup from "../../../components/sections/entertainers-tour-guides/animators/animation-company-popup";
// utils
import styled from "@emotion/styled";
import { mapLocations } from "../../../utils/location-mapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchData, fetchDataFromApi } from "../../../utils/fetchApi";
// types
import type { MapCard } from "../../../components/layout/map/children/types";
import type { selectOption } from "../../../components/types/filter";

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
  const [selectedCompany, setSelectedCompany] =
    useState<AnimationCompanyPreviewFragment>();

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

  const handlePopupClose = () => setSelectedCompany(undefined);
  const handleInfoWindowClick = (card: MapCard) => {
    const company = animationCompanies.find(
      (el) => el.attributes.slug === card.slug,
    );

    setSelectedCompany(company?.attributes);
  };

  const locations = mapLocations(animationCompanies);

  return (
    <>
      <Container>
        {locations.length ? (
          <Map
            onInfoWindowClick={handleInfoWindowClick}
            locations={locations}
          />
        ) : null}
        {animationCompanies.length ? (
          <AnimationCompanies
            companies={animationCompanies.map((el) => el.attributes)}
            setSelectedCompany={setSelectedCompany}
          />
        ) : null}
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
      {selectedCompany ? (
        <Modal isOpen={!!selectedCompany?.slug} onClose={handlePopupClose}>
          <AnimationCompanyPopup
            companyPreview={selectedCompany}
            onClose={handlePopupClose}
          />
        </Modal>
      ) : null}
    </>
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
  const { animationCompanies } = await fetchData(
    GetAnimationCompaniesDocument,
    { locale },
  );
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

import {
  GetAnimatorsByFilterDocument,
  GetAnimationCompaniesDocument,
  type AnimatorPreviewFragment,
  type AnimationCompanyFragment,
  GetTourGuidesByFiltersDocument,
  GetTourOperatorCompaniesDocument,
  GetDeliveriesDocument,
} from "../../../gql/graphql";
// constants
import { REVALIDATE_TIME } from "../../../constants/page.constants";
import { RATING_FILTER_OPTIONS } from "../../../constants/filter-options";
// hooks
import { useRouter } from "next/router";
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
import CompanyFullInfo from "../../../components/layout/company-full-info";
import AnimationCompanies from "../../../components/sections/entertainers-tour-guides/animators/animation-companies";
// utils
import styled from "@emotion/styled";
import { mapLocations } from "../../../utils/location-mapper";
import { getCurrentLocation } from "../../../utils/get-location";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchData, fetchDataFromApi } from "../../../utils/fetchApi";
// types
import type { MapCard } from "../../../components/layout/map/children/types";
import type { selectOption } from "../../../components/types/filter";
import { useLoadScript } from "@react-google-maps/api";
import { Library } from "@googlemaps/js-api-loader";

type Animators = { attributes: AnimatorPreviewFragment }[];
type PageProps = {
  animators: Animators;
  initialTotalAnimators: number;
  animationCompanies: { attributes: AnimationCompanyFragment }[];
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
  const [result, setResult] = useState<Animators>();
  const [selectedCompany, setSelectedCompany] =
    useState<AnimationCompanyFragment>();

  const { i18n, t } = useTranslation("entertainers-tour-guides");
  const { isMobile } = useResponsive();
  const router = useRouter();
  const pageSize = useMemo(() => (isMobile ? 4 : 12), [isMobile]);

  useEffect(() => {
    const initialSlice = animators.slice(0, pageSize);
    setResult(initialSlice);
  }, [animators, pageSize]);

  // const libraries: Library[] = ["geometry"];
  //
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "YOUR_API_KEY",
  //   libraries,
  // });
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

  const filterOptions = RATING_FILTER_OPTIONS.map((el) => ({
    ...el,
    value: t(el.value),
  }));

  const animationCompaniesMapped = animationCompanies.map((el) => ({
    key: el.attributes.slug,
    value: el.attributes.name,
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

    if (company) {
      setSelectedCompany(company?.attributes);

      return;
    }

    const animator = animators.find((el) => el.attributes.slug === card.slug);

    if (!company && animator) {
      router.push(
        `/entertainers-tour-guides/animators/${animator.attributes.slug}`,
      );
    }
  };

  const locations = [
    ...mapLocations(animationCompanies, "/icons/animator-company-marker.svg"),
    ...mapLocations(animators, "/icons/animator-marker.svg"),
  ];

  const findNearestAnimator = async () => {
    if (typeof window === "undefined") return;
    try {
      const userLocation = await getCurrentLocation();
      // const userLocation = { lat: 27.9455979, lng: 34.349452 };
      console.log(1, userLocation, "userLocation");
      const data = await fetchDataFromApi(GetAnimatorsByFilterDocument, {
        locale: i18n.language,
      });
      console.log(2, data.animators?.data, "allAnimators");

      const animators = data?.animators?.data;
      if (!google?.maps?.geometry || !animators?.length) {
        throw new Error("Щось пішло не так з Google API або аніматорами.");
      }
      console.log(3, "userLocation");

      const myLatLng = new window.google.maps.LatLng(
        userLocation.lat,
        userLocation.lng,
      );
      console.log(4, "userLocation");

      let closestAnimator = null;
      let shortestDistance = Infinity;

      for (const animator of animators) {
        const location = animator?.attributes?.position;
        if (!location?.lat || !location?.lng) continue;

        const animatorLatLng = new window.google.maps.LatLng(
          location.lat,
          location.lng,
        );
        const distance =
          window.google.maps.geometry.spherical.computeDistanceBetween(
            myLatLng,
            animatorLatLng,
          );

        if (distance < shortestDistance) {
          shortestDistance = distance;
          closestAnimator = animator;
        }
      }

      if (closestAnimator) {
        // setResult(closestAnimator);
        console.log("Найближчий аніматор:", closestAnimator?.attributes?.name);
        alert(`succes:${closestAnimator?.attributes?.name}`);
      } else {
        alert("Не знайдено аніматорів поблизу.");
      }
    } catch (error: any) {
      console.error(error);
      alert(`Помилка при пошуку аніматора.${error?.code},${error?.message}`);
    }
  };

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
            // onClick={findNearestAnimator}
            color="blue"
            backgroundColor="transparent"
            text={t("buttons.nearestAnimator")}
          />
        </FiltersWrap>
        {result ? (
          <AnimatorCards animators={result.map((el) => el.attributes)} />
        ) : null}
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
          <CompanyFullInfo
            companyData={selectedCompany}
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
  const [{ animationCompanies }, { animators }] = await Promise.all([
    fetchData(GetAnimationCompaniesDocument, { locale }),
    fetchData(GetAnimatorsByFilterDocument, {
      locale,
    }),
  ]);

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

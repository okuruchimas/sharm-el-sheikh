import "swiper/css";
import "swiper/css/pagination";
import {
  type AdvertisementFragment,
  GetAdvertisementsDocument,
  GetAdvertisementCategoriesDocument,
} from "../../gql/graphql";
import { useState } from "react";
import { useTranslation } from "next-i18next";
// utils
import styled from "@emotion/styled";
import { fetchData } from "../../utils/fetchApi";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// components
import New from "../../components/sections/advertisements/new";
import All from "../../components/sections/advertisements/all";
import HotOffers from "../../components/sections/advertisements/hot";
import CreateAddForm from "../../components/sections/advertisements/children/adv-form";
import SectionWrapper from "../../components/layout/section-wrapper";
import SectionsWrapper from "../../components/layout/sections-wrapper";
import type { selectOption } from "../../components/types/filter";

export interface IAdvertisements {
  advertisements: AdvertisementFragment[];
  totalAdvertisements: number;
  advertisementCategories: selectOption[];
}

const Advertisements = ({
  advertisements,
  totalAdvertisements,
  advertisementCategories,
}: IAdvertisements) => {
  const [isForm, setIsForm] = useState<boolean>(false);
  const { t } = useTranslation("advertisements");
  const { t: tAgents } = useTranslation("agents");

  const adCategories = [
    { key: "other", value: t("category") },
    ...advertisementCategories,
  ];

  const handleClick = () => {
    setIsForm((prev) => !prev);
  };
  return (
    <Wrapper
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <HotOffers advertisements={advertisements} />

      <SectionWrapper
        title={t("checkNewAds")}
        buttonText={tAgents("addAdvertisement")}
        onClick={handleClick}
      >
        <New advertisements={advertisements} />
      </SectionWrapper>

      <SectionWrapper title={t("allAdvertisements")}>
        <All
          initialAdvertisements={advertisements}
          totalAdvertisements={totalAdvertisements}
          buttonClick={handleClick}
          advertisementCategories={adCategories}
        />
      </SectionWrapper>

      {isForm ? (
        <CreateAddForm
          cancelClick={handleClick}
          advertisementCategories={adCategories}
        />
      ) : null}
    </Wrapper>
  );
};
export default Advertisements;

export async function getStaticProps({ locale }: any) {
  const [{ advertisements }, { advertisementCategories }] = await Promise.all([
    fetchData(GetAdvertisementsDocument, {
      page: 1,
      pageSize: 12,
    }),
    fetchData(GetAdvertisementCategoriesDocument, { locale }),
  ]);

  return {
    props: {
      advertisements: advertisements?.data?.map((el) => el.attributes),
      totalAdvertisements: advertisements?.meta.pagination.total,
      advertisementCategories: advertisementCategories?.data.map(
        (el) => el.attributes,
      ),
      ...(await serverSideTranslations(locale, [
        "common",
        "agents",
        "advertisements",
      ])),
    },
  };
}

const Wrapper = styled(SectionsWrapper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  alignItems: "center",
  justifyContent: "center",

  paddingTop: "242px",

  [theme.breakpoints.mobile]: {
    paddingTop: "120px",
    gap: "32px",
  },
}));

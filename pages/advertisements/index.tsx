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
import {
  BannerBackground,
  BannerSubTitle,
  BannerTitle,
  BannerWrap,
} from "../../components/layout/banner/banner";
import {
  BannerStyledButton,
  ContentWithBgFirst,
} from "../../components/sections/agents/children/banners";
import { useRouter } from "next/router";
import FullAdd from "../../components/sections/agents/children/full-add";
import { formatDate } from "../../utils/formateDate";

export interface IAdvertisements {
  advertisements: AdvertisementFragment[];
  totalAdvertisements: number;
  advertisementCategories: selectOption[];
  vipAdvertisements?: AdvertisementFragment[];
  latestAdvertisements?: AdvertisementFragment[];
}

const Advertisements = ({
  advertisements,
  totalAdvertisements,
  advertisementCategories,
  vipAdvertisements,
  latestAdvertisements,
}: IAdvertisements) => {
  const [isForm, setIsForm] = useState<boolean>(false);
  const [fullAd, setFullAd] = useState<AdvertisementFragment | undefined>(
    undefined,
  );

  const { t } = useTranslation("advertisements");
  const { t: tAgents } = useTranslation("agents");
  const { push } = useRouter();

  const adCategories = [
    { key: "other", value: t("category") },
    ...advertisementCategories,
  ];

  const handleClick = () => {
    if (!isForm) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsForm((prev) => !prev);
  };

  const handlePopupClick = (fullAd: AdvertisementFragment) => {
    return setFullAd((prev) => (!!prev ? undefined : fullAd));
  };
  const handlePopupClose = () => {
    setFullAd(undefined);
  };

  return (
    <Wrapper
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <HotOffers
        advertisements={vipAdvertisements}
        onElementClick={handlePopupClick}
      />

      <SectionWrapper
        title={t("checkNewAds")}
        buttonText={tAgents("addAdvertisement")}
        onClick={handleClick}
      >
        <New
          onElementClick={handlePopupClick}
          advertisements={latestAdvertisements}
        />
      </SectionWrapper>

      <SectionWrapper title={t("allAdvertisements")}>
        <All
          initialAdvertisements={advertisements}
          totalAdvertisements={totalAdvertisements}
          buttonClick={handleClick}
          advertisementCategories={adCategories}
          onElementClick={handlePopupClick}
        />
      </SectionWrapper>

      <BannerWrap>
        <BannerBackground imgLink="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/b082125564d53afd56fcfeb74e2bb673121236e2_71efebeea0.webp" />
        <ContentWithBgFirst>
          <BannerTitle>Upgrade Your World with the Latest Phones!</BannerTitle>
          <BannerSubTitle>
            Explore, Choose, and Buy Now at Unbeatable Prices. <br />
            Don’t Miss Out — Grab Yours Today!
          </BannerSubTitle>

          <BannerStyledButton text="Choose" onClick={() => push("/")} />
        </ContentWithBgFirst>
      </BannerWrap>

      {/*{fullAd ? (*/}
      {/*  <FullAdd*/}
      {/*    title={fullAd.title}*/}
      {/*    price={fullAd.price}*/}
      {/*    location={fullAd.location}*/}
      {/*    date={formatDate(fullAd.createdAt)}*/}
      {/*    imageUrl={*/}
      {/*      fullAd.images?.data[0]?.attributes?.url ||*/}
      {/*      "/images/background/background-prom.svg"*/}
      {/*    }*/}
      {/*    imageAlt={*/}
      {/*      fullAd.images?.data[0]?.attributes?.alternativeText ||*/}
      {/*      "photo of advertisement"*/}
      {/*    }*/}
      {/*    isOpen={!!fullAd}*/}
      {/*    otherAddInfo={{*/}
      {/*      description: fullAd.description,*/}
      {/*      contactMethod: fullAd.contactMethod,*/}
      {/*      name: fullAd.name,*/}
      {/*      mobile: fullAd.mobile,*/}
      {/*      email: fullAd.email,*/}
      {/*      createdAt: fullAd.createdAt,*/}
      {/*      images: fullAd.images,*/}
      {/*    }}*/}
      {/*    onClose={handlePopupClose}*/}
      {/*  />*/}
      {/*) : null}*/}

      {/*{isForm ? (*/}
      {/*  <CreateAddForm*/}
      {/*    cancelClick={handleClick}*/}
      {/*    advertisementCategories={adCategories}*/}
      {/*  />*/}
      {/*) : null}*/}
    </Wrapper>
  );
};

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

export async function getStaticProps({ locale }: any) {
  const [
    { advertisements },
    { advertisementCategories },
    { advertisements: vipAds },
  ] = await Promise.all([
    fetchData(GetAdvertisementsDocument, {
      page: 1,
      pageSize: 12,
    }),
    fetchData(GetAdvertisementCategoriesDocument, { locale }),
    fetchData(GetAdvertisementsDocument, {
      vipFilter: { eq: true },
    }),
  ]);

  return {
    props: {
      advertisements: advertisements?.data?.map((el) => el.attributes),
      totalAdvertisements: advertisements?.meta.pagination.total || 0,
      advertisementCategories: advertisementCategories?.data.map(
        (el) => el.attributes,
      ),
      vipAdvertisements: vipAds?.data.map((el) => el.attributes),
      latestAdvertisements: advertisements?.data
        .slice(0, 8)
        .map((el) => el.attributes),
      ...(await serverSideTranslations(locale, [
        "common",
        "agents",
        "advertisements",
      ])),
    },
  };
}
export default Advertisements;

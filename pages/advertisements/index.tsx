import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "next-i18next";
// utils
import styled from "@emotion/styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HotOffers from "../../components/sections/advertisements/hot";
import All from "../../components/sections/advertisements/all";
import New from "../../components/sections/advertisements/new";
import CreateAddForm from "../../components/sections/advertisements/children/adv-form";
import { useState } from "react";
import SectionWrapper from "../../components/layout/section-wrapper";
import SectionsWrapper from "../../components/layout/sections-wrapper";
import { fetchData } from "../../utils/fetchApi";
import { DeliveryFragment, GetDeliveriesDocument } from "../../gql/graphql";

export interface IAdvertisements {
  advertisements: DeliveryFragment[];
}

const Advertisements = ({ advertisements }: IAdvertisements) => {
  const [isForm, setIsForm] = useState<boolean>(false);
  const { t } = useTranslation("common");
  const handleClick = () => {
    setIsForm((prev) => !prev);
  };
  return (
    <Wrapper
      url="/images/background/background-gradient.svg"
      mobUrl="/images/background/mobile-background-gradient.svg"
    >
      <HotOffers />

      <SectionWrapper
        title={"Check New Ads"}
        buttonText={"Add Advertisement"}
        onClick={handleClick}
      >
        <New advertisements={advertisements} />
      </SectionWrapper>

      <SectionWrapper title={"All Advertisements"}>
        <All advertisements={advertisements} buttonClick={handleClick} />
      </SectionWrapper>

      {isForm ? <CreateAddForm cancelClick={handleClick} /> : null}
    </Wrapper>
  );
};
export default Advertisements;

export async function getStaticProps({ locale }: any) {
  const { deliveries } = await fetchData(GetDeliveriesDocument, {
    page: 1,
    pageSize: 4,
    publicationType: "to",
  });

  return {
    props: {
      advertisements: deliveries?.data?.map((el) => el.attributes),
      ...(await serverSideTranslations(locale, ["common", "agents"])),
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

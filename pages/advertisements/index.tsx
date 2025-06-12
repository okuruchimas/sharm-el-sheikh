import { useTranslation } from "next-i18next";
// components
import Image from "../../components/layout/image";
// utils
import styled from "@emotion/styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HotOffers from "../../components/sections/advertisements/hot";
import All from "../../components/sections/advertisements/all";
import New from "../../components/sections/advertisements/new";
import CreateAddForm from "../../components/sections/advertisements/children/adv-form";
import { useState } from "react";
import SectionWrapper from "../../components/layout/section-wrapper";
import { handle } from "mdast-util-to-markdown/lib/handle";
import SectionsWrapper from "../../components/layout/sections-wrapper";

const Advertisements = () => {
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
        <New />
      </SectionWrapper>

      <SectionWrapper title={"All Advertisements"}>
        <All buttonClick={handleClick} />
      </SectionWrapper>

      {isForm ? <CreateAddForm cancelClick={handleClick} /> : null}
    </Wrapper>
  );
};
export default Advertisements;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
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

import React from "react";
import Container from "../../components/sections/entertainers-tour-guides/children/container";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TourAndGuides = () => {
  return <Container>tour na avi</Container>;
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["company-page", "common"])),
    },
  };
}

export default TourAndGuides;

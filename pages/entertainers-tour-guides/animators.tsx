import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Container from "../../components/sections/entertainers-tour-guides/children/container";

const Animators = () => {
  return <Container>anime na avi</Container>;
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["company-page", "common"])),
    },
  };
}

export default Animators;

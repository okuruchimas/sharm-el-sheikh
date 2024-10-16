import { useTranslation } from "next-i18next";
// components
import Image from "../components/layout/image";
// utils
import styled from "@emotion/styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const NotFoundPage = () => {
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <Image
        width="300px"
        height="120px"
        alt="placeholder image"
        src="/images/background/background-prom.svg"
      />
      <h1>{t("404")}</h1>
    </Wrapper>
  );
};
export default NotFoundPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",

  height: "calc(100vh - 55px)",

  h1: {
    color: theme.colors.blue,
  },
}));

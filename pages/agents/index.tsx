import { useTranslation } from "next-i18next";
// components
import Image from "../../components/layout/image";
// utils
import styled from "@emotion/styled";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Agents = () => {
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <Image
        width="300px"
        height="120px"
        alt="placeholder image"
        src="/images/background/background-prom.svg"
        priority
      />
      <h1>
        {t("comingSoon")}
        <span />
      </h1>
    </Wrapper>
  );
};
export default Agents;

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
    margin: "0 auto",
    color: theme.colors.blue,
    textAlign: "center",
    maxWidth: "80%",
    span: {
      display: "inline-block",
      height: 18,
      width: 1,
      "&::before": {
        animation: "dots 2s linear infinite",
        content: '""',
      },
    },
  },
}));

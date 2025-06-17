import { REVALIDATE_TIME } from "../constants/page.constants";
// components
import App from "next/app";
import Layout from "../components/layout/layout";
import GlobalStyles from "../components/layout/global-styles";
// utils
import { fetchData } from "../utils/fetchApi";
import { ThemeProvider } from "@emotion/react";
// types
import type { AppProps } from "next/app";
// styles
import { theme } from "../context/theme/theme";
// config
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";
// queries
import { GetFooterDocument, GetHeaderDocument } from "../gql/graphql";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { headerData, footerData } = pageProps;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout footerData={footerData} headerData={headerData}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);

  const locale = ctx.ctx.locale || "en";

  const [{ header: headerData }, { footer: footerData }] = await Promise.all([
    fetchData(GetHeaderDocument, { locale }),
    fetchData(GetFooterDocument, { locale }),
  ]);

  return {
    ...appProps,
    pageProps: {
      headerData: headerData?.data?.attributes,
      footerData: footerData?.data?.attributes,
    },
    revalidate: REVALIDATE_TIME,
  };
};

export async function getStaticPaths() {
  const headerData = await fetchData(GetHeaderDocument);

  const locales = nextI18NextConfig.i18n.locales;

  const paths = headerData?.header?.data?.attributes?.Menu?.flatMap((el) => {
    return locales.map((locale) => ({
      params: { slug: el?.Link },
      locale,
    }));
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
}
export default appWithTranslation(MyApp, nextI18NextConfig);

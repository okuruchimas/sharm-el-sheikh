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
  const headerData = await fetchData(GetHeaderDocument, { locale });
  const footerData = await fetchData(GetFooterDocument, { locale });

  return {
    ...appProps,
    pageProps: {
      headerData: headerData.header?.data?.attributes,
      footerData: footerData.footer?.data?.attributes,
    },
  };
};
export default appWithTranslation(MyApp, nextI18NextConfig);

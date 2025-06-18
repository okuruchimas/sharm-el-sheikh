// components
import Layout from "../components/layout/layout";
import GlobalStyles from "../components/layout/global-styles";
// utils
import { ThemeProvider } from "@emotion/react";
// types
import type { AppProps } from "next/app";
// styles
import { theme } from "../context/theme/theme";
// config
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";

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
export default appWithTranslation(MyApp, nextI18NextConfig);

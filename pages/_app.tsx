// components
import App from "next/app";
import Layout from "../components/layout/layout";
import GlobalStyles from "../components/layout/global-styles";
// utils
import { fetchAPI } from "../utils/fetchApi";
import { ThemeProvider } from "@emotion/react";
import { mapFooterResponse, mapHeaderResponse } from "../utils/mapper";
// types
import type { AppProps } from "next/app";
// styles
import { theme } from "../context/theme/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { headerData, footerData } = pageProps;
  const footerProps = mapFooterResponse(footerData);
  const headerProps = mapHeaderResponse(headerData);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout footerProps={footerProps} headerProps={headerProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);

  const [headerData, footerData] = await Promise.all([
    fetchAPI("header?populate=*"),
    fetchAPI("footer?populate=socialIcons.icon"),
  ]);

  return {
    ...appProps,
    pageProps: {
      headerData,
      footerData,
    },
  };
};
export default MyApp;

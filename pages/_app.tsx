// components
import App from "next/app";
import Layout from "../components/layout/layout";
// utils
import { Global, css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
// types
import type { AppProps } from "next/app";
// styles
import { theme } from "../context/theme/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { footer } = pageProps;

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            font-family: Comfortaa, sans-serif;
            padding: 0;
            margin: 0;
          }

          html,
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <Layout footer={footer}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);

  const socialIcons = [
    { iconSrc: "icons/social-icons/instagram.svg", socialLink: "/" },
    { iconSrc: "icons/social-icons/telegram.svg", socialLink: "/" },
    { iconSrc: "icons/social-icons/facebook.svg", socialLink: "/" },
    { iconSrc: "icons/social-icons/youtube.svg", socialLink: "/" },
    { iconSrc: "icons/social-icons/tiktok.svg", socialLink: "/" },
  ];

  return {
    ...appProps,
    pageProps: {
      footer: socialIcons,
    },
  };
};
export default MyApp;

import type { AppProps } from "next/app";
import App from "next/app";
import { Global, css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../context/theme/theme";
import Layout from "../components/layout/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { footer } = pageProps;

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
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

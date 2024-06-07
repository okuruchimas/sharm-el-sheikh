import type { AppProps } from "next/app";
import { LanguageProvider } from "../context/language-context";
import { Global, css } from "@emotion/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
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
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";

import { ThemeProvider } from "@emotion/react";
import { theme } from "../context/theme/theme";

const App = ({ Component, pageProps }: AppProps) => {
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;

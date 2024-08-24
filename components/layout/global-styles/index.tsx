import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
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
);

export default GlobalStyles;

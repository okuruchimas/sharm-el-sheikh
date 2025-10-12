import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        font-family: Comfortaa, sans-serif;
        padding: 0;
        margin: 0;
      }
      html {
        scroll-behavior: smooth;
      }

      html,
      body {
        padding: 0;
        margin: 0;
      }

      a {
        color: unset;
      }

      .collapse {
        display: block;
        height: 0;
        overflow: hidden;
        transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .collapse.show {
        height: auto;
      }

      .collapsing {
        height: 0;
        overflow: hidden;
        transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `}
  />
);

export default GlobalStyles;

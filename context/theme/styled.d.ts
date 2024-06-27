import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      black: string;
      white: string;
      white2: string;
      white3: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
      grey5: string;
      blue: string;
      blue2: string;
      blue3: string;
      blue4: string;
      blue5: string;
      yellow: string;
      [key: string]: string;
    };
    fontSize: {
      fontS12: string;
      fontS14: string;
      fontS16: string;
      fontS18: string;
      fontS20: string;
      fontS22: string;
      fontS24: string;
      fontS28: string;
      fontS32: string;
      fontS40: string;
      fontS48: string;
      fontS68: string;
    };
    breakpoints: {
      mobile: string;
      mobile1: string;
    };
  }
}

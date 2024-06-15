import React from "react";
import styled from "@emotion/styled";

import { Hr } from "../hr";

const Footer = () => {
  return (
    <Wrap>
      <Hr />
      Footer
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 92vw;
  bottom: 0;
  padding: 2vh 4vw;
  height: 10vh;
`;

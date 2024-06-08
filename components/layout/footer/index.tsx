import styled from "@emotion/styled";
import React from "react";
import { Hr } from "../hr";

const Footer = () => {
  return (
    <Wrap>
      <Hr />
      Footer
    </Wrap>
  );
};

export { Footer };

const Wrap = styled.div`
  width: 92vw;
  bottom: 0;
  padding: 2vh 4vw;
  height: 10vh;
`;

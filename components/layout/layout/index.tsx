import React from "react";
import StickyContainer from "../header/children/sticky-container";
import Header from "../header";
import Footer from "../footer";
import styled from "@emotion/styled";

const Layout = ({ children, footer }: any) => {
  return (
    <Wrap>
      <StickyContainer>
        <Header />
      </StickyContainer>
      {children}
      <Footer socialIcons={footer} />
    </Wrap>
  );
};

const Wrap = styled.div`
  padding-bottom: 40px;
`;

export default Layout;

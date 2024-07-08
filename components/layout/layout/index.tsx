import React from "react";
import StickyContainer from "../header/children/sticky-container";
import Header from "../header";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Loader from "../loader";
import LazyWrapper from "../lazy-wrapper";

const DynamicFooter = dynamic(() => import("../footer"), {
  loading: () => <Loader />,
});
const Layout = ({ children, footer }: any) => {
  return (
    <Wrap>
      <StickyContainer>
        <Header />
      </StickyContainer>
      {children}
      <LazyWrapper minHeight={55}>
        <DynamicFooter socialIcons={footer} />
      </LazyWrapper>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding-bottom: 40px;
`;

export default Layout;

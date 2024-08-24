// libs
import dynamic from "next/dynamic";
// components
import StickyContainer from "../header/children/sticky-container";
import Header, { type HeaderProps } from "../header";
import Loader from "../loader";
import LazyWrapper from "../lazy-wrapper";
// utils
import styled from "@emotion/styled";
// types
import type { ReactNode } from "react";
import type { FooterProps } from "../footer";

const DynamicFooter = dynamic(() => import("../footer"), {
  loading: () => <Loader />,
});

type LayoutProps = {
  children: ReactNode;
  footerProps: FooterProps;
  headerProps: HeaderProps;
};

const Layout = ({ children, footerProps, headerProps }: LayoutProps) => (
  <Wrap>
    <StickyContainer>
      <Header logo={headerProps.logo} navMenu={headerProps.navMenu} />
    </StickyContainer>
    {children}
    <LazyWrapper minHeight={55}>
      <DynamicFooter socialIcons={footerProps.socialIcons} />
    </LazyWrapper>
  </Wrap>
);

const Wrap = styled("div")({
  paddingBottom: "40px",
});

export default Layout;

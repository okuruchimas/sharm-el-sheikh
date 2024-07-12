// libs
import dynamic from "next/dynamic";
// components
import StickyContainer from "../header/children/sticky-container";
import Header from "../header";
import Loader from "../loader";
import LazyWrapper from "../lazy-wrapper";
// utils
import styled from "@emotion/styled";

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

const Wrap = styled("div")({
  paddingBottom: "40px",
});

export default Layout;

// libs
import dynamic from 'next/dynamic';
// components
import StickyContainer from '../header/children/sticky-container';
import Header from '../header';
import Loader from '../loader';
import LazyWrapper from '../lazy-wrapper';
// utils
import styled from '@emotion/styled';
// types
import type { ReactNode } from 'react';
import type { FooterFragment, HeaderFragment } from '../../../gql/graphql';

const DynamicFooter = dynamic(() => import('../footer'), {
  loading: () => <Loader />,
});

type LayoutProps = {
  children: ReactNode;
  footerData: FooterFragment;
  headerData: HeaderFragment;
};

const Layout = ({ children, footerData, headerData }: LayoutProps) => (
  <Wrap>
    <StickyContainer>
      <Header logo={headerData.Logo} navMenu={headerData.Menu} />
    </StickyContainer>
    {children}
    <LazyWrapper minHeight={55}>
      <DynamicFooter socialIcons={footerData.socialIcons} />
    </LazyWrapper>
  </Wrap>
);

const Wrap = styled('div')({
  paddingBottom: '40px',
});

export default Layout;

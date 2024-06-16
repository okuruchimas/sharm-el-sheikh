import React, { useState } from "react";
import View from "./type";
import styled from "@emotion/styled";
import useDocumentScrollThrottled from "../../../../hooks/useDocumentScroll";

const StickyContainer = ({ children }: Props) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 300;

  useDocumentScrollThrottled(
    (callbackData: { previousScrollTop: any; currentScrollTop: any }) => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    },
  );
  return <Wrap hide={shouldHideHeader}>{children}</Wrap>;
};

interface Props {
  children: View;
}

export default StickyContainer;

const Wrap = styled.div<{ hide: any }>`
  position: absolute;
  & > div {
    transform: ${({ hide }) => `translateY(${hide ? -110 : -1}%)`};
    transition: transform 0.2s ease;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
`;

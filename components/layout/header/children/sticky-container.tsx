// libs
import React, { useState } from "react";
// hooks
import useDocumentScrollThrottled from "../../../../hooks/useDocumentScroll";
// utils
import styled from "@emotion/styled";
// types
import type View from "./type";

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

const Wrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "hide",
})<{ hide: any }>(({ hide }) => ({
  "&>div": {
    transform: hide ? "translateY(-110%)" : "translateY(0%)",
    transition: "transform 0.2s ease",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "100",
  },
}));

export default StickyContainer;

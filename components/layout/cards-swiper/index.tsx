import "swiper/css";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
import { Swiper } from "swiper/react";
import Placeholder from "../../sections/promotions/children/placeholder";
// utils
import styled from "@emotion/styled";
// types
import type { ReactNode } from "react";

type SwiperCardsProps = {
  children?: ReactNode;
  dataLength?: number;
  placeholderText: string;
};
const CardsSwiper = ({
  children,
  dataLength,
  placeholderText,
}: SwiperCardsProps) => {
  const { isMobile } = useResponsive();

  if (!dataLength) return <Placeholder title={placeholderText} />;

  const slidesPerView = () => {
    if (dataLength <= 2 && isMobile) {
      return 1;
    }
    return isMobile ? 2 : 3;
  };

  return (
    <Wrapper
      slidesPerView={slidesPerView()}
      isSingleCard={dataLength <= 2}
      spaceBetween={12}
      navigation={false}
      pagination={{
        clickable: true,
      }}
      loop
    >
      {children}
    </Wrapper>
  );
};

export const Wrapper = styled(Swiper, {
  shouldForwardProp: (prop) => prop !== "isSingleCard",
})<{ isSingleCard: boolean }>(({ theme, isSingleCard }) => ({
  position: "relative",
  width: "100%",
  height: 360,

  [theme.breakpoints.mobile]: {
    width: "calc(100% + 32px)",
    marginLeft: -16,
  },

  ".swiper-wrapper": {
    alignItems: "center",
  },

  ".swiper-slide": {
    alignContent: "center",
    [theme.breakpoints.mobile]: {
      ".anime-card": {
        display: "none",
      },
    },
  },

  ".anime-card": {
    maxHeight: 302,
    height: 302,
    minHeight: "unset",
    minWidth: "unset",
    opacity: 0.8,
    transition: "height 0.5s ease, opacity 0.5s ease, width 0.5s ease",
    margin: "auto 0",
  },

  ".swiper-slide-prev": {
    [theme.breakpoints.mobile]: {
      ".anime-card": {
        display: "flex",
      },
      position: "relative",
      left: "7%",
    },
  },

  ".swiper-slide-active": {
    [theme.breakpoints.mobile]: {
      position: "relative",
      left: 30,
      ".anime-card": {
        display: "flex",
        minWidth: 276,
        width: "calc(90vw - 64px)",
        maxHeight: 342,
        height: 342,
        opacity: 1,
      },
    },
  },

  ".swiper-slide-next": {
    ".anime-card": {
      maxHeight: 342,
      height: 342,
      opacity: 1,
    },

    [theme.breakpoints.mobile]: {
      ".anime-card": {
        display: "flex",
        maxHeight: "initial",
        height: 302,
        opacity: isSingleCard ? 1 : 0.8,
      },
      position: "relative",
      left: isSingleCard ? "24px" : "44%",
    },
  },
}));

export default CardsSwiper;

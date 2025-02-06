import "swiper/css";
// hooks
import useResponsive from "../../../../../hooks/useResponsive";
import { useTranslation } from "next-i18next";
// components
import AnimatorCard from "../card";
import Placeholder from "../../../promotions/children/placeholder";
import { Swiper, SwiperSlide } from "swiper/react";
// utils
import styled from "@emotion/styled";
// types
import type { AnimatorPreviewFragment } from "../../../../../gql/graphql";

type AnimatorCardsProps = {
  animators: AnimatorPreviewFragment[];
};
const PopApCards = ({ animators }: AnimatorCardsProps) => {
  const { t } = useTranslation("entertainers-tour-guides");
  const { isMobile } = useResponsive();

  return animators.length ? (
    <Wrapper
      slidesPerView={isMobile ? 2 : 3}
      spaceBetween={12}
      navigation={false}
      pagination={{
        clickable: true,
      }}
      loop
    >
      {animators.map((el) => (
        <SwiperSlide key={el.slug}>
          <AnimatorCard animator={el} size="s" />
        </SwiperSlide>
      ))}
    </Wrapper>
  ) : (
    <Placeholder title={t("placeholders.noAnimators")} />
  );
};

const Wrapper = styled(Swiper)(({ theme }) => ({
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
        opacity: 0.8,
      },
      position: "relative",
      left: "44%",
    },
  },
}));
export default PopApCards;

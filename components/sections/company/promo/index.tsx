// components
import Swiper from "../../promotions/children/swiper";
import Rating from "../../../layout/rating";
import NextImage from "../../../layout/image";
// utils
import styled from "@emotion/styled";
// types
import type { FC } from "react";
import type { PromCardI } from "../../../../pages/api/prom-cards";

interface PromoI
  extends Pick<
    PromCardI,
    "images" | "discount" | "slug" | "title" | "location"
  > {}

const Promo: FC<PromoI> = ({ images, discount, slug, title, location }) => (
  <SectionWrapper>
    <ContentWrapper>
      <SwiperWrapper>
        <Swiper images={images} discount={discount} />
      </SwiperWrapper>
      <TopWrapper>
        <Title>{title}</Title>
        <RatingWrapper>
          <Rating points={4.5} users={777} />
        </RatingWrapper>
      </TopWrapper>
      <Location>
        <NextImage
          src="/icons/promotions-section/location.svg"
          alt="Location image"
          height="30px"
          width="30px"
          mHeight="18px"
          mWidth="18px"
        />
        <span>{location}</span>
      </Location>
    </ContentWrapper>
  </SectionWrapper>
);

const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",
  height: "100%",
  padding: "24px",
  backgroundColor: theme.colors.white,
  borderRadius: "30px",
  boxShadow: theme.shadows[0],

  [theme.breakpoints.mobile]: {
    gap: "16px",
    padding: "10px",
    borderRadius: "20px",
  },
}));

const SectionWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 80px)",
  padding: "122px 0 10px",

  [theme.breakpoints.mobile]: {
    height: "calc(65vh - 32px)",
    padding: "88px 0 10px",
  },
}));

const TopWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    gap: "8px",
  },
}));

const RatingWrapper = styled("div")(({ theme }) => ({
  span: { fontSize: theme.fontSize.fontS32 },

  "& .image-wrapper": {
    width: "33px",
    height: "33px",
  },

  [theme.breakpoints.mobile]: {
    span: { fontSize: theme.fontSize.fontS12 },

    "& .image-wrapper": {
      width: "16px",
      height: "16px",
    },
  },
}));

const Title = styled("h1")(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  color: theme.colors.blue,
  fontWeight: 700,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
    fontWeight: 600,
  },
}));

const Location = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontSize: theme.fontSize.fontS24,
  fontWeight: 500,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS12,
    fontWeight: 400,
    gap: "8px",
  },
}));

const SwiperWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",

  "> div": {
    borderRadius: "30px",
  },

  [theme.breakpoints.mobile]: {
    "> div": {
      borderRadius: "12px",
    },
  },
}));

export default Promo;

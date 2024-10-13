// components
import Swiper from "../../promotions/children/swiper";
import Rating from "../../../layout/rating";
// utils
import styled from "@emotion/styled";
// types
import type { CompanyCardFragment } from "../../../../gql/graphql";
import { Title } from "../../../layout/title";

type PromoI = Pick<
  CompanyCardFragment,
  | "images"
  | "discount"
  | "title"
  | "position"
  | "location"
  | "totalComments"
  | "averageRating"
>;

const Promo = ({
  images,
  discount,
  title,
  location,
  totalComments,
  averageRating,
}: PromoI) => (
  <SectionWrapper>
    <ContentWrapper>
      <SwiperWrapper>
        <Swiper images={images} discount={discount} />
      </SwiperWrapper>
      <TopWrapper>
        <TitleStyled>{title}</TitleStyled>
        <RatingWrapper>
          <Rating
            points={averageRating.toFixed(1) || 0}
            users={totalComments || 0}
          />
        </RatingWrapper>
      </TopWrapper>
      <Location>
        <LocationIcon
          src="/icons/promotions-section/location.svg"
          alt="location icon"
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
  margin: "122px 0 10px",

  [theme.breakpoints.mobile]: {
    height: "340px",
    margin: "30px 0 10px",
  },
}));

const LocationIcon = styled("img")(({ theme }) => ({
  width: "30px",
  height: "30px",

  [theme.breakpoints.mobile]: {
    height: "18px",
    width: "18px",
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

const TitleStyled = styled(Title)(({ theme }) => ({
  fontWeight: 700,

  [theme.breakpoints.mobile]: {
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
  minHeight: "198px",

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

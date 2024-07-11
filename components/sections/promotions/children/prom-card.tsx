//libs
import Link from "next/link";
//components
import { SubTitle } from "../../../layout/subtitle";
import Swiper from "./swiper";
//utils
import styled from "@emotion/styled";
//types
import { PromCardI } from "../../../../pages/api/prom-cards";
import { theme } from "../../../../context/theme/theme";

const PromCard = ({ discount, images, location, title, slug }: PromCardI) => {
  return (
    <Wrap>
      <SwiperWrapper>
        <Swiper images={images} discount={discount} />
      </SwiperWrapper>
      <DownWrap>
        <Up>
          <SubTitle>{title}</SubTitle>
          <RatingWrap>
            <RatingStar
              src={"icons/promotions-section/star-rating.svg"}
              alt="star-rating"
            />
            <RatingPoints>4.5&nbsp;</RatingPoints>
            <RatingViews>(600)</RatingViews>
          </RatingWrap>
        </Up>
        <Down>
          <Location>
            <LocIcon src="icons/promotions-section/location.svg" />
            <LocationPlace>{location}</LocationPlace>
          </Location>
          <Link href={slug || ""}>
            <IconButton
              src={"icons/promotions-section/circle-arrow-outlined.svg"}
              alt="promotions-button"
            />
          </Link>
        </Down>
      </DownWrap>
    </Wrap>
  );
};

const Wrap = styled("div")({
  height: "420px",
});

const SwiperWrapper = styled("div")({
  height: "60%",
  width: "100%",
  borderRadius: "16px 16px 0 0",
  position: "relative",
});

const DownWrap = styled("div")(({ theme }) => ({
  height: "40%",
  borderRadius: "0 0 16px 16px",
  backgroundColor: theme.colors.blue4,
  border: `1px solid ${theme.colors.blue5}`,
  borderTopStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "16px",
  padding: "16px 16px 24px",

  [theme.breakpoints.mobile]: {
    padding: "10px",
    gap: "4px",
  },
}));

const Up = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    gap: "8px",
  },
}));

const Down = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.mobile]: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

const RatingWrap = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const RatingStar = styled("img")(({ theme }) => ({
  height: "24px",
  width: "24px",
  marginRight: "8px",

  [theme.breakpoints.mobile]: {
    height: "18px",
    width: "18px",
  },
}));

const RatingPoints = styled("span")(({ theme }) => ({
  fontWeight: "600",
  fontSize: theme.fontSize.fontS18,
  textAlign: "center",

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS12,
  },
}));

const RatingViews = styled(RatingPoints)({
  color: theme.colors.grey,
});

const Location = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const LocIcon = styled("img")(({ theme }) => ({
  height: "30px",
  width: "30px",

  [theme.breakpoints.mobile]: {
    height: "18px",
    width: "18px",
  },
}));

const LocationPlace = styled("div")(({ theme }) => ({
  fontSize: theme.fontSize.fontS16,
  fontWeight: "400",
  marginLeft: "8px",
  color: theme.colors.black,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS12,
  },
}));

const IconButton = styled("img")(({ theme }) => ({
  cursor: "pointer",
  width: "40px",
  height: "40px",
  transition: "transform 0.3s ease",

  [theme.breakpoints.mobile]: {
    width: "30px",
    height: "30px",
  },

  "&:active, &:focus": {
    transform: "scale(1.3)",
  },
}));

export default PromCard;

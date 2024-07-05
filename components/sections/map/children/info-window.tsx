// components
import Image from "next/image";
// utils
import styled from "@emotion/styled";
// types
import type { FC } from "react";
import { PromCardI } from "../../../types/promCard";

type InfoWindowProps = {
  location: PromCardI;
};

const InfoWindow: FC<InfoWindowProps> = ({ location }) => (
  <InfoWindowContent>
    <Image
      src={`/${location?.images[0].src}`}
      alt={location.title}
      width={172}
      height={113}
    />
    <DetailsWrapper>
      <NameRatingWrapper>
        <Name>{location.title}</Name>
        <RatingWrap>
          <RatingStar
            src={"/icons/promotions-section/star-rating.svg"}
            alt="star-rating"
            width={10}
            height={10}
          />
          <Rating>
            4.5&nbsp;
            <span>(600)</span>
          </Rating>
        </RatingWrap>
      </NameRatingWrapper>
      <LocationWrapper>
        <Image
          src="/icons/promotions-section/location.svg"
          alt="location-icon"
          width={14}
          height={14}
        />
        <LocationText>{location.location}</LocationText>
      </LocationWrapper>
    </DetailsWrapper>
  </InfoWindowContent>
);

const InfoWindowContent = styled("div")(({ theme }) => ({
  maxWidth: "172px",
  borderRadius: "8px",
  fontFamily: "Comfortaa, sans-serif",
  boxShadow: `1px 1px 16px ${theme.colors.black1}`,
  overflow: "hidden",
  backgroundColor: theme.colors.white3,

  [`@media (${theme.breakpoints.mobile})`]: {
    borderRadius: "12px",
    maxWidth: "152px",
  },
}));

const DetailsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "8px 8px",
  justifyContent: "space-between",
  gap: "4px",
  backgroundColor: theme.colors.white3,

  [`@media (${theme.breakpoints.mobile})`]: {
    padding: "10px 8px",
  },
}));

const NameRatingWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",

  [`@media (${theme.breakpoints.mobile})`]: {
    flexDirection: "column",
    gap: "4px",
  },
}));

const Name = styled("div")(({ theme }) => ({
  color: theme.colors.blue,
  fontSize: theme.fontSize.fontS12,
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0.1px",

  [`@media (${theme.breakpoints.mobile})`]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

const RatingWrap = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const RatingStar = styled(Image)({
  marginRight: "3px",
});

const Rating = styled("span")(({ theme }) => ({
  fontWeight: 600,
  fontSize: theme.fontSize.fontS10,

  "> span": {
    color: theme.colors.grey1,
  },
}));

const LocationWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const LocationText = styled("span")(({ theme }) => ({
  fontSize: theme.fontSize.fontS10,
  color: theme.colors.black1,
  marginLeft: "4px",

  [`@media (${theme.breakpoints.mobile})`]: {
    fontSize: theme.fontSize.fontS12,
  },
}));

export default InfoWindow;
